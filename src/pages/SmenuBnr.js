import React from 'react'

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
            <div className="sub__tit">
                {content[num].tit}
            </div>
            <p className="sub__des">
                {content[num].tit}
            </p>

            <div className="tc__img inner">
                <figure className='tc_left'>
                    <h2>김대환 선생님</h2>
                    <p>기적의 적중률로<br /> 시험을 압도하다!<br /> 형사법의 제왕</p>
                    <img src={process.env.PUBLIC_URL + '/assets/images/tcbg01.png'} alt="" />
                </figure>
                <figure className='tc_right'>
                    <h2>이용배 선생님</h2>
                    <p>핵심을 관통하는<br /> 체계적 강의!<br /> 형사법의 정석</p>
                    <img src={process.env.PUBLIC_URL + '/assets/images/tcbg02.png'} alt="" />
                </figure>

            </div>




        </smenu >
    )
}

export default Smenu;