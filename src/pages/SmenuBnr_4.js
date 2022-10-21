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
            {/* <div className="sub__tit">
                {content[num].tit}
            </div>
            <p className="sub__des">
                {content[num].tit}
            </p> */}
            <TcMainMenu />
            <div className="tc__img inner">
                <div className="hctc">
                    <figure className='tc_left'>
                        <h2>비비안 선생님</h2>
                        <p>쉽고 빠른<br />지텔프 전문가</p>
                        <img src={process.env.PUBLIC_URL + '/assets/images/tcbg12.png'} alt="" />
                    </figure>
                    <ul className="board_tc">
                        <li><a href="#!">OT</a> </li>
                        <li><a href="#!">강의리스트</a> </li>
                        <li> <a href="#!">수강후기</a> </li>
                    </ul>
                </div>
                <div className="hctc">
                    <figure className='tc_right'>
                        <h2>Jenna 선생님</h2>
                        <p>Key Point 문제풀이로<br />고득점 달성!</p>
                        <img src={process.env.PUBLIC_URL + '/assets/images/tcbg13.png'} alt="" />
                    </figure>
                    <ul className="board_tc">
                        <li><a href="#!">OT</a> </li>
                        <li><a href="#!">강의리스트</a> </li>
                        <li> <a href="#!">수강후기</a> </li>
                    </ul>
                </div>
                <div className="hctc">
                    <figure className='tc_right'>
                        <h2>연미정 선생님</h2>
                        <p>한국사의 맥과<br />흐름을 잡다</p>
                        <img src={process.env.PUBLIC_URL + '/assets/images/tcbg14.png'} alt="" />
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
                        <h2>김승범 선생님</h2>
                        <p>철저한 기출 개념에 기반한<br />스피드한 개념 정리</p>
                        <img src={process.env.PUBLIC_URL + '/assets/images/tcbg15.png'} alt="" />
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