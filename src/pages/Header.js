import React from 'react'
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';
const Header = () => {
    return (
        <header className='Header'>
            <div className="top_service">
                <ul className="inner">
                    <li><a href="#!">로그인</a></li>
                    <li><a href="#!">회원가입</a></li>
                    <li><a href="#!">고객센터<i className="xi-angle-down arrow"></i></a></li>
                    <li><a href="#!">해커스에 바란다</a></li>
                </ul>
            </div>
            <div className="inner">
                <h1>
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" />
                    </Link>
                </h1>
            </div>
            <nav>
                <NavMenu />
            </nav>
        </header>
    )
}

export default Header