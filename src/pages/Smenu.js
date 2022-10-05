import React from 'react'

const Smenu = ({ content, num }) => {
    return (
        <smenu className='Smenu'>
            <div className="tit">
                <strong>{content[num].tit}</strong>
            </div>
            <div className='bg'>
                <div className="case">
                    {/* {
                        num === 0
                            ? <div className="tit__log">
                                <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="" />
                            </div>
                            : <h2>
                                {content[num].tit}
                            </h2>
                    } */}


                    <h2>
                        {content[num].con}<br /></h2>
                    <p>{content[num].cons}</p>

                </div>
            </div>

            <div className="sub__dev">
                {content[num].dev}
            </div>
            <p className="sub__des">
                {content[num].des}
            </p>

            <section className="sub">
                <div className="sub__tit">
                    <h2>형사법</h2>
                    <p>입문과정</p>
                    <strong>김대환 선생님</strong>
                </div>
                <ul className="sub_ttt">
                    <li><a href="">강좌정보</a></li>
                    <li><a href="">OT</a></li>
                </ul>
                <div className="check">
                    <input type='checkbox' name='check' value='동영상(PC/모바일)' />동영상(PC/모바일)<span>0원</span><br />
                    <input type='checkbox' name='check' value='다운로드+모바일' />다운로드+모바일<span>0원</span><br />
                    <input type='checkbox' name='check' value='동영상(PC/모바일)+다운로드' />동영상(PC/모바일)+다운로드<span>0원</span>
                </div>


                <ul className="sub__service">
                    <li className='mtxt'>김대환 형사법 쌩기초 입문특강</li>
                    <li className='mtit'>11강(수강기간 20일) · 모바일 · PC</li>
                    <li className='gy'><span>교재</span>2022해커스경찰 김대환 쌩기초 형사법 [일시품절]</li>
                </ul>
            </section>
            <div className="sub__dev_gibon">
                {content[num].gib}
            </div>

            <section className="sub">
                <div className="sub__tit">
                    <h2>형사법</h2>
                    <p>기본이론</p>
                    <strong>김대환 선생님</strong>
                </div>
                <ul className="sub_ttt_gibon">
                    <li><a href="">강좌정보</a></li>
                    <li><a href="">OT</a></li>
                </ul>
                <div className="check_gibon">
                    <input type='checkbox' name='check' value='동영상(PC/모바일)' />동영상(PC/모바일)<span>0원</span><br />
                    <input type='checkbox' name='check' value='다운로드+모바일' />다운로드+모바일<span>0원</span><br />
                    <input type='checkbox' name='check' value='동영상(PC/모바일)+다운로드' />동영상(PC/모바일)+다운로드<span>0원</span>
                </div>


                <ul className="sub__service">
                    <li className='mtxt'>[2023]김대환 형사법 기본이론</li>
                    <li className='mtit'>60강(수강기간 120일) · 모바일 · PC</li>
                    <li className='gy'><span>교재</span>2022해커스경찰 갓대환 형사법1권-형법(2판) [서점 별도 구매]</li>
                </ul>
            </section>

        </smenu >
    )
}

export default Smenu;