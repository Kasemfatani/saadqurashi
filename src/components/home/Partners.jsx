'use client'
import React, { useEffect, useState } from 'react';
import Marq from '@/components/home/Marq';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import Loading from '@/app/loading';

export default function Partners() { // Defining the main functional component named 'Footer'.
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
            axios.get(`${API_BASE_URL}/landing/home/partners`
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
                    <>
                        <Marq mainTitle={lang === 'en' ? 'Our Partners' : 'شركاءنا'} subTitle={lang === 'en' ? 'Powering innovation with industry-leading partnerships.' : 'تعزيز الابتكار من خلال شراكات رائدة في القطاع الصناعي.'} data={data.partners} isReverse={true} />
                        <Marq mainTitle={lang === 'en' ? 'Our clients' : 'عملائنا'} subTitle={lang === 'en' ? 'Trusted by top manufacturers for smart industrial solutions.' : 'موثوق بنا من قبل أكبر المصانع لحلول صناعية ذكية.'} data={data.clients} isReverse={false} />
                    </>
            }
        </>
    )
}
