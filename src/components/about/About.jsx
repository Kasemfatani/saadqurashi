'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import Touch from '../home/Touch';
import Loading from '@/app/loading';
import MessVis from './MessVis'
import AboutUs from './AboutUs'
import Marq from '../home/Marq';

export default function About() {

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
        <div className="solution-page-cont about-page-cont" style={{ direction: lang == 'ar' ? 'rtl' : 'ltr' }}>
            {
                loading ? <Loading /> :
                    <>
                        <AboutUs data={data.about} lang={lang} />
                        <MessVis mission={data.mission}  vision={data.vision} lang={lang} />
                        <Marq mainTitle={lang === 'en' ? 'Our Partners' : 'شركاءنا'} subTitle={lang === 'en' ? 'One of our success factors' : 'احد اسباب نجاحنا'} data={data.partners} isReverse={true} />
                        <Touch />
                    </>
            }
        </div>
    );
}
