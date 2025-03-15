import React from 'react';
import Image from 'next/image';
import parse from 'html-react-parser';
import solImage from '/public/ters.svg'

export default function CaseCont({ data, lang }) {
    return (
        <div className="case-cont">
            <div className="container m-auto">
                <div className="text">
                    <h2>{data.customer_name}</h2>
                    <h3>{data.intro_title}</h3>
                    <h4>{lang === 'en' ? 'Executive Summary' : 'الملخص التنفيذي'}</h4>
                    <p>{parse(data.exective_summary)}</p>
                    <h4 className='objective-heading'>{lang === 'en' ? 'Objective:' : 'الهدف'}</h4>
                    <p>{parse(data.objective)}</p>
                    <Image src={data.objective_image} alt="i-masera" className='abs-img' width={200} height={200} />
                    <h4 className='objective-heading'>{lang === 'en' ? 'Features:' : 'الميزات'}</h4>
                    <div className="features">
                        {
                            data.features.map((item, index) => 
                                <div className="feature">
                                    <p><i className="fa-solid fa-check"></i> <h5>{item.name}</h5> <span>{item.description}</span></p>
                                </div>
                        )}
                    </div>
                    <h4>{lang === 'en' ? 'Functional & Technical Deliverables:' : 'التسليمات الفنية والتنفيذية' }</h4>
                    <p>{parse(data.technical)}</p>
                    <h4>{lang === 'en' ? 'Results & Impact' : 'النتائج والتأثير' }</h4>
                    <p>{parse(data.impact)}</p>
                    <h4>{lang === 'en' ? 'Conclusion' : 'الملخص' }</h4>
                    <p>{parse(data.conclusion)}</p>
                </div>
            </div>
        </div>
    );
}
