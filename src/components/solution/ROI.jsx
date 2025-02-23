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

export default function ROI({ data, lang }) {
    const components = data.investments
    return (
        <div className="key-compo-cont ROI-compo-cont">
            <div className="container m-auto">
                <h3>{lang == 'en' ? "Returns on investments (ROI)" : "أرباح التوزيع (ROI)"}</h3>
                <Swiper
                    // navigation
                    // pagination={{ type: "bullets", clickable: true }}
                    spaceBetween={24}
                    slidesPerView={5}
                    autoplay={false}
                    dir={lang === 'ar' ? 'rtl' : 'ltr'}
                    loop={true}
                    modules={[Autoplay, Navigation, Pagination]}
                    breakpoints={{
                        1400: {
                            slidesPerView: 5,
                        },
                        1100: {
                            slidesPerView: 5,
                        },
                        767: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 3,
                            autoplay: false,
                        },
                        640: {
                            slidesPerView: 2.5,
                            autoplay: false,
                            spaceBetween: 16
                        },
                        100: {
                            slidesPerView: 2,
                            autoplay: false,
                            spaceBetween: 16

                        }
                    }}
                >
                    {components?.map((item , index) =>
                        <SwiperSlide key={index}>
                            <div className="content-card">
                                <div className="img-cont-roi">
                                    <Image src={item.icon} className='small-img' alt={item.title} width={200} height={200} />
                                </div>
                                <h5>{item.title}</h5>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    );
}
