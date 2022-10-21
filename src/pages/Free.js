import React from 'react'

const Free = ({ content, num }) => {
    return (
        <article className='Free'>

            <div className="review__tit">
                {content[num].con}
            </div>



            <div className="sub__tit">
                진행중인 이벤트
            </div>

            <ul className="sub__service">
                <li> <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/free01.jpg'} alt="" />
                </figure><h2>해커스교육그룹 마케팅 인턴 채용중</h2><p>기간 : 2022-10-13 00:00:00 ~ 2023-10-26 23:55:00</p></li>
                <li><figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/free02.jpg'} alt="" />
                </figure><h2>합격수기 작성하고 백화점 상품권 받자!</h2><p>기간 : 2021-05-31 00:00:00 ~ 2022-12-31 00:00:00</p></li>
                <li><figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/free03.jpg'} alt="" />
                </figure><h2>참여만해도 7만원 할인쿠폰 지급!</h2><p>기간 : 2021-05-31 00:00:00 ~ 2022-12-31 00:00:00</p></li>
                <li><figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/free04.jpg'} alt="" />
                </figure><h2>전 강좌 수강권 무료로 받자!</h2><p>기간 : 2021-05-31 00:00:00 ~ 2022-12-31 00:00:00</p></li>
                <li><figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/free05.jpg'} alt="" />
                </figure><h2>전 강좌 패스 최대할인쿠폰 제공!</h2><p>기간 : 2021-05-31 00:00:00 ~ 2022-12-31 23:55:00</p></li>
            </ul>

        </article>
    )
}

export default Free;