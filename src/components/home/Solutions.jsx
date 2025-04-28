'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ShineBorder } from '../magicui/shine-border';
import Loading from '@/app/loading';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';

export default function Solutions() {

    let [lang, setLang] = useState('en');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    useEffect(() => {
        setLoading(true);
        if (typeof window !== 'undefined') {
            // Define the headers with the selected language
            setLang(localStorage.getItem('lang'));
            const headers = {
                lang: localStorage.getItem('lang'), // Change language dynamically based on state
            };
            // Fetch data from the API with Axios
            axios.get(`${API_BASE_URL}/landing/home/solutions`
                , {
                    headers: headers,
                })
                .then(response => {
                    setData(response.data.data);  // Set the response data to state
                    setLoading(false);  // Set loading to false
                })
                .catch(error => {
                    setError(error);  // Handle any errors
                    console.error('Error fetching data:', error);
                    setLoading(false)
                });
        }
    }, []);

    return (<>
        {
            loading ? <Loading /> :
                <div className="blogs" style={{ direction: `ltr` }} id='soultions'>
                    <div className="container m-auto">
                        <h3>{lang === 'en' ? 'Our Solutions ' : 'الحلول'}</h3>
                        <div className="path-swiper w-full" >
                            <Swiper
                                navigation
                                // pagination={{ type: "bullets", clickable: true }}
                                spaceBetween={24}
                                slidesPerView={7.5}
                                autoplay={false}
                                dir={lang === 'ar' ? 'rtl' : 'ltr'}
                                loop={true}
                                modules={[Autoplay, Navigation, Pagination]}
                                breakpoints={{
                                    1400: {
                                        slidesPerView: 3,
                                    },
                                    1100: {
                                        slidesPerView: 3,
                                    },
                                    767: {
                                        slidesPerView: 2.5,
                                    },
                                    768: {
                                        slidesPerView: 2.5,
                                        autoplay: false,
                                    },
                                    640: {
                                        slidesPerView: 2.1,
                                        autoplay: false,
                                        spaceBetween: 16
                                    },
                                    100: {
                                        slidesPerView: 1,
                                        autoplay: false,
                                        spaceBetween: 16

                                    }
                                }}
                            >
                                {data?.map((path) =>
                                    <SwiperSlide key={path.id}>
                                        <ShineBorder borderWidth={3} className="relative rounded-2xl p-6 h-full" color={["#54C8E8", "#185A7D"]}>
                                            <div className="solution-card">
                                                <div className="img-cont">
                                                    <Image src={path.icon} alt="Mazar" width={200} height={200} style={{objectPosition: lang === 'en' ? 'left' : 'right'}} />
                                                </div>
                                                <h4>{path.name}</h4>
                                                <p>{path.short_description}</p>
                                                {
                                                    path.description ?
                                                        <Link href={`/solution?id=${path.id}`} className='main-link-sec'><span>{lang === 'en' ? 'Know more' : 'اعرف المزيد'}</span> <i className={`fa-solid fa-chevron-${lang === 'en' ? "right" : "left"}`}></i></Link>
                                                        : null
                                                }
                                            </div>
                                        </ShineBorder>
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                    </div>
                </div>
        }
    </>
    );
}
