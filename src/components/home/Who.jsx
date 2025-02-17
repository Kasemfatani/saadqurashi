'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import img from '/public/aboutHome.png'
import Link from 'next/link';


export default function Who() {
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

        <section className={` hero-main why`} id='about' style={{ direction: lang === 'en' ? 'ltr' : 'rtl' }}>
            <div className="container m-auto">
                <div className="hero-about" >
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            type: 'spring',
                            bounce: 0.2,
                            duration: .5,
                        }}
                        viewport={{ once: true }}
                        className="r-side">
                        <div className="img-cont">
                            <div className="overlay"></div>
                            <Image src={img} width={500} height={500} alt="Mazar" className="img-hero" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            type: 'spring',
                            bounce: 0.2,
                            duration: .5,
                        }}
                        viewport={{ once: true }}
                        className="l-side">
                        <h3 className='sec-title'>{lang === 'en' ? 'About Masira' : 'من نحن'}</h3>
                        <p className='who-p'>
                            {
                                lang === 'en' ? "i-Masira is a solution provider that focuses on providing best services through high technology, consultation and training in SCADA system integration, Digital transformation, IIOT solutions, and industrial solutions. Aligns with Saudi Arabia’s National Transformation Plan and the Saudi Vision 2030 development agenda aims to transform local industries into Smart Industry standard."
                                :"مسيره هي شركة تقدم حلول تركز على تقديم أفضل الخدمات من خلال التكنولوجيا العالية والاستشارات والتدريب في تكامل أنظمة سكادا والتحول الرقمي وحلول إنترنت الأشياء الصناعي والحلول الصناعية. تتماشى مع خطة التحول الوطني للمملكة العربية السعودية وأجندة التنمية لرؤية السعودية 2030 التي تهدف إلى تحويل الصناعات المحلية إلى معيار الصناعة الذكية."
                        }
                        </p>
                        <Link href={'/about'} className='who-link'><span>{lang === 'en' ? 'Read More' : 'قراءة المزيد'}</span> <i className={`fa-solid fa-chevron-${lang === 'en' ? "right" : "left"}`}></i></Link>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}