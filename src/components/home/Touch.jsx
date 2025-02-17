'use client'
import React, { useEffect, useState } from 'react';
import img1 from '/public/kae.jpeg'
import Link from 'next/link';

export default function Touch() { // Defining the main functional component named 'Footer'.
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
        <div className="ready-cont" style={{ backgroundImage: `url(${img1.src})` }}>
            <div className="ready ">
                <div className="container">
                    <h2>{lang === 'en' ? 'Get in touch with us  ' : 'كن علي تواصل معنا'} </h2>
                    <p>{lang === 'en' ? 'Have any questions or need assistance? Reach out to us, and our team will be happy to help.' : 'هل لديك أسئلة أو مساعدة ؟ اتصل بنا وصاحبنا سأعمل للمساعدة .'}</p>
                    <Link href={`/contact`} className='main-link-sec'><span>{lang === 'en' ? 'Contact us' : 'اتصل بنا'}</span> <i className={`fa-solid fa-chevron-${lang === 'en' ? "right" : "left"}`}></i></Link>
                </div>
            </div>
            
        </div>
    )
}
