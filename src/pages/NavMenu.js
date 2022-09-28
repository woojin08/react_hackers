import React from 'react'
import { NavLink } from 'react-router-dom'

const NAVLINK = [
    { content: "수강신청", link: "/sub01" },
    { content: "선생님", link: "/sub02" },
    { content: "교재·서점", link: "/sub03" },
    { content: "합격수기", link: "/sub04" },
    { content: "무료강좌", link: "/SUB05" },
    { content: "수험정보", link: "/board" },
]
const NavMenu = () => {
    return (
        <ul>
            {
                NAVLINK.map((it, idx) => {
                    return (
                        <li key={idx}><NavLink to={it.link}>{it.content}</NavLink></li>
                    )
                })
            }

        </ul>
    )
}

export default NavMenu