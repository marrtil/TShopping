import * as React from "react";
import StyledBody from "./styles/StyledBody";
import Banner from "./Banner";
import RecomendProduct from "./RecomendProduct";
import ProductGrid from "./ProductGrid";

const Body = () => {
  return (
    <StyledBody>
      <Banner />
       <RecomendProduct />
      <ProductGrid />
      {/* 새제품,인기상품 통합 - props로 구분할 수 있게 */}
    </StyledBody>
  );
};

export default Body;
