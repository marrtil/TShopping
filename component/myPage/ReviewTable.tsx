import * as React from "react";
import { Order, Review } from "../Types";
import OrderItem from "./OrderItem";
import ReviewItem from "./ReviewItem";

const ReviewTable: React.FC<Review[]> = (arr) => {
  console.log(arr);
  return (
    <table>
      <thead>
        <tr>
          <td>상품정보</td>
          <td>별점</td>
          <td>내용</td>
          <td>작성일</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={5}>
            <hr></hr>
          </td>
        </tr>
        {Object.values(arr).map((item) => {
          return <ReviewItem key={item.orderNum} {...item} />;
        })}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
};

export default ReviewTable;
