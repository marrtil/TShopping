import * as React from "react";
import SearchForm from "./SearchForm";
import StyledTitleBanner from "./styles/StyledTitleBanner";
import StyledHeader from "./styles/StyledHeader";
import StyledLoginBar from "./styles/StyledLoginBar";
import StyledMenuBar from "./styles/StyledMenuBar";
import { Route, Routes, Link } from "react-router-dom";
import LinkMatcher from "./LinkMatcher";
import MyPageForm from "./MyPageForm";
const Header = () => {
  const productWomen = [
    "아우터",
    "가디건",
    "셔츠",
    "블라우스",
    "니트",
    "후드티",
    "티셔츠",
    "팬츠",
    "스커트",
    "언더웨어",
    "신발",
  ];
  const productMan = [
    "팬츠",
    "아우터",
    "수트",
    "후드티",
    "맨투맨",
    "니트",
    "가디건",
    "스웨터",
    "셔츠",
    "팬츠",
    "언더웨어",
    "신발",
  ];

  return (
    <>
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
        <StyledMenuBar>
          <ul>
            <li className="menu">
              <a href="#">메뉴</a>
              <ul className="menuUl">
                <li>
                  <div className="gender">
                    <a href="/productList/남성">남성</a>
                    <hr />
                    {productMan.map((value) => (
                      <div>
                        <a href={`/productList/${value}`}>{value}</a>
                      </div>
                    ))}
                  </div>
                </li>
                <li>
                  <div className="gender">
                    <div>
                      <a href="/productList/여성">여성</a>
                    </div>
                    <hr />
                    {productWomen.map((value) => (
                      <div>
                        <a href={`/productList/${value}`}>{value}</a>
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/productList">전체상품</Link>
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
        <Route path="/*" element={<LinkMatcher />} />
        <Route path="/myPage//*" element={<MyPageForm />} />
      </Routes>
    </>
  );
};

export default Header;
