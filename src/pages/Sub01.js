import React from 'react';
import Smenu from './Smenu';
import Smenu02 from './Smenu02';
import '../css/Subpage.scss'

const Sub01 = ({ content }) => {
    const num = 0;
    return (
        <div className='Subpage'>

            <div className="nav__bar">
                <div className="inner">{content[num].tit} / {content[0].txt}</div>
            </div>
            <div className="inner sub">
                <Smenu content={content} num={num} />
            </div>

            <div className="inner sub">
                <Smenu02 content={content} num={num} />
            </div>


        </div>
    )
}

export default Sub01