'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from 'axios';
import Loading from '@/app/loading';
import parse from 'html-react-parser';
import { API_BASE_URL } from '@/lib/apiConfig';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CaseStudies() {
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
            axios.get(`${API_BASE_URL}/landing/home/study-cases`
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
        <>
            {
                loading ? <Loading /> :
                    <div className="case-studies" >
                        <div className="container m-auto">
                            <h2>{lang === 'en' ? 'How we achieve success with them?' : 'كيف نحقق النجاح معهم'}</h2>
                            <h3>{lang === 'en' ? 'Take a  look to our case studies ' : 'استكشف حالاتنا '}</h3>
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
                                        slidesPerView: 1.1,
                                        autoplay: false,
                                        spaceBetween: 16

                                    }
                                }}
                            >
                                {data?.map((ele) =>
                                    <SwiperSlide key={ele.id}>
                                        <div className="study-cont">
                                            <motion.div
                                                initial={{ opacity: 0, scale: 1.5 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: .5 }}

                                            className="img-cont">
                                                <Image src={ele.image} alt="" width={100} height={100} />
                                            </motion.div>
                                            <h4>{ele.name}</h4>
                                            <p>{parse(ele.short_description)}</p>
                                            <Link href={`/case-study?id=${ele.id}`} ><span>{lang === 'en' ? 'Read more' : 'قراءة المزيد'}</span> {lang === 'en' ? <i className="fa-solid fa-chevron-right"></i> : <i className="fa-solid fa-chevron-left"></i>}</Link>
                                        </div>
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                    </div>
            }
        </>

    );
}
