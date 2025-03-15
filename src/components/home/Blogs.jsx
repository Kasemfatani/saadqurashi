'use client'
import React, { useEffect, useState } from 'react';
import BlogsCards from './BlogsCards';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import Loading from '@/app/loading';

export default function Content() {

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
            axios.get(`${API_BASE_URL}/landing/home/blogs`
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
                loading ? <Loading /> : data.length == 0 ? null :
                    <div className="blogs" style={{ direction: `ltr` }} id='blogs'>
                        <div className="container m-auto">
                            <h3>{lang === 'en' ? 'Explore our blogs' : 'استكشف مدونتنا'}</h3>
                            <BlogsCards data={data} lang={lang} />
                        </div>
                    </div>
            }
        </>
    );
}
