import React from 'react'

const Article = ({ content, num }) => {
    return (
        <article className='Article'>

            <div className="review__tit">
                {content[num].con}
            </div>


            <div className="sub__img">
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/review01.jpg'} alt="" />
                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/review02.jpg'} alt="" />
                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/review03.jpg'} alt="" />
                </figure>
            </div>

            <div className="sub__tit">
                합격수기 / 수강후기
            </div>

            <ul className="sub__service">
                <li>2022년 1차 부산청 최종합격 수기 <p>노*엽</p></li>
                <li>22년 1차 경북청 최종합격수기(초장문)(필기4달반)<p>윤*호</p></li>
                <li>2022년 1차 전북여경 최종합격수기<p>배*민</p></li>
                <li>2022년 경찰공무원 1차 경기남부청 최종합격수기<p>권*미</p></li>
                <li>2022년 경찰공무원 1차 부산청 최종합격수기<p>이*희</p></li>
            </ul>

        </article>
    )
}

export default Article;