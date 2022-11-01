import React from 'react'
import Book from './Book'

const Sub06 = ({ content }) => {

    const num = 0;
    return (
        <div className='Subpage'>
            <div className="nav__bar">
                <div className="inner">{content[num].tit} / {content[0].txt}</div>
            </div>
            <div className="inner sub">
                <Book content={content} num={num} />

            </div>
        </div>
    )
}

export default Sub06