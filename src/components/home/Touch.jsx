'use client'
import React, { useEffect, useState } from 'react';
import img1 from '/public/kae.jpeg'
import Link from 'next/link';
import Image from 'next/image';
import swivt from '/public/touch-swivt.svg';

export default function Touch({ text }) { // Defining the main functional component named 'Footer'.
    let [lang, setLang] = useState('en');
    console.log(text);

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
        <div className="ready-cont" style={{ backgroundImage: `url(${img1.src})`, direction: `${lang === 'en' ? 'ltr' : 'rtl'}` }}>
            <div className="svit-r svit">
                <Image src={swivt} alt="Mazar" width={200} height={200} />
            </div>
            <div className="svit-l svit">
                <Image src={swivt} alt="Mazar" width={200} height={200} />
            </div>
            <div className="ready ">
                <div className="container m-auto">
                    <h2>{text == 'non' ? lang === 'en' ? 'Get in touch with us  ' : 'كن على تواصل معنا' : text} </h2>
                    {

                        <p>{lang === 'en' ? 'Have any questions or need assistance? Reach out to us, and our team will be happy to help.' : 'هل لديك أي أسئلة أو تحتاج إلى مساعدة؟ تواصل معنا، وسيسعد فريقنا بمساعدتك.'}</p>
                    }
                    <Link href={`/contact`} className='main-link-sec'><span>{lang === 'en' ? 'Contact us' : 'اتصل بنا'}</span> <i className={`fa-solid fa-chevron-${lang === 'en' ? "right" : "left"}`}></i></Link>
                </div>
            </div>
        </div>
    )
}
