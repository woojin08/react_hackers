import React from 'react'
import '../css/Subpage.scss'
import SmenuBnr_3 from './SmenuBnr_3';

const Sub02_3 = ({ content }) => {
    const num = 0;
    return (
        <div className='Subpage'>
            <div className="nav__bar">
                <div className="inner">{content[num].tit} / {content[0].txt}</div>
            </div>
            <div className="bnr">

                <SmenuBnr_3 content={content} num={num} />

            </div>

        </div>

    )
}

export default Sub02_3