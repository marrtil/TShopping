import * as React from "react";
import { Routes, Route } from "react-router";
import MyInfo from "./myPage/MyInfo";
import MyOrderRecord from "./myPage/MyOrderRecord";
import MyReview from "./myPage/MyReview";
import MySize from "./myPage/MySize";
import MyPageForm from "./MyPageForm";

const MyPageLink = () => {
  return (
    <Routes>
      {/* <Route path="/myinfo" element={<MyInfo />} /> */}
      <Route path="myorder" element={<MyOrderRecord />} />
      <Route path="myreview" element={<MyReview />} />
      <Route path="mysize" element={<MySize />} />
      <Route path="*" element={<MyInfo />} />
    </Routes>
  );
};
export default MyPageLink;
