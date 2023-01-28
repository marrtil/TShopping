import * as React from "react";
import SearchForm from "./SearchForm";
import StyledTitleBanner from "./styles/StyledTitleBanner";
import StyledHeader from "./styles/StyledHeader";
import StyledLoginBar from "./styles/StyledLoginBar";
import StyledMenuBar from "./styles/StyledMenuBar";
import { Route, Routes, Link } from "react-router-dom";
import LinkMatcher from "./LinkMatcher";
import MyPageForm from "./MyPageForm";
import { productManT, productWomenT } from "./Types";
import { getUserInfo, loginCheck_process, logOut_process } from "./api";
const Header = () => {
  const [userInfo, setUserInfo] = React.useState();
  const productWomen: productWomenT = {
    아우터: "outter",
    가디건: "cardigan",
    셔츠: "shirts",
    블라우스: "blouse",
    니트: "neat",
    후드티: "hood",
    티셔츠: "T-shirts",
    팬츠: "pants",
    스커트: "skirt",
    언더웨어: "under-wear",
    신발: "shoes",
  };

  const productMan: productManT = {
    팬츠: "pants",
    아우터: "outter",
    수트: "suit",
    후드티: "hood",
    맨투맨: "manman",
    니트: "neat",
    가디건: "cardigan",
    스웨터: "sweater",
    셔츠: "shirts",
    언더웨어: "under-wear",
    신발: "shoes",
  };

  const handleLogout = async () => {
    await logOut_process();
  };

  const handleLoad = async () => {
    console.log(await getUserInfo());
  };

  React.useEffect(() => {
    // handleLoad();
  }, []);

  return (
    <>
      <StyledHeader>
        <StyledLoginBar>
          <ul>
            <li key="login">
              <button onClick={handleLoad}>테스트</button>
              <button onClick={handleLogout}>로그아웃</button>
              {userInfo ? (
                <></>
              ) : (
                <Link
                  to="/login"
                  onClick={async (e) => {
                    if (await loginCheck_process()) e.preventDefault();
                    else console.log("입장");
                  }}
                >
                  로그인
                </Link>
              )}
            </li>
            <li key="hr1">|</li>
            <li key="join">
              <Link to="/join">회원가입</Link>
            </li>
            <li key="hr2">|</li>
            <li key="cart">
              <Link to="/cart">장바구니</Link>
            </li>
            <li key="hr3">|</li>
            <li key="mypage">
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
                    <a href="/productList?gender=man">남성</a>
                    <hr />
                    {Object.keys(productMan).map((value) => (
                      <div>
                        <a href={`/productList?gender=man&kind=${productMan[value]}`}>{value}</a>
                      </div>
                    ))}
                  </div>
                </li>
                <li>
                  <div className="gender">
                    <div>
                      <a href="/productList?gender=women">여성</a>
                    </div>
                    <hr />
                    {Object.keys(productWomen).map((value) => (
                      <div>
                        <a href={`/productList?gender=women&kind=${value}`}>{value}</a>
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <a href="/productList">전체상품</a>
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
