import * as React from "react";
import { Route, Routes } from "react-router";
import { Order, Review } from "../Types";
import OrderItem from "./OrderItem";
import ReviewWriteForm from "./ReviewWriteForm";
import StyledTable from "./StyledTable";

const Table = ({ arr }: { arr: Order[] }) => {
  const [selectedItem, setSelectedItem] = React.useState<number[]>([1, 1]);
  const itemChange = (orderId: number, productId: number) => {
    setSelectedItem([orderId, productId]);
  };

  return (
    <>
      <hr></hr>
      <StyledTable>
        <thead>
          <tr>
            <td className="infoTd">상품정보</td>
            <td className="countTd">수량</td>
            <td className="dateTd">주문일자</td>
            <td className="idTd">주문번호</td>
            <td className="stateTd">주문상태</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={5}>
              <hr></hr>
            </td>
          </tr>
          {Object.values(arr).map((item) => {
            return <OrderItem key={item.id} arr={item} onClick={itemChange} />;
          })}
          <Routes>
            <Route
              path="/:productInfo"
              element={
                <ReviewWriteForm order={arr.filter((x) => x.id === selectedItem[0])[0]} productId={selectedItem[1]} />
              }
            />
          </Routes>
        </tbody>
        <tfoot></tfoot>
      </StyledTable>
    </>
  );
};

export default Table;
