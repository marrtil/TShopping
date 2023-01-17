import * as React from "react";
import StyledMyPage from "./styles/StyledMyPage";
import { Route, Routes, Link } from "react-router-dom";
import MyPageLink from "./MyPageLink";
const MyPageForm = () => {
  // 개인정보
  // 주문 내역 조회
  // 후기
  // 문의
  // 최근 본 상품
  // 마이 사이즈
  return (
    <StyledMyPage>
      {/* <BrowserRouter> */}
      <div id="myPageMenuDiv">
        <ul>
          <li>
            <Link to="/mypage/myinfo">내 정보</Link>
          </li>
          <li>
            <Link to="/mypage/myorder">주문 내역 조회</Link>
          </li>
          <li>
            <Link to="/mypage/myreview">후기</Link>
          </li>
          <li>
            <Link to="/mypage/mysize">내 사이즈</Link>
          </li>
        </ul>
        <hr></hr>
      </div>
      <Routes>
        {/* <div id="myPageFormDiv"> */}
        <Route path="/" element={<MyPageLink />} />
        <Route path="/*" element={<MyPageLink />} />
        {/* </div> */}
      </Routes>
      {/* </BrowserRouter> */}
    </StyledMyPage>
  );
};

export default MyPageForm;
