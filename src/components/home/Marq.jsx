'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ShineBorder } from '../magicui/shine-border';

export default function Marq({ mainTitle, subTitle, data, isReverse }) { // Defining the main functional component named 'Footer'.
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
        image,
    }) => {
        return (
            <figure className={cn()} >
                <div className="part-cont" >
                    <Image src={image} alt="Mazar" width={200} height={200} />
                </div>
            </figure>
        );
    };
    return (
        <section className='countries-section section-with-yellow-title' style={{ direction: lang === 'en' ? 'ltr' : 'rtl' }}>
            <div className="text">
                <h3>{mainTitle}</h3>
                <h4>{subTitle}</h4>
            </div>
            <div className="marq" style={{ direction: 'ltr' }}>

                {data?.map((review, index) => (
                    <ShineBorder borderWidth={3} className="relative rounded-2xl p-0 h-full  min-h-0 min-w-0" color={[ "#54C8E8", "#185A7D"]} key={index}>
                        <div className="part-cont" >
                            <Image src={review.image} alt="Mazar" width={200} height={200} />
                        </div>
                    </ShineBorder>
                ))}

            </div>
        </section>
    )
}
