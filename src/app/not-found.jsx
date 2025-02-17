'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import img from '/public/kae.jpeg';
import notFound from '/public/not.svg';
import Image from 'next/image';
// pages/404.js

export default function NotFound() {
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
        <div className='not-found' style={{ backgroundImage: `url(${img.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="not-cont">
                <div className="container m-auto">
                    <Image src={notFound} alt='logo' className='not-found-logo' />
                    <p>{lang === 'en' ? 'We are sorry for you , site under maintenance' : 'نأسف ، الموقع تحت التحديث'}</p>
                    <span>{lang === 'en' ? 'We are sorry for you , site under maintenance' : 'نعمل على تحسين الموقع'} </span>
                </div>
            </div>
        </div>
    );
}

