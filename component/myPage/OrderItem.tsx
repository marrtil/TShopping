import * as React from "react";
import { useNavigate } from "react-router";
import { Order, Review } from "../Types";
import StyledTr from "./StyledTr";

// interface Props {
//   item: string[];
// }

const OrderItem: React.FC<Order> = ({ name, price, count, orderNum, orderDate, orderState }) => {
  const navigate = useNavigate();
  const navigateToPoduct = () => {
    navigate(`/ProductForm/1`);
    // navigate(`/ProductForm/${orderNum}`);
  };
  return (
    <StyledTr onClick={() => navigateToPoduct()}>
      <td>{name}</td>
      <td>
        {price} * {count}
      </td>
      <td>{orderDate}</td>
      <td>{orderNum}</td>
      <td>{orderState}</td>
    </StyledTr>
  );
};

export default OrderItem;