import { useEffect, useRef, useState } from 'react';
import News from './News';
import Newstw from './Newstw';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import { main_content } from '../data/common';
import Promotion from '../pages/Promotion';


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