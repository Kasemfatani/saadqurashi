'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import Loading from '@/app/loading';

export default function Content() {

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
            axios.get(`${API_BASE_URL}/landing/home/blogs`
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
    return (
        <div className="blogs" style={{ direction: `ltr` }} id='blogs'>
            {
                loading ? <Loading /> :
                    <div className="container m-auto">
                        <h3>{lang === 'en' ? 'Explore our blogs' : 'استكشف مدونتنا'}</h3>
                        <div className="path-swiper w-full" >
                            <Swiper
                                // navigation
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
                                        slidesPerView: 1.1,
                                        autoplay: false,
                                        spaceBetween: 16

                                    }
                                }}
                            >
                                {data?.map((path) =>
                                    <SwiperSlide key={path.id}>
                                        <div className="content-card">
                                            <div className="img-cont">
                                                <Image src={path.image} alt="Mazar" width={200} height={200} />
                                                <div className="overlay"></div>
                                            </div>
                                            <h4>{path.title}</h4>
                                            <p>{path.short_description}</p>
                                            <div className="date-book">

                                                <div className="book">
                                                    <Link href={`/blog?id=${path.id}`} className={`main-link`}><span>{lang === 'en' ? 'Read More' : 'قراءة المزيد'}</span> <i className={`fa-solid fa-chevron-${lang === 'en' ? "right" : "left"}`}></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                    </div>
            }
        </div>
    );
}
