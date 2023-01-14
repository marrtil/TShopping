import * as React from "react";
import SearchForm from "./SearchForm";
import StyledTitleBanner from "./styles/StyledTitleBanner";
import StyledHeader from "./styles/StyledHeader";
import StyledLoginBar from "./styles/StyledLoginBar";
import StyledMenuBar from "./styles/StyledMenuBar";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import LinkMatcher from "./LinkMatcher";
import { test } from "./api";

const Header = () => {
  const testClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(e.currentTarget.value);
    await test();
  };
  return (
    <BrowserRouter>
      <StyledHeader>
        <StyledLoginBar>
          <ul>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/join">회원가입</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/cart">장바구니</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/myPage">마이페이지</Link>
            </li>
          </ul>
          <hr></hr>
        </StyledLoginBar>
        <a href="/">
          <StyledTitleBanner />
        </a>
        <SearchForm />
        <button value="test" onClick={testClick}>
          testClick
        </button>
        <StyledMenuBar>
          <ul>
            <li className="menu">
              메뉴
              <div className="menuDiv"> menuDiv </div>
            </li>
            <li>
              <Link to="/newGoods">신제품</Link>
            </li>
            <li>
              <Link to="/majorGoods">인기상품</Link>
            </li>
          </ul>
        </StyledMenuBar>
      </StyledHeader>
      <Routes>
        <Route path="/" element={<LinkMatcher />} />
        <Route path="/*" element={<LinkMatcher />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Header;
