import React from 'react'
import { NavLink } from 'react-router-dom'

const NAVLINK = [
    { content: "경찰", link: "/sub02" },
    { content: "경찰간부", link: "/sub02_2" },
    { content: "해양경찰", link: "/sub02_3" },
    { content: "검정시험", link: "/sub02_4" },
    { content: "면접/가산점", link: "/sub02_5" },

]
const TcMenu = () => {
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

export default TcMenu