import * as React from "react";
import { useParams } from "react-router";
import { Order, Review } from "../Types";
import ReviewTable from "./ReviewTable";
import StyledOrder from "./StyledOrder";
import Table from "./Table";
const MyReview = () => {
  type reviewState = "write-review" | "review-history";
  const { state } = useParams();
  const [reviewState, setReviewState] = React.useState<reviewState>(state as reviewState);
  const [orders, setOrders] = React.useState<Order[]>([
    { name: "상품정보1", price: 20000, count: 2, orderNum: 112, orderDate: "20230119", orderState: "입금/결제" },
    { name: "상품정보2", price: 10000, count: 3, orderNum: 66, orderDate: "20230104", orderState: "환불완료" },
  ]);
  const [reviews, setReviews] = React.useState<Review[]>([
    {
      name: "상품정보1",
      userId: "marrtil",
      orderNum: 1,
      rating: 3,
      content: "옷이 너무 꽉 껴요",
      reviewDate: "20230105",
    },
    {
      name: "상품정보2",
      userId: "marrtil",
      orderNum: 2,
      rating: 5,
      content: "보던 그대로네요 너무 좋아요",
      reviewDate: "20230107",
    },
  ]);
  React.useEffect(() => {
    if (reviewState) (document.querySelector(`#${reviewState}`) as HTMLAnchorElement).style.fontWeight = "bold";
  }, [reviewState]);

  return (
    <StyledOrder>
      <div>
        <div id="orderTitle">구매후기</div>
        <div>
          <a id="write-review" href="/myPage/myreview/write-review?sort=">
            후기 작성
          </a>{" "}
          /{" "}
          <a id="review-history" href="/myPage/myreview/review-history?sort=">
            후기 내역
          </a>
        </div>
      </div>
      <hr></hr>
      {reviewState === "write-review" ? <Table {...orders} /> : <ReviewTable {...reviews} />}
      <hr></hr>
    </StyledOrder>
  );
};

export default MyReview;
