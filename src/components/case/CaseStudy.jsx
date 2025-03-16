'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import { useSearchParams } from 'next/navigation';
import Loading from '@/app/loading';
import SolHead from '../solution/SolHead';
import CaseCont from './CaseCont';
import Gallery from './Gallery';
import Touch from '../home/Touch';

export default function CaseStudy() {

    let [lang, setLang] = useState('en');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const searchParams = useSearchParams()
    const caseId = searchParams.get('id');

    useEffect(() => {
        setLoading(true);
        if (typeof window !== 'undefined') {
            // Define the headers with the selected language
            setLang(localStorage.getItem('lang'));
            const headers = {
                lang: localStorage.getItem('lang'), // Change language dynamically based on state
            };
            // Fetch data from the API with Axios
            axios.get(`${API_BASE_URL}/landing/home/study-cases/${caseId}`
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
                <CaseCont data={data} lang={lang} />
                <Gallery data={data} lang={lang} />
                <Touch  text= {lang === 'en' ? 'Ready to optimize your industrial operations? ' : 'مستعد لتحسين عملياتك الصناعية؟'} />
                </>
            }
        </div>
    );
}
