import * as React from "react";
import ProductList from "../ProductList";
import { Order } from "../Types";
import StyledOrder from "./StyledOrder";
import Table from "./Table";
const ViewedGoods = () => {
  const [orders, setOrders] = React.useState<Order[]>([
    { name: "상품정보1", price: 20000, count: 2, orderNum: 112, orderDate: "20230119", orderState: "입금/결제" },
    { name: "상품정보2", price: 10000, count: 3, orderNum: 66, orderDate: "20230104", orderState: "환불완료" },
  ]);
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
