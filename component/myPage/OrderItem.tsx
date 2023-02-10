import * as React from "react";
import { useLocation, useNavigate } from "react-router";
import { Order, Review } from "../Types";
import { OrderSortList } from "./MyOrderRecord";
import StyledTr from "./StyledTr";

// interface Props {
//   item: string[];
// }

const OrderItem: React.FC<Order> = (arr) => {
  const navigate = useNavigate();
  const session = window.sessionStorage;
  const { pathname } = useLocation();
  return (
    <>
      {Object.values(arr["detail"]).map((item) => {
        return (
          <>
            <StyledTr
              onClick={() => {
                if (pathname.split("/")[2] === "myreview") {
                  session.setItem("reviewInfo", JSON.stringify(item));
                  navigate(`./${arr.id}_${item.productId}`);
                } else navigate(`/ProductForm/${item.productId}`);
              }}
              id={`orderTable${arr.id}_${item.productId}`}
            >
              <td>{item.productName}</td>
              <td>{item.count}</td>
              <td>{arr.orderDate.split("T")[0]}</td>
              <td>{arr.id}</td>
              <td>{OrderSortList[arr.orderState - 1]}</td>
            </StyledTr>
          </>
        );
      })}
    </>
  );
};

export default OrderItem;
