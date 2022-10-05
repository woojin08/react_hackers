import React from 'react'
import { NavLink } from 'react-router-dom'

const NAVLINK = [
    { content: "경찰", link: "/sub02" },
    { content: "경찰간부", link: "/sub02_2" },
    { content: "해양경찰", link: "#!" },
    { content: "경찰승진", link: "/sub04" },
    { content: "경행경채", link: "/SUB05" },
    { content: "검정시험", link: "/board" },
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