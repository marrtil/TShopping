import * as React from "react";
import { Route, Routes, useParams } from "react-router";
import { orderLoad } from "../orderApi";
import { INIITIAL_ORDERLIST, Order, Review } from "../Types";
import ReviewTable from "./ReviewTable";
import ReviewWriteForm from "./ReviewWriteForm";
import StyledOrder from "./StyledOrder";
import Table from "./Table";
const MyReview = () => {
  type reviewState = "write-review" | "review-history";
  const { state } = useParams();
  const session = window.sessionStorage;
  const [reviewState, setReviewState] = React.useState<reviewState>(state as reviewState);
  const [orders, setOrders] = React.useState<Order[]>([INIITIAL_ORDERLIST]);
  const [reviews, setReviews] = React.useState<Review[]>([
    {
      name: "상품정보1",
      userId: "marrtil",
      orderId: 1,
      rating: 3,
      content: "옷이 너무 꽉 껴요",
      reviewDate: "20230105",
    },
    {
      name: "상품정보2",
      userId: "marrtil",
      orderId: 2,
      rating: 5,
      content: "보던 그대로네요 너무 좋아요",
      reviewDate: "20230107",
    },
  ]);

  const handleLoad = async () => {
    const orderList: Order[] = await orderLoad(JSON.parse(session.getItem("userInfo")!).userId, 9, 0);
    setOrders(orderList);
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
      {reviewState === "write-review" ? <Table {...orders} /> : <ReviewTable {...reviews} />}
      <hr></hr>
      <Routes>
        <Route path="/:productId" element={<ReviewWriteForm />} />
      </Routes>
    </StyledOrder>
  );
};

export default MyReview;
