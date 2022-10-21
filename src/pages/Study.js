import React from 'react'

const Study = ({ content, num }) => {
    return (
        <article className='Study'>
            <div className="review__tit">
                <strong>{content[num].con}</strong>&nbsp;&nbsp;
            </div>
            <div className='bg'>
                <div className="case">
                    {
                        num === 0
                            ? <div className="tit__log">
                                {/* <img src={process.env.PUBLIC_URL + '/assets/images/study01.jpg'} alt="" /> */}
                            </div>
                            : <h2>
                                {content[num].tit}
                            </h2>
                    }

                </div>
            </div>

            <div className="sub__tit">
                {content[num].mtit}
            </div>
            <p className="sub__des">
                {content[num].des}
            </p>

            <div className="sub__img">
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/study01.jpg'} alt="" />
                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/main_s012.jpg'} alt="" />
                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/main_s013.jpg'} alt="" />
                </figure>
            </div>

            <div className="sub__tit">
                경찰공무원의 주요업무
            </div>

            <ul className="sub__service">
                <li>방법경찰업무-질서유지 및 범죄 예방과 유실물처리,각종 안전 사고 등 경찰의 전반적인 업무담당</li>
                <li>수사경찰업무-이미 일어난 범죄를 수사해 범인을 잡고 최근에는 사이버 범죄까지 확대하여 수사</li>
                <li>경비경찰업무-중요인사의 경호업무,다중범죄의 진압,비상훈련 실시 등 작전에 관한 업무수행</li>
                <li>경무경찰업무-경찰관의 교육,인사,복지 등 다른 경찰관들이 일을 잘 할 수 있도록 지원해 주는 역할 수행</li>
                <li>정부경찰업무-치안에 관련된 정보를 수집하고 보안경찰은 간첩을 잡는 일을 수행</li>
                <li>교통경찰업무-교통단속과 교통사고 예방을 위한 계획을 세우는 등 교통의 안전과 원활한 소통을 위한 업무 수행</li>
            </ul>

        </article>
    )
}

export default Study;