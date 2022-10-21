import React from 'react'
const NEWSTW = [
    { id: 1, category: "형사법", title: "이해 기반으로 암기 최소화 허정", mtitle: "난해하고 방대한 형사법도 효율적으로!", link: "#!", src: "/assets/images/main_newstw01.jpg" },
    { id: 2, category: "경찰학", title: "방대한 양의 경찰학을 도식화! 이상훈", mtitle: "이해 중심의 탄탄한 강의", link: "#!", src: "/assets/images/main_newstw02.jpg" },
    { id: 3, category: "경찰헌법", title: "고시 후석합격자의 20년 적중 노하우 황남기", mtitle: "합격생이 증명하는 관리헌법", link: "#!", src: "/assets/images/main_newstw03.jpg" },
]

const Newstw = () => {
    return (
        <section className="Newstw">
            <div className="inner">
                {
                    NEWSTW.map(newstw => {
                        return (
                            <figure key={newstw.id}>
                                <a href={newstw.link}>
                                    <div className="box">
                                        <img src={process.env.PUBLIC_URL + newstw.src} alt={newstw.title} />
                                    </div>
                                    <strong>{newstw.category}</strong>
                                    <div className="title">{newstw.title}</div>
                                    <span>{newstw.mtitle}</span>
                                </a>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    )
}



export default Newstw