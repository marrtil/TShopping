import * as React from "react";
import { Order } from "../Types";
import OrderSearch from "./OrderSearch";
import StyledOrder from "./StyledOrder";
import Table from "./Table";

const MyOrderRecord = () => {
  const [orders, setOrders] = React.useState<Order[]>([
    { name: "상품정보1", price: 20000, count: 2, orderNum: 112, orderDate: "20230119", orderState: "입금/결제" },
    { name: "상품정보2", price: 10000, count: 3, orderNum: 66, orderDate: "20230104", orderState: "환불완료" },
  ]);
  return (
    <StyledOrder>
      <div>
        <div id="orderTitle">주문 내역 조회</div>
        <div>
          <a className="orderSort" href="#">
            입금/결제
          </a>
          <a className="orderSort" href="#">
            배송중/픽업대기
          </a>
          <a className="orderSort" href="#">
            배송완료/픽업완료
          </a>
          <a className="orderSort" href="#">
            구매확정
          </a>
          <a className="orderSort" href="#">
            교환
          </a>
          <a className="orderSort" href="#">
            교환완료
          </a>
          <a className="orderSort" href="#">
            환불
          </a>
          <a className="orderSort" href="#">
            환불완료
          </a>
          <div className="alignRight">
            <a className="orderAll" href="#">
              전체보기
            </a>
          </div>
        </div>
      </div>
      <hr></hr>
      <OrderSearch />
      <hr></hr>
      <Table {...orders} />
      <hr></hr>
    </StyledOrder>
  );
};

export default MyOrderRecord;
