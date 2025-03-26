'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ncit from '/public/ncit.svg';
import masanea from '/public/masanea.png';
import sisiabs from '/public/sisiabs.png';
import wezara from '/public/wezara.svg';
import Link from 'next/link';

export default function Ncit() { // Defining the main functional component named 'Footer'.

    let [lang, setLang] = useState('en');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Define the headers with the selected language
            setLang(localStorage.getItem('lang'));
        }
    }, []);
    return (

        <div className="ncti" style={{ direction: `${lang === 'en' ? 'ltr' : 'rtl'}` }}>
            <Image src={sisiabs} alt="masira" className='abs' width={200} height={200} />
            <div className="container m-auto">
                <div className="ncti-cont">
                    <Image src={masanea} alt="masira" width={200} height={200} />
                    <Image src={wezara} alt="masira" width={200} height={200} />
                    <Image src={ncit} alt="masira" width={200} height={200} />

                </div>
                <h3>{lang == 'en' ? "Certified SIRI Evaluators" : " مُقيِّمو SIRI المعتمدون"}</h3>
                <p>{lang == 'en' ?
                    "The Ministry of Industry and Mineral Resources has adopted the Smart Factory Transformation Maturity Index (SFIRI) to measure the digital progress of national factories. This is a globally accepted measure for assessing the adoption of the Fourth Industrial Revolution. Masaratek offers factory readiness assessment services with assessors accredited by the International Center for Industrial Transformation (INCIT). The report assesses your factory's digital maturity and identifies key areas for improvement and development."
                    :
                    "اعتمدت وزارة الصناعة والثروة المعدنية مؤشر نضج التحول الرقمي للمصانع الذكية (SFIRI) لقياس التقدم الرقمي للمصانع الوطنية. يُعد هذا المؤشر معيارًا عالميًا لتقييم مدى تبني الثورة الصناعية الرابعة. تقدم شركة مساراتك خدمات تقييم جاهزية المصانع، بالتعاون مع مقيمين معتمدين من المركز الدولي للتحول الصناعي (INCIT). يُقيّم التقرير النضج الرقمي لمصنعكم، ويُحدد المجالات الرئيسية للتحسين والتطوير."
                }</p>
                <Link href={`contact`} ><span>{lang == 'en' ? "Contact us" : "اتصل بنا"}</span> <i className={`fa-solid  ${lang == 'en' ? "fa-chevron-right" : "fa-chevron-left"}`}></i></Link>
            </div>
        </div>
    )
}
