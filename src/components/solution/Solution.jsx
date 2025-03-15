'use client'
import React, { useEffect, useState } from 'react';
import SolHead from './SolHead';
import Keycomponents from './Keycomponents';
import ROI from './ROI';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import { useSearchParams } from 'next/navigation';
import Loading from '@/app/loading';
import Touch from '../home/Touch';
import SolContent from './SolContent';
export default function Solution() {
    let [lang, setLang] = useState('en');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const searchParams = useSearchParams()
    const solutionId = searchParams.get('id');

    useEffect(() => {
        setLoading(true);
        if (typeof window !== 'undefined') {
            // Define the headers with the selected language
            setLang(localStorage.getItem('lang'));
            const headers = {
                lang: localStorage.getItem('lang'), // Change language dynamically based on state
            };
            // Fetch data from the API with Axios
            axios.get(`${API_BASE_URL}/landing/home/solutions/${solutionId}`
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
        <div className="solution-page-cont" style={{ direction: lang == 'ar' ? 'rtl' : 'ltr' }}>
            {
                loading ? <Loading /> :
                <>
                <SolHead data={data} lang={lang} />
                <SolContent data={data} lang={lang} />
                <Keycomponents data={data} lang={lang} />
                {/* <ROI data={data} lang={lang} /> */}
                <Touch />
                </>
            }
        </div>
    );
}
