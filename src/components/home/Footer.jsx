'use client'
import React, { useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import c from '/public/c.svg'
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/footerlogo.svg'
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';



export default function Footer() { // Defining the main functional component named 'Footer'.

    let [lang, setLang] = useState('en');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [whatsapp, setWhatsapp] = useState('+966506578868');
    const [social, setSocial] = useState([]);
    useEffect(() => {
        setLoading(true);
        if (typeof window !== 'undefined') {
            // Define the headers with the selected language
            setLang(localStorage.getItem('lang'));
            const headers = {
                lang: localStorage.getItem('lang'), // Change language dynamically based on state
            };
            // Fetch data from the API with Axios
            axios.get(`${API_BASE_URL}/landing/home/contacts`, { headers: headers, })
                .then(response => {
                    setData(response.data.data);  // Set the response data to state
                    setLoading(false);  // Set loading to false
                    setWhatsapp(response.data.data.filter(item => item.type == 'mobile')[0].value.split(' ').join(''));
                })
                .catch(error => {
                    setError(error);  // Handle any errors
                    console.error('Error fetching data:', error);
                    setLoading(false)
                });
            axios.get(`${API_BASE_URL}/landing/home/social-media`, { headers: headers, })
                .then(res => {
                    setSocial(res.data.data);  // Set the response data to state
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
        <footer className={`${lang === 'en' ? 'ltr' : 'rtl'}`}> {/* Main footer container with padding and background color */}
            <a href={`https://wa.me/${whatsapp}?text=Good%20Morning%20I-Masira`} className="fixed-what">
                <i className="fa-brands fa-whatsapp"></i>
            </a>
            <div className="container m-auto"> {/* Container for the footer content */}
                <div className="content">
                    <div className="logo-social-cont">
                        <div className="logo">
                            <Image src={logo} alt="Mazar" width={200} height={200} />
                        </div>
                        <div className="social-links">
                            <div className="social">
                                {
                                    social?.map((item, index) =>
                                        <Link href={item.value} key={index} target='_blank'><i className={`fa-brands fa-${item.type}`} key={index}></i></Link>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                    <div className="links">
                        <h3>I-Masira</h3>
                        <ul>
                            <li><Link href="/#soultions">{lang === 'en' ? 'Solutions ' : 'الخدمات'}</Link></li>
                            <li><Link href="/about">{lang === 'en' ? 'About Us' : 'من نحن'}</Link></li>
                            <li><Link href="/#blogs">{lang === 'en' ? 'Blogs' : 'المقالات'}</Link></li>
                            <li><Link href="/contact">{lang === 'en' ? 'Contact us' : 'اتصل بنا'}</Link></li>
                        </ul>
                    </div>
                    <div className="links">
                        <h3>{lang === 'en' ? 'Contact us' : 'اتصل بنا'}</h3>
                        <div className="uls">
                            {
                                data?.map((item, index) =>
                                    item.branch ?
                                        <div className="ul-cont">
                                            <h4>{item.branch}</h4>
                                            <h4>{item.value}</h4>
                                            <ul key={index}>
                                                <li key={index}> <Link href={`tel:${item.mobile}`} key={index}>{item.mobile}</Link></li>
                                                <li key={index}> <Link href={`mailto:${item.email}`} key={index}>{item.email}</Link></li>
                                            </ul>
                                        </div>
                                        : null
                                )
                            }
                        </div>
                    </div>


                </div>
                <div className="served">
                    <Image src={c} alt="Mazar" className="img" />
                    <p>{lang === 'en' ? '2025 , All rights reserved for masira' : '2025 , جميع الحقوق محفوظة لمسيرة'}</p>
                </div>
            </div>
        </footer>
    )
}
