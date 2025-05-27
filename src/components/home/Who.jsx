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
    let [lang, setLang] = useState('ar');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    useEffect(() => {
        setLoading(true);
        setLoading(false); 
        // if (typeof window !== 'undefined') {
        //     // Define the headers with the selected language
        //     setLang(localStorage.getItem('lang'));
        //     const headers = {
        //         lang: localStorage.getItem('lang'), // Change language dynamically based on state
        //     };
        //     // Fetch data from the API with Axios
        //     axios.get(`${API_BASE_URL}/landing/home/about`
        //         , {
        //             headers: headers,
        //         })
        //         .then(response => {
        //             setData(response.data.data);  // Set the response data to state
        //             setLoading(false);  // Set loading to false
        //         })
        //         .catch(error => {
        //             setError(error);  // Handle any errors
        //             console.error('Error fetching data:', error);
        //             setLoading(false)
        //         });
        // }
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
                                        <Image src="/who_logo.jpg" width={500} height={500} alt="Mazar" className="" />
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
                                    {/* <h3 className='sec-title'>{data?.about?.title}</h3> */}
                                    <p className='who-p'>يسرنا في شركة سعد بن جميل القرشي أن نُقدم لحجاج بيت الله الحرام هذا التطبيق المخصص، تيسيرًا للتواصل معهم، وتمكينهم من متابعة كل جديد في أداء مناسك الحج بكل سهولة ويسر.

لقد سَعينا جاهدين على مدار الأعوام الماضية إلى تحقيق رضا الله تعالى أولًا، ثم رضا عملائنا الكرام، عبر تقديم أفضل الخدمات التي تليق بمقام ضيوف الرحمن.

وإيمانًا منا برسالتنا السامية، كان شعارنا الذي نسعى لتحقيقه بكل إخلاص:

"عملنا من أجلكم، لنكون لكم، وتكونوا لنا."

نسأل الله أن يجعل أعمالنا خالصةً لوجهه الكريم، وأن يتقبل من الجميع صالح الأعمال، وأن ييسر لكم حجكم ويكتب لكم العودة سالمين غانمين.
 </p>
                                    
                                </motion.div>
                            </div>
                        </div>
                    </section >
            }
        </>
    );
}
