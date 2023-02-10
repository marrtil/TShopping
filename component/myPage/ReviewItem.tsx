import * as React from "react";
import { useNavigate } from "react-router";
import { Order, Review } from "../Types";
import Rating from "./Rating";
import StyledTr from "./StyledTr";

// interface Props {
//   item: string[];
// }

const ReviewItem: React.FC<Review> = ({ id, name, productId, size, color, rating, content, createdAt }: any) => {
  const navigate = useNavigate();

  const handleDelete = () => {};
  return (
    <StyledTr onClick={() => navigate(`/ProductForm/${productId}`)}>
      <td>
        {name} - {size}-{color}
      </td>
      <td>
        <Rating value={rating} />
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
