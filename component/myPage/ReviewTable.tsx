import * as React from "react";
import { Order, Review } from "../Types";
import ReviewItem from "./ReviewItem";
import StyledTable from "./StyledTable";

const ReviewTable: React.FC<Review[]> = (arr) => {
  console.log(arr);
  return (
    <StyledTable>
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
          return <ReviewItem key={item.orderId} {...item} />;
        })}
      </tbody>
      <tfoot></tfoot>
    </StyledTable>
  );
};

export default ReviewTable;
