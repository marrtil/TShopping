import * as React from "react";
import { Route, Routes, useParams } from "react-router";
import { orderLoad, reviewLoad } from "../orderApi";
import { INIITIAL_ORDERLIST, INITIAL_REVIEW, Order, Review } from "../Types";
import ReviewTable from "./ReviewTable";
import StyledOrder from "./StyledOrder";
import Table from "./Table";
type reviewState = "write-review" | "review-history";
interface ReviewStateAnchor {
  id: reviewState;
  ref: HTMLAnchorElement;
}

const MyReview = () => {
  const session = window.sessionStorage;
  const [reviewState, setReviewState] = React.useState<reviewState>("review-history");
  const selectedRef = React.useRef<ReviewStateAnchor[]>([]);

  const [orders, setOrders] = React.useState<Order[]>([INIITIAL_ORDERLIST]);
  const [reviews, setReviews] = React.useState<Review[]>([INITIAL_REVIEW]);

  const handleLoad = async () => {
    const orderList: Order[] = await orderLoad(JSON.parse(session.getItem("userInfo")!).userId, 9, 0);
    setOrders(orderList);
    const reviewList = await reviewLoad(JSON.parse(session.getItem("userInfo")!).userId);
    setReviews(reviewList);
  };

  React.useEffect(() => {
    handleLoad();
    console.log(selectedRef.current);
    if (selectedRef.current) {
      selectedRef.current.forEach((target: ReviewStateAnchor) => {
        if (target.id === reviewState) target.ref.style.fontWeight = "bold";
        else target.ref.style.fontWeight = "normal";
      });
    }
  }, [reviewState]);

  const refPush = (target: ReviewStateAnchor) => {
    if (target.ref === null || selectedRef.current.find((x) => x.id === target.id)) return;
    else selectedRef.current.push({ id: target.id, ref: target.ref });
  };

  return (
    <StyledOrder>
      <div>
        <div id="orderTitle">구매후기</div>
        <div>
          <a
            ref={(ref: HTMLAnchorElement) => refPush({ id: "write-review", ref })}
            onClick={() => setReviewState("write-review")}
          >
            후기 작성
          </a>{" "}
          /{" "}
          <a
            ref={(ref: HTMLAnchorElement) => refPush({ id: "review-history", ref })}
            onClick={() => setReviewState("review-history")}
          >
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
