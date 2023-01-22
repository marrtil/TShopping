import * as React from "react";
import ProductList from "../ProductList";
import StyledOrder from "./StyledOrder";
const ViewedGoods = () => {
  React.useEffect(() => {
    (document.querySelector("#productList") as HTMLDivElement).style.width = "800px";
    (document.querySelector("#productList") as HTMLDivElement).style.margin = "5px";
  }, []);
  return (
    <StyledOrder>
      <div id="orderTitle">최근 본 상품</div>
      <hr></hr>
      {/* 이제 여기에 날짜순정렬, 내 아이디만 조건달면됨 */}
      <ProductList />
      <hr></hr>
    </StyledOrder>
  );
};

export default ViewedGoods;
