import React from 'react';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BlogsCards({data ,lang}) {
    return (
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
                                    <a href={`/blog?id=${path.id}`} className={`main-link`}><span>{lang === 'en' ? 'Read More' : 'قراءة المزيد'}</span> <i className={`fa-solid fa-chevron-${lang === 'en' ? "right" : "left"}`}></i></a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>

    );
}
