import * as React from "react";
import { useParams } from "react-router";
import { INITIAL_REVIEW, Review } from "../Types";
import RatingInput from "./RatingInput";
import StyledReviewWrite from "./StyledReviewWriteForm";

const ReviewWriteForm = () => {
  const { productId } = useParams();
  const [review, setReview] = React.useState<Review>(INITIAL_REVIEW);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const ratingChange = (name: string, value: number) => {
    setReview((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    //리뷰 작성
    console.log(review);
  };

  return (
    <StyledReviewWrite>
      <textarea name="content" onChange={handleChange} />
      <RatingInput name="rating" value={review.rating} onChange={ratingChange} />
      <button onClick={handleSubmit}>작성</button>
    </StyledReviewWrite>
  );
};

export default ReviewWriteForm;
