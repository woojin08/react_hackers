import { useEffect, useRef, useState } from 'react';
import News from './News';
import Newstw from './Newstw';
import MainContent from './MainContent';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import { main_content } from '../data/common';
import Promotion from '../pages/Promotion';
import Main from './Main';




// const SLIDE = [
//     { id: 1, content: "경찰전강좌\n검정제+면접까지!", desc: "평생 0원 패스", link: "/", title: "New path created" },
//     { id: 2, content: "국민의 신뢰,인권보호,공정한 수사를 위해\n경찰개혁도 함께 합니다.", desc: "Competent and Confident Police, a Safe Community with Public Trust", link: "/", title: "New path created" },
//     { id: 3, content: "가장 안전한 나라\n존경과 사랑받는 경찰", desc: "", link: "/", title: "In my new world" },
// ]

const MainVisual = () => {
    const [idxn, setIdxn] = useState();
    const MainSlider = useRef(null);

    return (
        <div className='MainSlider'>
            <Slider
                arrows={false}
                autoplay={true}
                pauseOnDotsHover={false}
                ref={MainSlider}
                dots={true}
            >
                {
                    main_content.slice(0, 3).map((it, idx) => {
                        return (
                            <figure className={`itm itm0${idx + 1}`}>
                                <div className="inner">
                                    <strong>{it.strong}</strong>
                                    <p>{it.content}</p>
                                    <div className='des'>  {it.des}</div>
                                    <div className='title'>  {it.title}</div>

                                </div>
                            </figure>
                        )
                    })
                }

            </Slider>
            <News />
            <Newstw />
            <Promotion />

        </div>
    )
}


export default MainVisual;