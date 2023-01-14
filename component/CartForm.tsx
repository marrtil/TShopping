import * as React from "react";
import StyledBody from "./styles/StyledBody";
import product1 from "../upload/product1.jpeg";
import product2 from "../upload/product2.jpeg";

import { useState, useMemo } from "react";

const CartForm = () => {
  const [cartInfo, setCartInfo] = useState([
    {
      //나중에 서버에서 받아올 데이터
      id: 1, //상품번호로 하고싶은데 npx는 기본적으로 id로 들어가니까?
      name: "무민",
      src: product1,
      price: 10000,
      count: 1,
    },
    {
      //나중에 서버에서 받아올 데이터
      id: 2, //상품번호로 하고싶은데 npx는 기본적으로 id로 들어가니까?
      name: "무민2",
      src: product2,
      price: 15000,
      count: 1,
    },
  ]);
  const sumPrice = useMemo(() => {
    var sum = 0;
    cartInfo.forEach((value) => (sum += value.price * value.count));
    return sum;
  }, [cartInfo]);

  const btnPM = (e: React.MouseEvent<HTMLButtonElement>) => {
    const a = e.currentTarget;
    //var count = document.getElementById(a.value) as HTMLInputElement;
    var modInfo = [...cartInfo];

    if (a.innerHTML == "+") {
      {
        modInfo[Number(a.value)].count += 1;
        setCartInfo(modInfo);
      }
    } else if (a.innerHTML == "-") {
      if (modInfo[Number(a.value)].count == 1) return;
      modInfo[Number(a.value)].count -= 1;
      setCartInfo(modInfo);
    }
  };

  const delInfo = (e: React.MouseEvent<HTMLLabelElement>) => {
    var index = e.currentTarget.id;
    var delinfo = [...cartInfo];
    delinfo.splice(Number(index), 1);
    setCartInfo(delinfo);
  };
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
            <th></th>
          </tr>
        </thead>

        <tbody>
          {cartInfo.map((info, index) => {
            return (
              <tr className="cartList">
                <td className="cartImage">
                  <img src={info.src} alt={info.name} width="200" />
                  {info.name}
                </td>
                <td className="cartPrice">{info.price}</td>
                <td className="cartCount">
                  {" "}
                  <button id={`minus${info.id}`} onClick={btnPM} value={index}>
                    -
                  </button>
                  <input
                    type="text"
                    id={`count${info.count}`}
                    value={info.count}
                  />
                  <button id={`plus${info.id}`} onClick={btnPM} value={index}>
                    +
                  </button>
                </td>
                <td width="200" className="center">
                  {info.count * info.price}
                </td>
                <td width="100">
                  <label
                    id={String(index)}
                    onClick={delInfo}
                    className="deleter"
                  >
                    x
                  </label>
                </td>
              </tr>
            );
          })}
          <td width="200" className="center">
            합계
          </td>
          <td rowSpan={3} className="center" width="400">
            {sumPrice}
          </td>
          <td width="200" className="center">
            배송비
          </td>
          <td rowSpan={3} className="center" width="400">
            {sumPrice > 30000 ? 0 : 3000}
          </td>
        </tbody>
      </table>
    </StyledBody>
  );
};

export default CartForm;
