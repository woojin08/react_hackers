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
                        <h2>서현 선생님</h2>
                        <p>기본 핵심만 간추려<br />만점까지 관통하는<br />베이직 행정학</p>
                        <img src={process.env.PUBLIC_URL + '/assets/images/tcbg10.png'} alt="" />
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
                        <h2>함수민 선생님</h2>
                        <p>행정법의<br />새로운 기준<br />스마트 행정법</p>
                        <img src={process.env.PUBLIC_URL + '/assets/images/tcbg11.png'} alt="" />
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