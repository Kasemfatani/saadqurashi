import React from 'react';
import BlogsCards from '../home/BlogsCards';

export default function RelatedBlogs({ data, lang }) {

    return (
        <div className="blogs" style={{ direction: `ltr` }} id='blogs'>
            {
                data.length == 0 ? null :
                    <div className="container m-auto">
                        <h3>{lang === 'en' ? 'Read more ' : 'قراءة أكثر'}</h3>
                        <BlogsCards data={data} lang={lang} />
                    </div>
            }
        </div>
    );
}
