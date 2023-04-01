import * as React from "react";
import ProductList from "../ProductList";
import StyledOrder from "./styles/StyledOrder";
const ViewedGoods = () => {
  return (
    <StyledOrder>
      <div id="orderTitle">최근 본 상품</div>
      <hr />
      <ProductList />
      <hr></hr>
    </StyledOrder>
  );
};

export default ViewedGoods;
