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
                        <h2>천재근 선생님</h2>
                        <p>경찰 면접 최적화!<br />천재근 선생님만의<br />경찰최종합격 필승법!</p>
                        <img src={process.env.PUBLIC_URL + '/assets/images/tcbg16.png'} alt="" />
                    </figure>
                    <ul className="board_tc">
                        <li><a href="#!">OT</a> </li>
                        <li><a href="#!">강의리스트</a> </li>
                        <li> <a href="#!">수강후기</a> </li>
                    </ul>
                </div>
                <div className="hctc">
                    <figure className='tc_right'>
                        <h2>오선희 선생님</h2>
                        <p>가산점 취득의<br />가장 쉽고 빠른 길!<br />초단기 실용글쓰기</p>
                        <img src={process.env.PUBLIC_URL + '/assets/images/tcbg17.png'} alt="" />
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