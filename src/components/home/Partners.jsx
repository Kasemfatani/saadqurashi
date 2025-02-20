'use client'
import React, { useEffect, useState } from 'react';
import Marq from '@/components/home/Marq';
import img1 from '/public/Partners/1.png'
import img2 from '/public/Partners/2.png'
import img3 from '/public/Partners/3.png'
import img4 from '/public/Partners/4.png'
import img5 from '/public/Partners/5.png'
import img6 from '/public/Partners/6.png'
import img7 from '/public/Partners/7.png'
import img8 from '/public/Partners/8.png'
import img9 from '/public/Partners/9.png'
import img12 from '/public/Partners/12.png'
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

    let partners = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }, { img: img5 }, { img: img6 }, { img: img7 }, { img: img8 }, { img: img9 }, { img: img12 }]
    return (
        <>
            {
                loading ? <Loading /> :
                    <>
                        <Marq mainTitle={lang === 'en' ? 'Our Partners' : 'شركاءنا'} subTitle={lang === 'en' ? 'One of our success factors' : 'احد اسباب نجاحنا'} data={data.partners} isReverse={true} />
                        <Marq mainTitle={lang === 'en' ? 'Our clients' : 'عملائنا'} subTitle={lang === 'en' ? 'We navigate them to the future ' : 'نقوم بتوجيههم إلى المستقبل'} data={data.clients} isReverse={false} />
                    </>
            }
        </>
    )
}
