import * as React from "react";
import { Routes, Route } from "react-router";
import Body from "./Body";
import CartForm from "./CartForm";
import ProductGrid from "./ProductGrid";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import Payment from "./Payment";
import ProductListType from "./ProductListType";
const LinkMatcher = () => {
  return (
    <Routes>
      <Route path="/cart" element={<CartForm />} />
      <Route path="/productList/" element={<ProductList />} />
      <Route path="/productType/:type" element={<ProductListType />} />
      <Route path="/payment" element={<Payment />} />
      <Route path={`/productForm/:id`} element={<ProductForm />} />
      <Route path="/" element={<Body />} />
    </Routes>
  );
};
export default LinkMatcher;
