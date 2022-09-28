import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import { main_content } from '../data/common';


const SLIDE = [
    { id: 1, content: "실력 있고 당당한 경찰\n국민이 신뢰하는 안심 공동체", desc: "KOREAN NATIONAL POLICE AGENCY" },
    { id: 2, content: "국민의 신뢰,인권보호,공정한 수사를 위해\n경찰개혁도 함께 합니다.", desc: "Competent and Confident Police, a Safe Community with Public Trust", link: "/", title: "New path created" },
    { id: 3, content: "가장 안전한 나라\n존경과 사랑받는 경찰", desc: "", link: "/", title: "In my new world" },
]

const MainVisual = () => {
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

                                </div>
                            </figure>
                        )
                    })
                }

            </Slider>
        </div>
    )
}

export default MainVisual;