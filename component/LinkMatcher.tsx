import * as React from "react";
import { useLocation, Routes, Route } from "react-router";
import Body from "./Body";
import CartForm from "./CartForm";
import JoinForm from "./JoinForm";
import LoginForm from "./LoginForm";
import MajorProdForm from "./MajorProdForm";
import MyPageForm from "./MyPageForm";
import NewProdForm from "./NewProdForm";
const LinkMatcher = () => {
  const location = useLocation();
  let urlSearchParams = new URLSearchParams(location.search.slice(1));
  console.log(urlSearchParams.get("page"));
  return (
    <Routes>
      <Route path="login" element={<LoginForm />} />
      <Route path="join" element={<JoinForm />} />
      <Route path="cart" element={<CartForm />} />
      <Route path="myPage" element={<MyPageForm />} />
      <Route path="newProduction" element={<NewProdForm />} />
      <Route path="majorProduction" element={<MajorProdForm />} />
      <Route path="*" element={<Body />} />
    </Routes>
  );
};
export default LinkMatcher;
