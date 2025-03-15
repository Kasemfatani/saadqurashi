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

export default function SolContent({ data, lang }) {
    return (
        <>
            {
                data.paragraphs.length == 0 ? null :
                    <div className="key-compo-cont">
                        <div className="container m-auto">
                            {
                                data.paragraphs.map((item, index) =>
                                    <div className="para-cont">
                                        <h3>{item.title}</h3>
                                        <p>{parse(item.description)}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
            }
        </>
    );
}
