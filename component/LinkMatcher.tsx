import * as React from "react";
import { useLocation, Routes, Route, useNavigate } from "react-router";
import Body from "./Body";
import CartForm from "./CartForm";
import JoinForm from "./JoinForm";
import LoginForm from "./LoginForm";
import MyPageForm from "./MyPageForm";
import ProductGrid from "./ProductGrid";
import ProductForm from "./ProductForm";
const LinkMatcher = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let urlSearchParams = new URLSearchParams(location.search.slice(1));
  console.log(urlSearchParams.get("page"));
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/join" element={<JoinForm />} />
      <Route path="/cart" element={<CartForm />} />
      <Route path="/myPage" element={<MyPageForm />} />
      <Route path="/myPage/*" element={<MyPageForm />} />
      <Route path="/newGoods" element={<ProductGrid sort="new" />} />
      <Route path="/majorGoods" element={<ProductGrid sort="major" />} />
      <Route path="/productForm/:id" element={<ProductForm />} />
      <Route path="/*" element={<Body />} />
    </Routes>
  );
};
export default LinkMatcher;
