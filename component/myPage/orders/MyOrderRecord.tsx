import * as React from "react";
import { useLocation } from "react-router";
import { orderComplete, orderLoad } from "../../orderApi";
import { INIITIAL_ORDERLIST, Order, orderState } from "../../Types";
import OrderSearch from "./OrderSearch";
import StyledOrder from "../styles/StyledOrder";
import Table from "../Table";

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
  const session = window.sessionStorage;
  const [order_state, setOrder_state] = React.useState<number>(8);
  const [orders, setOrders] = React.useState<Order[]>([INIITIAL_ORDERLIST]);
  const [date, setDate] = React.useState<number>(0);

  const onClick = (value: number): void => {
    setDate(value);
  };
  const handleLoad = async () => {
    const orderList: Order[] = await orderLoad(JSON.parse(session.getItem("userInfo")!).userId, order_state + 1, date);
    setOrders(orderList);
  };

  const styleClear = () => {
    for (let i = 0; i < 8; i++) {
      (document.querySelector(`#orderState${i}`) as HTMLAnchorElement).style.fontWeight = "normal";
      (document.querySelector(`#orderState${i}`) as HTMLAnchorElement).style.color = "rgb(80, 80, 80)";
    }
  };

  React.useEffect(() => {
    styleClear();
    handleLoad();
    if (order_state < 8) {
      (document.querySelector(`#orderState${order_state}`) as HTMLAnchorElement).style.fontWeight = "bold";
      (document.querySelector(`#orderState${order_state}`) as HTMLAnchorElement).style.color = "rgb(0,0,0)";
    }
  }, [order_state, date]);
  return (
    <StyledOrder>
      <div>
        <div id="orderTitle">주문 내역 조회</div>
      </div>
      <div className="displayFlexBetween">
        <div>
          {OrderSortList.map((item, index) => {
            return (
              <a
                key={index}
                id={`orderState${index}`}
                className="orderSort"
                onClick={(e) => {
                  e.preventDefault();
                  setOrder_state(index);
                }}
              >
                {item}
              </a>
            );
          })}
        </div>
        <div className="alignRight">
          <a
            className="orderAll"
            onClick={(e) => {
              e.preventDefault();
              setOrder_state(8);
              setDate(0);
            }}
          >
            전체보기
          </a>
        </div>
      </div>
      <hr></hr>
      <OrderSearch onClick={onClick} />
      <Table arr={orders} />
      <hr></hr>
    </StyledOrder>
  );
};

export default MyOrderRecord;
