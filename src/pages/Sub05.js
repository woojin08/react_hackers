import React from 'react';
import Aside from './Aside';
import '../css/Subpage.scss'
import Study from './Study';

const Sub05 = ({ content }) => {

    const num = 0;
    return (
        <div className='Subpage'>
            <div className="nav__bar">
                <div className="inner">{content[num].tit} / {content[0].txt}</div>
            </div>
            <div className="inner sub">
                <Study content={content} num={num} />
                <Aside />
            </div>
        </div>
    )
}

export default Sub05