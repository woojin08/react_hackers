import React from 'react';
import Free from './Free';
import Aside from './Aside';
import '../css/Subpage.scss'
import Police from './Police';
import Article from './Article';
import Study from './Study';


const SUB05 = [
    { id: 1, category: "형사법", title: "합격의 시작은 김대환", mtitle: "기적의 적중률로 시험을 압도하다!", link: "/", src: "/assets/images/main_news01.jpg" },
    { id: 2, category: "헌법", title: "15년 헌법 전문가 초시생도 쉬운 강의 신동욱", mtitle: "친절한 경찰헌법", link: "/", src: "/assets/images/main_news02.jpg" },
    { id: 3, category: "경찰학", title: "적중으로 증명된 경찰전문가 조현", mtitle: "20문제 중 18문제 적중! 경찰학 적중의 대가", link: "/", src: "/assets/images/main_news03.jpg" },
]


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