import * as React from "react";
import { Order, Review } from "../Types";
import OrderItem from "./OrderItem";
import OrderSearch from "./OrderSearch";

const Table: React.FC<Order[]> = (arr) => {
  const [sort, setSort] = React.useState<number>(-1);
  const nowDate = new Date();
  const nowDay = nowDate.getDate();
  const nowMonth = nowDate.getMonth() + 1;
  const onClick = (value: number): void => {
    setSort(value);
  };
  return (
    <>
      <OrderSearch onClick={onClick} />
      <hr></hr>
      <table>
        <thead>
          <tr>
            <td>상품정보</td>
            <td>가격(수량)</td>
            <td>주문일자</td>
            <td>주문번호</td>
            <td>주문상태</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={5}>
              <hr></hr>
            </td>
          </tr>
          {Object.values(arr).map((item) => {
            if (sort < 0) {
              return <OrderItem key={item.orderNum} {...item} />;
            } else if (sort === 0) {
              const diff = (nowDay - Number(item.orderDate.slice(6, 8)) + 30) % 30;
              if (diff <= 7) return <OrderItem key={item.orderNum} {...item} />;
            } else {
              const diff = (nowMonth - Number(item.orderDate.slice(4, 6)) + 12) % 12;
              if (diff <= sort) return <OrderItem key={item.orderNum} {...item} />;
            }
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
};

export default Table;
