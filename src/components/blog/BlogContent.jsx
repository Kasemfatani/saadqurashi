import React from 'react';
import parse from 'html-react-parser';

export default function BlogContent({ data, lang }) {
    return (
        <div className="blog-content">
            <div className="container m-auto">
                <p>{parse(data.description)}</p>
            </div>
        </div>
    );
}
