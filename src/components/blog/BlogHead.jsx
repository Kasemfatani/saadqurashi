import React from 'react';

export default function SolHead({ data, lang }) {
    return (
        <div className="sol-header" style={{ backgroundImage: `url(${data.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="overlay">
                <div className="container m-auto items-end">
                    <div className="text">
                        <h2>{data.title}</h2>
                        <p> <i className="fa-regular fa-calendar"></i> {data.date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
