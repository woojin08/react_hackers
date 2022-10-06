import React from 'react';
import Header from './pages/Header';
import Main from './pages/Main';
import Sub01 from './pages/Sub01';
import Sub02 from './pages/Sub02';
import Sub02_2 from './pages/Sub02_2'
import Sub03 from './pages/Sub03';
import Sub04 from './pages/Sub04';
import Sub05 from './pages/Sub05';
import Wrapper from './pages/Wrapper';
import { Route, Routes } from 'react-router-dom';
import './css/basic.scss';


const App = () => {
  const MAINSLIDRE = [
    { id: 0, tit: "일반경찰", txt: "경찰간부 / 해양경찰 / 경행경채 / 경찰승진", con: "오직 실력으로 승부\n합니다", cons: "형사법의 제왕 ", dev: "입문과정", gib: "기본과정", link: "/sub01" },
  ];
  const SUBBNR = [
    { id: 0, tit: "일반경찰", txt: "경찰간부 / 해양경찰 / 경행경채 / 경찰승진", con: "해커스경찰 수험생 10명 중 8명 1년이내 최종합격!", cons: "합격생이 증명하는 업계 최정상급 전문 강사진 ", dev: "* 해커스경찰 합격수기 인증자 중 수험기간을 [6개월 미만],[6개월 이상 ~ 1년 미만]으로 선택한 비율 [2021.03.25~04.09]", link: "/sub01" },
    { id: 1, tit: "아파트입주청소", con: "신축 아파트나 빌라 등 입주 전 상태에서의 실내 청소", des: "보양지 제거, 공사먼지 제거, 오염 제거, \n시멘트가루 제거 등 구석구석 세밀하게 청소하는 서비스로 가족의 건강을 위해서 입주 전에 꼭 해야 하는 서비스입니다.", link: "/sub02" },
    { id: 2, tit: "이사/상가청소", con: "오랫동안 누적된 공간의 묵은 때, 찌든 때, ", des: "신축 건물은 공사기간 중 쌓인 미세먼지/유해성분들이 곳곳에 산재해 있습니다. 입추청소를 맡기시면 유해성분 제거하고 청결한 환경을 만드실 수 있습니다.", link: "/sub03" },
    { id: 3, tit: "사무실청소", con: "쾌적한 업무 환경을 만들고, 능률적인 업무를 수행하기 위해 반드시 필요한 청소", des: "보양지 제거, 공사먼지 제거, 오염 제거, 시멘트가루 제거 등 구석구석 세밀하게 청소하는 서비스로 가족의 건강을 위해서 입주 전에 꼭 해야 하는 서비스입니다.", link: "/sub04" }
  ];
  const SUBBOOK = [
    { id: 0, tit: "일반경찰", txt: "경찰간부 / 해양경찰 / 경행경채 / 경찰승진", con: "1위 해커스경찰 추천교재", link: "/sub01" },
    { id: 1, tit: "아파트입주청소", con: "신축 아파트나 빌라 등 입주 전 상태에서의 실내 청소", des: "보양지 제거, 공사먼지 제거, 오염 제거, \n시멘트가루 제거 등 구석구석 세밀하게 청소하는 서비스로 가족의 건강을 위해서 입주 전에 꼭 해야 하는 서비스입니다.", link: "/sub02" },
    { id: 2, tit: "이사/상가청소", con: "오랫동안 누적된 공간의 묵은 때, 찌든 때, ", des: "신축 건물은 공사기간 중 쌓인 미세먼지/유해성분들이 곳곳에 산재해 있습니다. 입추청소를 맡기시면 유해성분 제거하고 청결한 환경을 만드실 수 있습니다.", link: "/sub03" },
    { id: 3, tit: "사무실청소", con: "쾌적한 업무 환경을 만들고, 능률적인 업무를 수행하기 위해 반드시 필요한 청소", des: "보양지 제거, 공사먼지 제거, 오염 제거, 시멘트가루 제거 등 구석구석 세밀하게 청소하는 서비스로 가족의 건강을 위해서 입주 전에 꼭 해야 하는 서비스입니다.", link: "/sub04" }
  ];

  const COMPANY = {
    name: "깔끔이청소",
    address: "  부산광역시 북구 만덕2로 14 상가동 제314호",
    number: "606-11-45081",
    tel: "051-331-3354",
    email: "jjs3354@naver.com"
  }
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Main content={MAINSLIDRE} />} />
        <Route path='/sub01' element={<Sub01 content={MAINSLIDRE} />} />
        <Route path='/sub02' element={<Sub02 content={SUBBNR} />} />
        <Route path='/sub02_2' element={<Sub02_2 content={SUBBNR} />} />
        <Route path='/sub03' element={<Sub03 content={SUBBOOK} />} />
        <Route path='/sub04' element={<Sub04 content={MAINSLIDRE} />} />
        <Route path='/sub05' element={<Sub05 content={MAINSLIDRE} />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
