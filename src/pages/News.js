const NEWS = [
    { id: 1, category: "형사법", title: "합격의 시작은 김대환", mtitle: "기적의 적중률로 시험을 압도하다!", link: "#!", src: "/assets/images/main_news01.jpg" },
    { id: 2, category: "헌법", title: "15년 헌법 전문가 초시생도 쉬운 강의 신동욱", mtitle: "친절한 경찰헌법", link: "#!", src: "/assets/images/main_news02.jpg" },
    { id: 3, category: "경찰학", title: "적중으로 증명된 경찰전문가 조현", mtitle: "20문제 중 18문제 적중! 경찰학 적중의 대가", link: "#!", src: "/assets/images/main_news03.jpg" },
]

const News = () => {
    return (
        <section className="News csc">
            <h2>1위 해커스 스타강사 라인업</h2>
            <p>경찰 합격을 위한 가장 확실한</p>
            <div className="inner">
                {
                    NEWS.map(news => {
                        return (
                            <figure key={news.id}>
                                <a href={news.link}>
                                    <div className="box">
                                        <img src={process.env.PUBLIC_URL + news.src} alt={news.title} />
                                    </div>
                                    <strong>{news.category}</strong>
                                    <div className="title">{news.title}</div>
                                    <span>{news.mtitle}</span>
                                </a>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    )
}


export default News;