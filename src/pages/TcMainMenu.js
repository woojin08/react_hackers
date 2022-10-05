import React from 'react'
import TcMenu from './TcMenu'

const Aside = () => {
    return (
        <aside>
            <div className="aside__lnb">
                <TcMenu />
            </div>

            {/* <div className="aside__customer">
                <img src={process.env.PUBLIC_URL + '/assets/images/slogan.png'} alt="" />
                <p>
                    <strong>전화문의 051-331-3354 </strong>
                    <hr />
                    <span>e-mail : jjs3354@naver.com</span>
                </p>
            </div> */}
        </aside>
    )
}

export default Aside