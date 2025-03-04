import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MessVis({ mission, vision, lang }) {
    return (
        <div className="messVis" style={{ direction: lang == "en" ? 'ltr' : 'rtl' }} id='messVis'>
            <div className="container m-auto">
                <div className="miss-vis-cont">
                    <div className="part-cont">
                        <Image src={mission.icon} alt="Mazar" width={200} height={200} />
                        <h3>{mission.title}</h3>
                        <p>{mission.description}</p>
                    </div>
                    <div className="part-cont">
                        <Image src={vision.icon} alt="Mazar" width={200} height={200} />
                        <h3>{vision.title}</h3>
                        <p>{vision.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}