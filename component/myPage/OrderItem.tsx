import * as React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Order } from "../Types";

// interface Props {
//   item: string[];
// }

const OrderItem: React.FC<Order> = ({ name, price, count, orderNum, orderDate, orderState }) => {
  const navigate = useNavigate();
  const navigateToPoduct = () => {
    navigate(`/ProductForm/1`);
    // navigate(`/ProductForm/${orderNum}`);
  };
  const StyledTr = styled.tr`
    height: 30px;
    :hover {
      cursor: pointer;
      background-color: rgb(220, 220, 220);
    }
  `;
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
