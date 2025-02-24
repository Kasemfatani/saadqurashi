'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import { useSearchParams } from 'next/navigation';
import BlogHead from './BlogHead';
import BlogContent from './BlogContent';
import RelatedBlogs from './RelatedBlogs';
import Loading from '@/app/loading';

export default function Solution() {

    let [lang, setLang] = useState('en');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const searchParams = useSearchParams()   
    const blogId = searchParams.get('id');

    console.log(blogId);

    useEffect(() => {
        setLoading(true);
        if (typeof window !== 'undefined') {
            // Define the headers with the selected language
            setLang(localStorage.getItem('lang'));
            const headers = {
                lang: localStorage.getItem('lang'), // Change language dynamically based on state
            };
            // Fetch data from the API with Axios
            axios.get(`${API_BASE_URL}/landing/home/blogs/${blogId}`
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
        <div className="solution-page-cont" style={{ direction: lang == 'ar' ? 'rtl' : 'ltr' }}>
            {
                loading ? <Loading /> :
                    <>
                        <BlogHead data={data.blog} lang={lang} />
                        <BlogContent data={data.blog} lang={lang} />
                        <RelatedBlogs data={data.other_blogs} lang={lang} />
                    </>
            }
        </div>
    );
}
