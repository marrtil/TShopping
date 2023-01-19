import * as React from "react";
import StyledMyPage from "./styles/StyledMyPage";
import { Route, Routes, Link, useLocation } from "react-router-dom";
// import MyPageLink from "./MyPageLink";
import MyInfo from "./myPage/MyInfo";
import MyOrderRecord from "./myPage/MyOrderRecord";
import MyReview from "./myPage/MyReview";
import MySize from "./myPage/MySize";
import ModForm from "./myPage/ModForm";
// interface MatchParams {
//   postId: string;
// }
const MyPageForm = () => {
  // const [menu, setMenu] = React.useState<string>();
  // const location = useLocation();
  // React.useEffect(() => {
  //   setMenu(location.pathname.split("/")[1]);
  // }, []);

  return (
    <StyledMyPage>
      {/* <BrowserRouter> */}
      <div id="myPageMenuDiv">
        <ul>
          <li>
            <Link id="myInfoLink" to="/myPage">
              내 정보
            </Link>
          </li>
          <li>
            <Link id="myOrderLink" to="/myPage/myorder">
              주문 내역 조회
            </Link>
          </li>
          <li>
            <Link id="myReviewLink" to="/myPage/myreview">
              후기
            </Link>
          </li>
          <li>
            <Link id="mySizeLink" to="/myPage/mysize">
              내 사이즈
            </Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/myorder" element={<MyOrderRecord />} />
        <Route path="/myreview" element={<MyReview />} />
        <Route path="/mysize" element={<MySize />} />
        <Route path="/modForm" element={<ModForm />} />
        <Route path="/" element={<MyInfo />} />
      </Routes>
    </StyledMyPage>
  );
};

export default MyPageForm;
