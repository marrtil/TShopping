import * as React from "react";
import { useNavigate } from "react-router";
import { Order, Review } from "../Types";
import StyledTr from "./StyledTr";

// interface Props {
//   item: string[];
// }

const ReviewItem: React.FC<Review> = ({ name, rating, content, reviewDate }) => {
  const navigate = useNavigate();
  const navigateToPoduct = () => {
    navigate(`/ProductForm/1`);
    // navigate(`/ProductForm/${orderNum}`);
  };
  return (
    <StyledTr onClick={() => navigateToPoduct()}>
      <td>{name}</td>
      <td>{rating}</td>
      <td>{content}</td>
      <td>{reviewDate}</td>
    </StyledTr>
  );
};

export default ReviewItem;
