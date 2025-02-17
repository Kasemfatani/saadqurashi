'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import heroImg from '/public/hero2.jpeg';

export default function Hero() {
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
    
    return (
        <div className="hero">
            <Image src={heroImg} alt="logo" className="hero-img image-bg" />
            <div className="overlay">
                <div className="heading">
                    <h1>{lang === 'en' ? 'Transforming Industries with SCADA, IoT, and Digital Solutions' : 'تحويل الصناعات باستخدام أنظمة SCADA وإنترنت الأشياء والحلول الرقمية'}</h1>
                    <p>{lang==='en'?"Driving smart industry innovation in line with Saudi Vision 2030.":"التحقيق في الصناعات الذكية باستخدام SCADA، IoT وحلول ديجيتال"} </p>
                    <div className="links">
                        <Link href="/#services" className='sec-link'>{lang === 'en' ? 'Explore now ' : 'استكشف الان'}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
