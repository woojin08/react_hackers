import React from 'react'
import TcMainMenu from './TcMainMenu';


const Smenu = ({ content, num }) => {
    return (
        <smenu className='tcSmenu inner'>
            <div className="tc">
                <strong></strong>
            </div>
            <div className='tcbg'>
                <div className="case">
                    <h2>{content[num].con}<br /></h2>
                    <p>{content[num].cons}</p>
                    <p className='small'>{content[num].dev}</p>

                </div>
            </div>
            <TcMainMenu />
            <div className="tc__img inner">
                <div className="hctc">
                    <figure className='tc_left'>
                        <h2>김대환 선생님</h2>
                        <p>기적의 적중률로<br /> 시험을 압도하다!<br /> 형사법의 제왕</p>
                        <img src={process.env.PUBLIC_URL + '/assets/images/tcbg01.png'} alt="" />
                    </figure>
                    <ul className="board_tc">
                        <li><a href="#!">OT</a> </li>
                        <li><a href="#!">강의리스트</a> </li>
                        <li> <a href="#!">수강후기</a> </li>
                    </ul>
                </div>
                <div className="hctc">
                    <figure className='tc_right'>
                        <h2>이용배 선생님</h2>
                        <p>핵심을 관통하는<br /> 체계적 강의!<br /> 형사법의 정석</p>
                        <img src={process.env.PUBLIC_URL + '/assets/images/tcbg02.png'} alt="" />
                    </figure>
                    <ul className="board_tc">
                        <li><a href="#!">OT</a> </li>
                        <li><a href="#!">강의리스트</a> </li>
                        <li> <a href="#!">수강후기</a> </li>
                    </ul>
                </div>
                <div className="hctc">
                    <figure className='tc_right'>
                        <h2>허정 선생님</h2>
                        <p>이해위주로 암기 최소화!<br /> 문제응용 무한반복으로<br /> 형사법 완전정복</p>
                        <img src={process.env.PUBLIC_URL + '/assets/images/tcbg03.png'} alt="" />
                    </figure>
                    <ul className="board_tc">
                        <li><a href="#!">OT</a> </li>
                        <li><a href="#!">강의리스트</a> </li>
                        <li> <a href="#!">수강후기</a> </li>
                    </ul>
                </div>
            </div>
            <div className="tc__img inner">
                <div className="hctc">
                    <figure className='tc_left'>
                        <h2>황남기 선생님</h2>
                        <p>고시 수석합격자의<br /> 20년 시험적중 노하우<br />헌법 전설 황남기</p>
                        <img src={process.env.PUBLIC_URL + '/assets/images/tcbg04.png'} alt="" />
                    </figure>
                    <ul className="board_tc">
                        <li><a href="#!">OT</a> </li>
                        <li><a href="#!">강의리스트</a> </li>
                        <li> <a href="#!">수강후기</a> </li>
                    </ul>
                </div>
                <div className="hctc">
                    <figure className='tc_right'>
                        <h2>송광호 선생님</h2>
                        <p>단계적 설며으로<br />저절로 암기되는<br />송광호 경찰학</p>
                        <img src={process.env.PUBLIC_URL + '/assets/images/tcbg08.png'} alt="" />
                    </figure>
                    <ul className="board_tc">
                        <li><a href="#!">OT</a> </li>
                        <li><a href="#!">강의리스트</a> </li>
                        <li> <a href="#!">수강후기</a> </li>
                    </ul>
                </div>
                <div className="hctc">
                    <figure className='tc_right'>
                        <h2>윤동한 선생님</h2>
                        <p>20년 강의 노하우<br />스토리텔링으로<br />쉽게 푸는 민법총칙</p>
                        <img src={process.env.PUBLIC_URL + '/assets/images/tcbg09.png'} alt="" />
                    </figure>
                    <ul className="board_tc">
                        <li><a href="#!">OT</a> </li>
                        <li><a href="#!">강의리스트</a> </li>
                        <li> <a href="#!">수강후기</a> </li>
                    </ul>
                </div>
            </div>
        </smenu >
    )
}

export default Smenu;