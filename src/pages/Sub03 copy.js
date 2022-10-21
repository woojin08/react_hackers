import React from 'react';
import Smenu from './Smenu';
import '../css/Subpage.scss'
import Book from './Book';
import Aside from './Aside';

const Sub03 = ({ content }) => {
    const num = 0;
    return (
        <div className='Subpage'>

            <div className="nav__bar">
                <div className="inner">{content[num].tit}/ {content[0].txt}</div>
            </div>
            <div className="inner_book">
                <Book content={content} num={num} />
            </div>
        </div>
    )
}

export default Sub03