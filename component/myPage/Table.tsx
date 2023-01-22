import * as React from "react";
import { Order, Review } from "../Types";
import OrderItem from "./OrderItem";

const Table: React.FC<Order[]> = (arr) => {
  const nowDate = new Date();
  const nowMonth = nowDate.getMonth() + 1;
  const nowYear = nowDate.getFullYear() - 2000;
  const sort = 1;

  console.log(arr);
  return (
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
          console.log(nowMonth + " |" + sort + " | " + Number(item.orderDate.slice(4, 6)));
          const diff = nowMonth - Number(item.orderDate.slice(4, 6));

          if (diff <= 1) return <OrderItem key={item.orderNum} {...item} />;
        })}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
};

export default Table;
