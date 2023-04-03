import * as React from "react";
import { useNavigate } from "react-router";
import { Order, Review } from "../../Types";
import RatingSimple from "../rating/RatingSimple";
import StyledTr from "../styles/StyledTr";

const ReviewItem: React.FC<Review> = ({ name, productId, size, color, rating, content, createdAt }) => {
  const navigate = useNavigate();

  const handleDelete = () => {};
  return (
    <StyledTr onClick={() => navigate(`/ProductForm/${productId}`)}>
      <td>
        {name} - {size}-{color}
      </td>
      <td>
        <RatingSimple value={rating} />
      </td>
      <td>{content}</td>
      <td>{createdAt.split("T")[0]}</td>
      <td>
        <button onClick={handleDelete}>삭제</button>
      </td>
    </StyledTr>
  );
};

export default ReviewItem;
