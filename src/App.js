import React from 'react';
import Header from './pages/Header';
import Main from './pages/Main';
import Sub01 from './pages/Sub01';
import Sub02 from './pages/Sub02';
import Sub02_2 from './pages/Sub02_2'
import Sub02_3 from './pages/Sub02_3';
import Sub02_4 from './pages/Sub02_4';
import Sub02_5 from './pages/Sub02_5';
import Sub03 from './pages/Sub03';
import Sub04 from './pages/Sub04';
import Sub05 from './pages/Sub05';
import ToTop from './pages/ToTop';
import Wrapper from './pages/Wrapper';
import { Route, Routes } from 'react-router-dom';
import './css/basic.scss';
import Footer from './pages/Footer';



const App = () => {
  const MAINCONTENT = [
    { id: 0, tit: "2022 해커스경찰 갓대환 형사법 1권 - 형법 (2판)", con: "갓대환 형사법 필수기본서", des: "19,800원", link: "#!" },
    { id: 1, tit: "2023 해커스경찰 황남기 경찰헌법 핵심요약집 (2판)", con: "경찰헌법 수험서의 바이블", des: "24,300원", link: "#!" },
    { id: 2, tit: "2023 해커스경찰 신동욱 경찰헌법 기본서 (2판)", con: "최신 판례 및 개정 법령 반영!합격을 위한 필수개념 총정리 ", des: "45,000원", link: "#!" },
    { id: 3, tit: "2023 해커스경찰 박철한 경찰헌법 기본서 (2판)", con: "과목개편 대비 최신개정판경찰채용/ 경찰간부 시험대비", des: "29,700원 ", link: "#!" }
  ];
  const MAINSLIDRE = [
    { id: 0, tit: "일반경찰", txt: "경찰간부 / 해양경찰 / 경행경채 / 경찰승진", con: "오직 실력으로 승부\n합니다", cons: "형사법의 제왕 ", dev: "입문과정", gib: "기본과정", yb: "핵심을 관통하는 체계적 강의!", ybs: "형사법의 정석", link: "/sub01" }
  ];
  const SUBBNR = [
    { id: 0, tit: "일반경찰", txt: "경찰간부 / 해양경찰 / 경행경채 / 경찰승진", con: "해커스경찰 수험생 10명 중 8명 1년이내 최종합격!", cons: "합격생이 증명하는 업계 최정상급 전문 강사진 ", dev: "* 해커스경찰 합격수기 인증자 중 수험기간을 [6개월 미만],[6개월 이상 ~ 1년 미만]으로 선택한 비율 [2021.03.25~04.09]", link: "/sub01" },

  ];
  const SUBBOOK = [
    { id: 0, tit: "일반경찰", txt: "경찰간부 / 해양경찰 / 경행경채 / 경찰승진", con: "1위 해커스경찰 추천교재", mtit: "2022 해커스경찰 갓대환 형사법 1권 - 형법 (2판)", mtxt: "2023 해커스경찰 황남기 경찰헌법 핵심요약집 (2판)", link: "/sub01" }
  ];
  const SUBREVIEW = [
    { id: 0, tit: "일반경찰", txt: "경찰간부 / 해양경찰 / 경행경채 / 경찰승진", con: "합격후기", mtit: "2022 해커스경찰 갓대환 형사법 1권 - 형법 (2판)", mtxt: "2023 해커스경찰 황남기 경찰헌법 핵심요약집 (2판)", link: "/sub01" }
  ];
  const SUBFREE = [
    { id: 0, tit: "일반경찰", txt: "경찰간부 / 해양경찰 / 경행경채 / 경찰승진", con: "이벤트", mtit: "진행중인 이벤트", mtxt: "2023 해커스경찰 황남기 경찰헌법 핵심요약집 (2판)", link: "/sub04" }
  ];
  const SUBSTUDY = [
    { id: 0, tit: "일반경찰", txt: "경찰간부 / 해양경찰 / 경행경채 / 경찰승진", con: "경찰공무원 전망", mtit: "경찰공무원이란?", link: "/sub04" }
  ];


  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Main content={MAINCONTENT} />} />
        <Route path='/sub01' element={<Sub01 content={MAINSLIDRE} />} />
        <Route path='/sub02' element={<Sub02 content={SUBBNR} />} />
        <Route path='/sub02_2' element={<Sub02_2 content={SUBBNR} />} />
        <Route path='/sub02_3' element={<Sub02_3 content={SUBBNR} />} />
        <Route path='/sub02_4' element={<Sub02_4 content={SUBBNR} />} />
        <Route path='/sub02_5' element={<Sub02_5 content={SUBBNR} />} />
        <Route path='/sub03' element={<Sub03 content={SUBREVIEW} />} />
        <Route path='/sub04' element={<Sub04 content={SUBFREE} />} />
        <Route path='/sub05' element={<Sub05 content={SUBSTUDY} />} />
      </Routes>
      <Footer />
      <ToTop />
    </Wrapper>
  );
}

export default App;
