import * as React from "react";
import { Routes, Route } from "react-router";
import Body from "./Body";
import CartForm from "./CartForm";
import ProductGrid from "./ProductGrid";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
const LinkMatcher = () => {
  return (
    <Routes>
      <Route path="/cart" element={<CartForm />} />
      <Route path="/productList" element={<ProductList />} />
      <Route path="/newGoods" element={<ProductGrid sort="new" />} />
      <Route path="/majorGoods" element={<ProductGrid sort="major" />} />
      <Route path={`/productForm/:id`} element={<ProductForm />} />
      <Route path="/" element={<Body />} />
    </Routes>
  );
};
export default LinkMatcher;
