'use client'
import React , { useEffect, useState } from 'react';
import Image from 'next/image';
import Marquee from '../ui/marquee';
import { cn } from '@/lib/utils';

export default function Marq({mainTitle , subTitle , data ,isReverse}) { // Defining the main functional component named 'Footer'.
    let [lang, setLang] = useState('en');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('lang') === 'ar' || localStorage.getItem('lang') === 'en') {
                setLang(localStorage.getItem('lang'));
            }
            else {
                localStorage.setItem('lang', 'en');
                setLang('en');
            }
        }
    }, [lang]);

    const ReviewCard = ({
        img,
    }) => {
        return (
            <figure className={cn()} >
                <div className="part-cont" >
                    <Image src={img} alt="Mazar" width={200} height={200} />
                </div>
            </figure>
        );
    };
    return (
        <section className='countries-section section-with-yellow-title'>
            <div className="text">
                <h3>{mainTitle}</h3>
                <h4>{subTitle}</h4>
            </div>
            <div className="marq" style={{ direction: 'ltr' }}>
                <div className="relative flex  w-full flex-col items-center gap-4 justify-center overflow-hidden  ">
                    <Marquee pauseOnHover reverse={isReverse} className="[--duration:20s]">
                        {data.map((review, index) => (
                            <ReviewCard key={index} {...review} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    )
}
