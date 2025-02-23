'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; import axios from 'axios';
import Loading from '@/app/loading';
import { API_BASE_URL } from '@/lib/apiConfig';
export default function Hero() {
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
            axios.get(`${API_BASE_URL}/landing/home/sliders`
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
        <div className="hero">
            {
                loading ? <Loading /> :
                    <Swiper
                        // navigation
                        // pagination={{ type: "bullets", clickable: true }}
                        spaceBetween={24}
                        slidesPerView={7.5}
                        autoplay={true}
                        dir={lang === 'ar' ? 'rtl' : 'ltr'}
                        loop={true}
                        modules={[Autoplay, Navigation, Pagination]}
                        breakpoints={{
                            1400: {
                                slidesPerView: 1,
                            },
                            100: {
                                slidesPerView: 1,
                                autoplay: false,
                                spaceBetween: 16

                            }
                        }}
                    >
                        {data?.map((slider, index) =>
                            <SwiperSlide key={index}>
                                <div className="hero">
                                    <Image src={slider.image} alt="logo" className="hero-img image-bg" width={1000} height={1000} />
                                    <div className="overlay">
                                        <div className="heading">
                                            <h1>{slider.title}</h1>
                                            <p>{slider.description}</p>
                                            <div className="links">
                                                <Link href="/#services" className='sec-link'>{lang === 'en' ? 'Explore now ' : 'استكشف الان'}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}
                        {
                            data.length === 1 ?
                                <SwiperSlide>
                                    <div className="hero">
                                        <Image src={data[0].image} alt="logo" className="hero-img image-bg" width={1000} height={1000} />
                                        <div className="overlay">
                                            <div className="heading">
                                                <h1>{data[0].title}</h1>
                                                <p>{data[0].description}</p>
                                                <div className="links">
                                                    <Link href="/#services" className='sec-link'>{lang === 'en' ? 'Explore now ' : 'استكشف الان'}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                :null
                        }
                    </Swiper>
            }
        </div>
    );
}
