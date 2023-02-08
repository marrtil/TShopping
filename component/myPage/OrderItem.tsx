import * as React from "react";
import { useNavigate } from "react-router";
import { Order, Review } from "../Types";
import { OrderSortList } from "./MyOrderRecord";
import StyledTr from "./StyledTr";

// interface Props {
//   item: string[];
// }

const OrderItem: React.FC<Order> = ({ productId, productName, count, orderId, orderDate, orderState }) => {
  const navigate = useNavigate();
  const navigateToPoduct = () => {
    // navigate(`/ProductForm/1`);
    navigate(`/ProductForm/${productId}`);
  };
  return (
    <StyledTr onClick={() => navigateToPoduct()}>
      <td>{productName}</td>
      <td>{count}</td>
      <td>{orderDate.split("T")[0]}</td>
      <td>{orderId}</td>
      <td>{OrderSortList[orderState]}</td>
    </StyledTr>
  );
};

export default OrderItem;
