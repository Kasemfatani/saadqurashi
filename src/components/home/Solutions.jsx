'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img from '/public/sol/1.svg'
import img2 from '/public/sol/2.svg'
import img3 from '/public/sol/3.svg'
import img4 from '/public/sol/4.svg'
import { ShineBorder } from '../magicui/shine-border';

export default function Solutions() {

    const [lang, setLang] = useState('en');  // Default lang is 'en'
    useEffect(() => {
        // setLoading(true);
        if (typeof window !== 'undefined') {
            // Define the headers with the selected lang
            setLang(localStorage.getItem('lang'));
            const headers = {
                lang: localStorage.getItem('lang'), // Change lang dynamically based on state
            };

        }
    }, []);  // Run this effect whenever the `lang` changes
    function formatArabicDate(dateString) {
        // Parse the input date string into a JavaScript Date object
        const date = new Date(dateString);

        // Ensure the date is valid
        if (isNaN(date)) return "Invalid date";

        // Format the date to Arabic
        const arabicFormatter = new Intl.DateTimeFormat('ar-EG', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        });

        return arabicFormatter.format(date);
    }
    const data = [
        {
            id: 1,
            image: img,
            title: 'نظام ادارة الاكسيجين',
            titleEn: "Oxygen Management System:",
            description: 'المقال الاول',
            descripthionEn: "Our oxygen management system is designed for the medical sector.",
            date: '2023-01-01',
            slug: 'blog1',
        },
        {
            id: 2,
            image: img2,
            title: 'المقال الثاني',
            titleEn: "iot article",
            description: 'نظام ادارة الاكسيجين',  
            descripthionEn: "Our oxygen management system is designed for the medical sector. Our oxygen management system is designed for the medical sector.",
            date: '2023-02-01',
            slug: 'blog2',
        },
        {
            id: 3,
            image: img3,
            title: 'المقال الثالث',
            titleEn: "iot article",
            description: 'المقال الثالث',
            descripthionEn: "Our oxygen management system is designed for the medical sector. Our oxygen management system is designed for the medical sector.",
            date: '2023-03-01',
            slug: 'blog3',
        },
        {
            id: 4,
            image: img4,
            title: 'المقال الرابع',
            titleEn: "iot article",
            description: 'المقال الرابع',
            descripthionEn: "Our oxygen management system is designed for the medical sector.",
            date: '2023-04-01',
            slug: 'blog4',
        },
    ]
    return (
        <div className="blogs" style={{ direction: `ltr` }} id='blogs'>
            <div className="container m-auto">
                <h3>{lang === 'en' ? 'Our Solutions ' : 'الحلول'}</h3>
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
                                slidesPerView: 4,
                            },
                            1100: {
                                slidesPerView: 4,
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
                                <ShineBorder borderWidth={3} className="relative rounded-2xl p-6 h-full" color={["#ffC8E8", "#54C8E8", "#185A7D"]}>
                                    <div className="solution-card">
                                        <Image src={path.image} alt="Mazar" width={200} height={200} />
                                        <h4>{lang === 'en' ? path.titleEn : path.title}</h4>
                                        <p>{lang === 'en' ? path.descripthionEn : path.description}</p>
                                        <Link href={`/contact`} className='main-link-sec'><span>{lang === 'en' ? 'Contact us' : 'اتصل بنا'}</span> <i className={`fa-solid fa-chevron-${lang === 'en' ? "right" : "left"}`}></i></Link>
                                    </div>
                                </ShineBorder>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
