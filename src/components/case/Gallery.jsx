'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import BlurFade from '../ui/blur-fade';
// import img12 from '/public/gallery/bg.png';

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function Gallery({ data, lang }) {

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    return (
        <>
            {
                data.images.length > 0 ?
                    <div className="gallery" id='gallery' style={{ direction: lang === 'en' ? 'ltr' : 'rtl' }}>
                        <div className="container mx-auto">
                            <h3>{lang === 'en' ? 'Gallery' : 'المعرض'}</h3>
                            <section id="photos">
                                <div className="columns-3 gap-4 sm:columns-5">
                                    {data.images.map((img, idx) => (
                                        <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
                                            <a href={img.image} data-fancybox="gallery">
                                                <figure>
                                                    <Image src={img.image} alt="Mazar" width={200} height={200} className="mb-4 size-full rounded-lg object-contain" />
                                                </figure>
                                            </a>
                                        </BlurFade>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                    : null
            }
        </>
    )
}
