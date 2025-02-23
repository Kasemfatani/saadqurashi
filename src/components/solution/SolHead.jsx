import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import parse from 'html-react-parser';
import solImage from '/public/ters.svg'

export default function SolHead({ data, lang }) {
    return (
        <div className="sol-header" style={{ backgroundImage: `url(${data.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="overlay">
                <Image src={solImage} alt="Mazar" className='abs-img' width={200} height={200} />
                <div className="container m-auto">
                    <div className="text">
                        <h2>{data.name}</h2>
                        <p>{parse(data.description)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
