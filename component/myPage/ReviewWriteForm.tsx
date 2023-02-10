import * as React from "react";
import { useParams } from "react-router";
import { reviewWrite } from "../orderApi";
import { detail, INITIAL_REVIEW, Review } from "../Types";
import RatingInput from "./RatingInput";

const ReviewWriteForm = (orders: any) => {
  const { productInfo } = useParams();
  const orderId = productInfo!.split("_")[0];
  const productId = productInfo!.split("_")[1];
  const [review, setReview] = React.useState<Review>(INITIAL_REVIEW);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const ratingChange = (name: string, value: number) => {
    setReview((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    //리뷰 작성
    if (review.rating == 0) {
      alert("별점을 입력해주세요");
      return;
    }
    let myOrder: any;
    Object.values(orders).map((item: any) => {
      if (item["id"] == orderId) {
        myOrder = item;
        return;
      }
    });
    if (myOrder) {
      Object.values(myOrder["detail"]).map((item: any) => {
        if (item["productId"] == productId) {
          myOrder = item;
          return;
        }
      });
    }
    reviewWrite({ ...review, ...myOrder, ...{ orderId: orderId } });
  };

  return (
    <div>
      <textarea name="content" onChange={handleChange} />
      <RatingInput name="rating" value={review.rating} onChange={ratingChange} />
      <button onClick={handleSubmit}>작성</button>
    </div>
  );
};

export default ReviewWriteForm;
