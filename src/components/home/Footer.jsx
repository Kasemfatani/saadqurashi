'use client'
import React, { useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import c from '/public/c.svg'
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/footerlogo.svg'
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';



export default function Footer() { // Defining the main functional component named 'Footer'.

    let [lang, setLang] = useState('ar');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [whatsapp, setWhatsapp] = useState('+966506578868');
    const [social, setSocial] = useState([]);
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
        //     axios.get(`${API_BASE_URL}/landing/home/contacts`, { headers: headers, })
        //         .then(response => {
        //             setData(response.data.data);  // Set the response data to state
        //             setLoading(false);  // Set loading to false
        //             setWhatsapp(response.data.data.filter(item => item.type == 'mobile')[0].value.split(' ').join(''));
        //         })
        //         .catch(error => {
        //             setError(error);  // Handle any errors
        //             console.error('Error fetching data:', error);
        //             setLoading(false)
        //         });
        //     axios.get(`${API_BASE_URL}/landing/home/social-media`, { headers: headers, })
        //         .then(res => {
        //             setSocial(res.data.data);  // Set the response data to state
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
        <footer style={{ direction: lang == 'ar' ? 'rtl' : 'ltr' }}> {/* Main footer container with padding and background color */}
            
            <div className="container m-auto"> {/* Container for the footer content */}
                <div className="content">                
                    <div className="links">
                        <h3>{lang === 'en' ? 'Contact us' : 'اتصل بنا'}</h3>
                        <div className="uls">
                            <div className="ul-cont" >
                                            <h4>مكة المكرمة , حي الششة</h4>
                                            <ul >
                                                <li  style={{direction:"ltr"}}> <Link href={`tel:0125589345`} >0125589345</Link></li>
                                                <li > <Link href={`mailto:saad_alqurashy@hotmail.com`} >saad_alqurashy@hotmail.com</Link></li>
                                            </ul>
                                        </div>
                        </div>
                    </div>


                </div>
                <div className="served">
                    <Image src={c} alt="Mazar" className="img" />
                    <p>{lang === 'en' ? '2025 , All rights reserved' : '2025 , جميع الحقوق محفوظة ل سعد القرشي'}</p>
                </div>
            </div>
        </footer>
    )
}
