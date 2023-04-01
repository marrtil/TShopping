import * as React from "react";
import SearchForm from "./SearchForm";
import StyledTitleBanner from "./styles/StyledTitleBanner";
import StyledHeader from "./styles/StyledHeader";
import StyledLoginBar from "./styles/StyledLoginBar";
import StyledMenuBar from "./styles/StyledMenuBar";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import LinkMatcher from "./LinkMatcher";
import MyPageForm from "./MyPageForm";
import { productManT, productWomenT, UserInfo } from "./Types";
const Header = ({ userInfo, handleLogout }: { userInfo: UserInfo; handleLogout: () => void }) => {
  const navi = useNavigate();
  // const [userInfo, setUserInfo] = React.useState<any>();
  const productWomen: productWomenT = {
    아우터: "outter",
    가디건: "cardigan",
    셔츠: "shirts",
    드레스: "blouse",
    탑: "top",
    후디: "hood",
    티셔츠: "T-shirts",
    팬츠: "pants",
    스커트: "skirt",
    데님: "denim",
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
    데님: "under-wear",
    신발: "shoes",
  };
  return (
    <>
      <StyledHeader>
        <StyledLoginBar>
          <ul>
            {userInfo.userId ? (
              <li key="login">
                <a href="/" onClick={handleLogout}>
                  로그아웃
                </a>
              </li>
            ) : (
              <>
                <li key="login">
                  <Link to="/login">로그인</Link>
                </li>
                <li key="hr1">|</li>
                <li key="join">
                  <Link to="/join">회원가입</Link>
                </li>
              </>
            )}

            <li key="hr2">|</li>
            <li key="cart">
              <Link to="/cart">장바구니</Link>
            </li>
            <li key="hr3">|</li>
            <li key="mypage">
              <Link
                to="/myPage"
                onClick={(e) => {
                  if (!userInfo.userId) {
                    alert("로그인이 필요합니다!");
                    navi("/login");
                    e.preventDefault();
                  }
                }}
              >
                마이페이지
              </Link>
            </li>
          </ul>
          <hr></hr>
        </StyledLoginBar>
        <a href="/">
          <StyledTitleBanner />
        </a>
        <SearchForm />
        <StyledMenuBar>
          <ul className="allMenu">
            <li className="menu">
              <a href="#">메뉴</a>
              <ul className="menuUl">
                <li>
                  <div className="gender">
                    <a href="/productList?gender=남성">남성</a>
                    <hr />
                    {Object.keys(productMan).map((value) => (
                      <div>
                        <a href={`/productList?gender=남성&kind=${value}`}>{value}</a>
                      </div>
                    ))}
                  </div>
                </li>
                <li>
                  <div className="gender">
                    <div>
                      <a href="/productList?gender=여성">여성</a>
                    </div>
                    <hr />
                    {Object.keys(productWomen).map((value) => (
                      <div>
                        <a href={`/productList?gender=여성&kind=${value}`}>{value}</a>
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
              <a href="/productType/new">신제품</a>
            </li>
            <li>
              <a href="/productType/major">인기상품</a>
            </li>
          </ul>
        </StyledMenuBar>
      </StyledHeader>
      <Routes>
        <Route path="/*" element={<LinkMatcher />} />
        <Route path="/myPage//*" element={<MyPageForm userInfo={userInfo} />} />
      </Routes>
    </>
  );
};

export default Header;
