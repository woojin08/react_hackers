import { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';

const UURL = [
    { id: 1, url: "_0CXEqkwKG8", title: "#경찰공무원시험 #경찰공무원 ", des: "2023년 경찰공무원 합격이 목표라면? l 해커스경찰 초시생가이드 필수시청!" },
]

const Promotion = () => {
    const MOVIE = useRef();

    const [url, setUrl] = useState('_0CXEqkwKG8');
    const [tit, setTit] = useState(0);
    const [auto, setAuto] = useState(0);

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: auto,
            loop: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            playsinline: 1,
            mute: 1,
        },

    };



    return (
        <section className="Promotion csc" ref={MOVIE}>
            <h2>해커스경찰 영상</h2>
            <p>건물 특성에 맞는 다양한 제품으로 고객의 요구를 충족시켜드립니다.</p>
            <div className="container">
                <div className='movie' id='player' >
                    <YouTube videoId={url} opts={opts} className='u' />
                    <div className="movie_title">
                        {
                            UURL[tit].title
                        }
                    </div>
                </div>
                <ul className="des">
                    {
                        UURL.map((you, idx) => {
                            return (
                                <li key={you.id} onClick={() => {
                                    setUrl(you.url);
                                    setTit(idx);
                                    setAuto(1);
                                }} className={tit === idx ? "on" : ""}
                                >

                                    <div className='tit'>{you.title}</div>
                                    <p>{you.des}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section >
    )
}
export default Promotion;