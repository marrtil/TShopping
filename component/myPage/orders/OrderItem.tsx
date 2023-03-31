import * as React from "react";
import { useLocation, useNavigate } from "react-router";
import { Order, Review } from "../../Types";
import { OrderSortList } from "./MyOrderRecord";
import StyledTr from "../styles/StyledTr";

const OrderItem = ({ arr, onClick }: { arr: Order; onClick: (o: number, p: number) => void }) => {
  const navigate = useNavigate();
  const session = window.sessionStorage;
  const { pathname } = useLocation();
  return (
    <>
      {arr.detail.map((item) => {
        return (
          <>
            <StyledTr
              onClick={() => {
                onClick(Number(arr.id), Number(item.productId));
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
