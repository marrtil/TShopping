import * as React from "react";
import { useLocation } from "react-router";
import { Order } from "../Types";
import OrderSearch from "./OrderSearch";
import StyledOrder from "./StyledOrder";
import Table from "./Table";

const MyOrderRecord = () => {
  const { search } = useLocation();
  const [order_state, setOrder_state] = React.useState(search.split("=")[1]);
  const [orders, setOrders] = React.useState<Order[]>([
    { name: "상품정보1", price: 20000, count: 2, orderNum: 112, orderDate: "20230119", orderState: "입금/결제" },
    { name: "상품정보2", price: 10000, count: 3, orderNum: 66, orderDate: "20230104", orderState: "환불" },
    { name: "상품정보2", price: 10000, count: 3, orderNum: 66, orderDate: "20220904", orderState: "환불완료" },
  ]);
  React.useEffect(() => {
    if (order_state) {
      (document.querySelector(`#orderState${order_state}`) as HTMLAnchorElement).style.fontWeight = "bold";
      (document.querySelector(`#orderState${order_state}`) as HTMLAnchorElement).style.color = "rgb(0,0,0)";
    }
  }, [order_state]);
  return (
    <StyledOrder>
      <div>
        <div id="orderTitle">주문 내역 조회</div>
      </div>
      <div className="displayFlexBetween">
        <div>
          <a id="orderState0" className="orderSort" href="./myorder?order_state=0">
            입금/결제
          </a>
          <a id="orderState1" className="orderSort" href="./myorder?order_state=1">
            배송중/픽업대기
          </a>
          <a id="orderState2" className="orderSort" href="./myorder?order_state=2">
            배송완료/픽업완료
          </a>
          <a id="orderState3" className="orderSort" href="./myorder?order_state=3">
            구매확정
          </a>
          <a id="orderState4" className="orderSort" href="./myorder?order_state=4">
            교환
          </a>
          <a id="orderState5" className="orderSort" href="./myorder?order_state=5">
            교환완료
          </a>
          <a id="orderState6" className="orderSort" href="./myorder?order_state=6">
            환불
          </a>
          <a id="orderState7" className="orderSort" href="./myorder?order_state=7">
            환불완료
          </a>
        </div>
        <div className="alignRight">
          <a className="orderAll" href="#">
            전체보기
          </a>
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
