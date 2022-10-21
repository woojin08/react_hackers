import FamilyLink from "./FaminlyLink"


const Footer = () => {
    return (
        <footer className="Footer">
            <div className="ft_top">
                <div className="inner">
                    <ul className="left">
                        <li><a href="#!">개인정보처리방침</a></li>
                        <li><a href="#!">이용약관</a></li>
                        <li><a href="#!">불편사항 신고</a></li>
                        <li><a href="#!">고객센터 <span>1577-0603</span></a></li>
                    </ul>
                    <div className="right">

                    </div>
                </div>
            </div>
            <div className="ft_bottom">
                <div className="inner">
                    <div className="left">
                        <address>(주)챔프스터디 서울특별시 서초구 강남대로 61길 23 (서초동 1316-15) 현대성우빌딩 203호 </address>
                        <span>사업자등록번호 120-87-09984 | 통신판매업신고 (제2008-서울서초-0396)</span>
                    </div>
                    <div className="right">
                        <FamilyLink />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer