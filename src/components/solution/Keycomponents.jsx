'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import parse from 'html-react-parser';
import solImage from '/public/ters.svg'

export default function Keycomponents({ data, lang }) {
    const components = data.components
    return (
        <>
            {
                components.length > 0 ?
                    <div className="key-compo-cont">
                        <div className="container m-auto">
                            <h3>{lang == 'en' ? "Key Benefits of system " : "مميزات للنظام"}</h3>
                            <Swiper
                                // navigation
                                // pagination={{ type: "bullets", clickable: true }}
                                spaceBetween={24}
                                slidesPerView={7.5}
                                autoplay={true}
                                speed={1000}
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
                                {components?.map((item, index) =>
                                    <SwiperSlide key={index}>
                                        <div className="content-card">
                                            <div className="img-cont">
                                                <Image src={item.icon} alt={item.title} width={200} height={200} />
                                            </div>
                                            <h4>{item.title}</h4>
                                        </div>
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                    </div>
                    : null
            }
        </>
    );
}
