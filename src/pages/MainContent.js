import { Link } from "react-router-dom"


const MainContent = ({ word }) => {
    return (
        <section className="MainContent">
            <div className="mainct csc">
                <h2>해커스경찰 교재·서점</h2>
                <p>1위 해커스경찰 추천교재</p> </div>
            <div className="inner">
                {
                    word.map((con, idx) => {
                        return (
                            <Link to={con.link}><figure key={con.id}>
                                <img src={process.env.PUBLIC_URL + `/assets/images/smain_s01${idx + 1}.jpg`} alt="" />
                            </figure>
                                <strong>{con.tit}</strong>
                                <h2>
                                    {con.con}
                                </h2>
                                <p>
                                    {con.des}
                                </p>
                            </Link>
                        )
                    }
                    )
                }
            </div>
        </section >
    )
}

export default MainContent