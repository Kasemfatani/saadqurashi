'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import parse from 'html-react-parser'; // Ensure correct import

export default function Who({ data, lang }) {


    return (

        <section className={` hero-main why-us`} id='about' style={{ direction: lang === 'en' ? 'ltr' : 'rtl' }}>

            <div className="container m-auto">
                <div className="about-us-wrapper" >

                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            type: 'spring',
                            bounce: 0.2,
                            duration: .5,
                        }}
                        viewport={{ once: true }}
                        className="l-side">
                        <h3 className='sec-title'>{data.title}</h3>
                        <p className='who-p'>{parse(data.full_description)} </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            type: 'spring',
                            bounce: 0.2,
                            duration: .5,
                        }}
                        viewport={{ once: true }}
                        className="r-side">
                        <div className="img-cont">
                            <div className="overlay"></div>
                            <Image src={data.image} width={500} height={500} alt="Mazar" className="img-hero" />
                        </div>
                    </motion.div>
                </div>
            </div>

        </section >
    );
}