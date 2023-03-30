import * as React from "react";
import { Route, Routes, useParams } from "react-router";
import { orderLoad, reviewLoad } from "../orderApi";
import { INIITIAL_ORDERLIST, INITIAL_REVIEW, Order, Review } from "../Types";
import ReviewTable from "./ReviewTable";
import StyledOrder from "./StyledOrder";
import Table from "./Table";
const MyReview = () => {
  type reviewState = "write-review" | "review-history";
  const { state } = useParams();
  const session = window.sessionStorage;
  const [reviewState, setReviewState] = React.useState<reviewState>((state as reviewState) || "review-history");
  const [orders, setOrders] = React.useState<Order[]>([INIITIAL_ORDERLIST]);
  const [reviews, setReviews] = React.useState<Review[]>([INITIAL_REVIEW]);

  const handleLoad = async () => {
    const orderList: Order[] = await orderLoad(JSON.parse(session.getItem("userInfo")!).userId, 9, 0);
    setOrders(orderList);
    const reviewList = await reviewLoad(JSON.parse(session.getItem("userInfo")!).userId);
    setReviews(reviewList);
    setReviewState(state as reviewState);
  };

  React.useEffect(() => {
    handleLoad();
    if (reviewState) (document.querySelector(`#${reviewState}`) as HTMLAnchorElement).style.fontWeight = "bold";
  }, [reviewState]);
  return (
    <StyledOrder>
      <div>
        <div id="orderTitle">구매후기</div>
        <div>
          <a id="write-review" href="/myPage/myreview/write-review">
            후기 작성
          </a>{" "}
          /{" "}
          <a id="review-history" href="/myPage/myreview/review-history">
            후기 내역
          </a>
        </div>
      </div>
      <hr></hr>
      {reviewState === "write-review" ? <Table arr={orders} /> : <ReviewTable {...reviews} />}
      <hr></hr>
    </StyledOrder>
  );
};

export default MyReview;
