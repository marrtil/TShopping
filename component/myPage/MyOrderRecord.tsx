import * as React from "react";
import { useLocation } from "react-router";
import { orderComplete, orderLoad } from "../orderApi";
import { INIITIAL_ORDERLIST, Order, orderState } from "../Types";
import StyledOrder from "./StyledOrder";
import Table from "./Table";

export const OrderSortList: orderState[] = [
  "입금/결제",
  "배송중/픽업대기",
  "배송완료/픽업완료",
  "구매확정",
  "교환",
  "교환완료",
  "환불",
  "환불완료",
];

const MyOrderRecord = () => {
  const { search } = useLocation();
  const session = window.sessionStorage;
  const path = 0;
  if (search) search.split("order_state=")[1].slice(0, 1);
  const [order_state, setOrder_state] = React.useState(path);
  const [orders, setOrders] = React.useState<Order[]>([INIITIAL_ORDERLIST]);

  const handleLoad = async () => {
    // await orderComplete("2");
    const orderList: Order[] = await orderLoad(JSON.parse(session.getItem("userInfo")!).userId);
    setOrders(orderList);
  };

  React.useEffect(() => {
    handleLoad();
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
          {OrderSortList.map((item, index) => {
            return (
              <a key={index} id={`orderState${index}`} className="orderSort" href={`?order_state=${index}`}>
                {item}
              </a>
            );
          })}
        </div>
        <div className="alignRight">
          <a className="orderAll" href="./">
            전체보기
          </a>
        </div>
      </div>
      <hr></hr>

      <Table {...orders} />
      <hr></hr>
    </StyledOrder>
  );
};

export default MyOrderRecord;
