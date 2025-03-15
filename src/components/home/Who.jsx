'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import img from '/public/aboutHome.png'
import Link from 'next/link';
import Loading from '@/app/loading';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';


export default function Who() {
    let [lang, setLang] = useState('en');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    useEffect(() => {
        setLoading(true);
        if (typeof window !== 'undefined') {
            // Define the headers with the selected language
            setLang(localStorage.getItem('lang'));
            const headers = {
                lang: localStorage.getItem('lang'), // Change language dynamically based on state
            };
            // Fetch data from the API with Axios
            axios.get(`${API_BASE_URL}/landing/home/about`
                , {
                    headers: headers,
                })
                .then(response => {
                    setData(response.data.data);  // Set the response data to state
                    setLoading(false);  // Set loading to false
                })
                .catch(error => {
                    setError(error);  // Handle any errors
                    console.error('Error fetching data:', error);
                    setLoading(false)
                });
        }
    }, []);
    return (
        <>
            {
                loading ? <Loading /> :
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
                                        <Image src={data?.about?.image} width={500} height={500} alt="Mazar" className="img-hero" />
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
                                    <h3 className='sec-title'>{data?.about?.title}</h3>
                                    <p className='who-p'>{data?.about?.description} </p>
                                    <Link href={'/about'} className='who-link'><span>{lang === 'en' ? 'Read More' : 'قراءة المزيد'}</span> <i className={`fa-solid fa-chevron-${lang === 'en' ? "right" : "left"}`}></i></Link>
                                </motion.div>
                            </div>
                        </div>
                    </section >
            }
        </>
    );
}