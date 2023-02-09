import * as React from "react";
import { Order, Review } from "../Types";
import OrderItem from "./OrderItem";

const Table: React.FC<Order[]> = (arr) => {
  return (
    <>
      <hr></hr>
      <table>
        <thead>
          <tr>
            <td>상품정보</td>
            <td>수량</td>
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
            return <OrderItem key={item.id} {...item} />;
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
};

export default Table;
