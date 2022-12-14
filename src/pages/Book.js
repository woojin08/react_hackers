import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const Book = ({ content, num }) => {

    return (
        <article className='Book'>
            <div className="con">
                <strong>{content[num].con}</strong>
            </div>
            <div className='bg'>
                <div className="bkcase">

                    <Slider arrows={false}
                        autoplay={true}
                        pauseOnDotsHover={false}
                        dots={true}>

                        <div className="book__log">
                            <img src={process.env.PUBLIC_URL + '/assets/images/sub03_1.jpg'} alt="" />
                            <p>
                                {content[num].mtit}
                            </p>
                        </div>
                        <div className="book__log">
                            <img src={process.env.PUBLIC_URL + '/assets/images/sub03_2.jpg'} alt="" />
                            <p>
                                {content[num].mtxt}
                            </p>
                        </div>
                        <div className="book__log">
                            <img src={process.env.PUBLIC_URL + '/assets/images/sub03_3.jpg'} alt="" />
                            <p>
                                {content[num].con}
                            </p>
                        </div>
                    </Slider >
                </div>
            </div>

            <div className="sub__tit">
                {content[num].tit}
            </div>
            <p className="sub__des">
                {content[num].des}
            </p>

            <div className="sub__img">
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/main_s011.jpg'} alt="" />
                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/main_s012.jpg'} alt="" />
                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/main_s013.jpg'} alt="" />
                </figure>
            </div>

            <div className="sub__tit">
                ?????? ????????? ??????
            </div>

            <ul className="sub__service">
                <li>?????????????????? ????????????</li>
                <li>????????? ?????? ??? ????????? ?????? (??????????????? ???????????? ??????)</li>
                <li>????????? ????????????</li>
                <li>?????????, ??????, ????????????</li>
                <li>????????? ?????????, ?????????, ????????? ?????? (???????????? ?????? ????????????)</li>
            </ul>

        </article >
    )
}

export default Book;