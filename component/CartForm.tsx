import * as React from "react";
import StyledBody from "./styles/StyledBody";
import product1 from "../upload/product1.jpeg";

const CartForm = () => {
  const cartInfo = [
    {
      //나중에 서버에서 받아올 데이터
      id: 1, //상품번호로 하고싶은데 npx는 기본적으로 id로 들어가니까?
      name: "무민",
      src: product1,
      price: 10000,
      count: 1,
    },
  ];
  return (
    <StyledBody>
      <h1 id="cartTitle">장바구니</h1>
      <hr color="beige" />
      <table>
        <thead>
          <tr>
            <th>상품</th>
            <th>가격</th>
            <th>수량</th>
            <th>합계</th>
            <th>배송비</th>
          </tr>
        </thead>

        <tbody>
          {cartInfo.map((info) => {
            return (
              <tr className="cartList">
                <td className="cartImage">
                  <img src={info.src} alt={info.name} width="200" />
                  {info.name}
                </td>
                <td className="cartPrice">{info.price}</td>
                <td className="cartCount">
                  {" "}
                  <button>-</button>
                  <input type="text" value={info.count} />
                  <button>+</button>
                </td>
                <td>{info.price * info.count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </StyledBody>
  );
};

export default CartForm;
