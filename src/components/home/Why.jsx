'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import img1 from '/public/sol/1.svg'
import img2 from '/public/sol/2.svg'
import img3 from '/public/sol/3.svg'
import Link from 'next/link';
import Loading from '@/app/loading';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';

export default function Why() {
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
            axios.get(`${API_BASE_URL}/landing/home/why-us`
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
    console.log(data);

    return (
        <>
            {
                loading ? <Loading /> :
                    <div className="why-masira">
                        <div className="container m-auto">
                            <h2>Why Choose i-Masira? </h2>
                            <h3>Smart Solutions. Real Impact.</h3>
                            <div className="grid-cont">
                                {
                                    data.map((item, index) =>
                                        <div className="grid-item" key={index}>
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 1.5 }}
                                            >
                                                <Image src={item.icon} alt="" width={200} height={200} />
                                            </motion.div>
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
            }
        </>
    );
}