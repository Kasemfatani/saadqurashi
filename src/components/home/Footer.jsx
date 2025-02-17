'use client'
import React, { useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import c from '/public/c.svg'
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/footerlogo.svg'
import { usePathname } from 'next/navigation';



export default function Footer() { // Defining the main functional component named 'Footer'.

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
    const contactData = [
        { type: "location", value: "Al-Zahra District, Jeddah, KSA" },
        { type: "email", value: "info@i-Masira.com" },
        { type: "mobile", value: "+966580121025" },
    ]
    const data = [

        { type: "facebook", value: "https://www.facebook.com/masira.sa" },
        { type: "instagram", value: "https://www.instagram.com/masira.sa" },
        { type: "twitter", value: "https://twitter.com/masira_sa" },
        { type: "linkedin", value: "https://www.linkedin.com/company/masira-sa/" }
    ]
    return (
        <footer className={`${lang === 'en' ? 'ltr' : 'rtl'}`}> {/* Main footer container with padding and background color */}
            <a href="https://wa.me/+966580121025?text=Good%20Morning%20Mzar" className="fixed-what">
                <i className="fa-brands fa-whatsapp"></i>
            </a>
            <div className="container m-auto"> {/* Container for the footer content */}
                <div className="content">
                    <div className="logo-social-cont">
                        <div className="logo">
                            <Image src={logo} alt="Mazar" width={200} height={200} />
                        </div>
                        <div className="social-links">
                            <div className="social">
                                {
                                    data?.map((item, index) =>
                                        <Link href={item.value} key={index} target='_blank'><i className={`fa-brands fa-${item.type}`} key={index}></i></Link>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                    <div className="links">
                        <h3>I-Masira</h3>
                        <ul>
                            <li><Link href="/#soultions">{lang === 'en' ? 'Solutions ' : 'الخدمات'}</Link></li>
                            <li><Link href="/#about">{lang === 'en' ? 'About Us' : 'من نحن'}</Link></li>
                            <li><Link href="/#blogs">{lang === 'en' ? 'Blogs' : 'المقالات'}</Link></li>
                            <li><Link href="/#contact">{lang === 'en' ? 'Contact us' : 'اتصل بنا'}</Link></li>
                        </ul>
                    </div>
                    <div className="links">
                        <h3>{lang === 'en' ? 'Contact us' : 'اتصل بنا'}</h3>
                        <ul>
                            {
                                contactData?.map((item, index) =>
                                    <li key={index}><Link href={item.type == "mobile" ? `tel:${item.value}` : item.type == "email" ? `mailto:${item.value}` : "#footer"} key={index}>{item.value}</Link></li>
                                )
                            }
                        </ul>
                    </div>

                </div>
                <div className="served">
                    <Image src={c} alt="Mazar" className="img" />
                    <p>{lang === 'en' ? '2025 , All rights reserved for masira' : '2025 , جميع الحقوق محفوظة لمسيرة'}</p>
                </div>
            </div>
        </footer>
    )
}
