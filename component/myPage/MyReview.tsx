import * as React from "react";
import { Order } from "../Types";
import StyledOrder from "./StyledOrder";
import Table from "./Table";
const MyReview = () => {
  const [orders, setOrders] = React.useState<Order[]>([
    { name: "상품정보1", price: 20000, count: 2, orderNum: 112, orderDate: "20230119", orderState: "입금/결제" },
    { name: "상품정보2", price: 10000, count: 3, orderNum: 66, orderDate: "20230104", orderState: "환불완료" },
  ]);
  return (
    <StyledOrder>
      <div>
        <div id="orderTitle">구매후기</div>
        <div>
          <a href="#">후기 작성</a> / <a href="#">후기 내역</a>
        </div>
      </div>
      <Table {...orders} />
      <hr></hr>
    </StyledOrder>
  );
};

export default MyReview;
