import React from 'react'
import '../css/Subpage.scss'
import SmenuBnr_4 from './SmenuBnr_4';

const Sub02_4 = ({ content }) => {
    const num = 0;
    return (
        <div className='Subpage'>
            <div className="nav__bar">
                <div className="inner">{content[num].tit} / {content[0].txt}</div>
            </div>
            <div className="bnr">

                <SmenuBnr_4 content={content} num={num} />

            </div>

        </div>

    )
}

export default Sub02_4