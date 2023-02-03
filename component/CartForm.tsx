import * as React from "react";
import StyledCartForm from "./styles/StyledCartForm";
import { Link, useNavigate } from "react-router-dom";
import moomin2 from "../upload/product1.jpeg";
import moomin3 from "../upload/product2.jpeg";

import { useState, useMemo } from "react";
import { cart, cartOut } from "./orderApi";
import { CartData } from "./Types";

interface CartProduct extends CartData {
  id: number;
  name: string;
  price: number;
  sale: number;
  image: string;
}

export const salePrice = ({ price, sale }: { price: number; sale: number }) => {
  return (price * (100 - sale)) / 100;
};

const CartForm = () => {
  const session = window.sessionStorage;
  const navi = useNavigate();
  const [cartInfo, setCartInfo] = useState<CartProduct[]>();

  const cartLoad = async () => {
    if (session.getItem("userInfo")) setCartInfo(await cart(JSON.parse(session.getItem("userInfo")!).userId));
    else {
      alert("로그인이 필요한 서비스입니다.");
      navi(-1);
    }
  };
  React.useEffect(() => {
    cartLoad();
  }, []);
  const sumPrice = useMemo(() => {
    var sum = 0;
    if (cartInfo) cartInfo.forEach((value) => (sum += value.count * salePrice(value)));
    return sum;
  }, [cartInfo]);
  const btnPM = (e: React.MouseEvent<HTMLButtonElement>) => {
    const a = e.currentTarget;
    //var count = document.getElementById(a.value) as HTMLInputElement;
    var modInfo = [...cartInfo!];

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

    cartOut(index);
    cartLoad();
  };

  return (
    <StyledCartForm>
      <h1 id="cartTitle">장바구니</h1>
      <hr color="beige" />
      <div id="cartForm">
        <div id="cartTable">
          <table>
            <thead>
              <tr>
                <th colSpan={2} id="productInfo">
                  상품정보
                </th>
                <th>가격</th>
                <th>수량</th>
                <th>합계</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {cartInfo &&
                cartInfo.map((info) => {
                  return (
                    <>
                      <tr className="cartList">
                        <td className="cartImage" rowSpan={2}>
                          {info.image}
                          {/* <Link to={`/productForm/${info.productId}`}>
                            <img src={info.image} alt={info.name} width="200" />
                          </Link> */}
                        </td>
                        <td className="cartName">
                          <div className="productName">{info.name}</div>

                          <div className="cartExplain">
                            {info.color}&nbsp;&nbsp;사이즈:{info.size}
                          </div>
                        </td>
                        <td className="cartPrice">
                          <div>
                            {" "}
                            {info.sale > 0 ? (
                              <>
                                <del>{"₩" + info.price.toLocaleString("ko-KR")}</del>
                                &nbsp;
                                {"₩" + salePrice(info).toLocaleString("ko-KR")}
                              </>
                            ) : (
                              info.price.toLocaleString("ko-KR")
                            )}
                          </div>
                        </td>
                        <td className="cartCount">
                          {" "}
                          <button onClick={btnPM} value={info.id} className="btnPM">
                            -
                          </button>
                          <input type="text" className="countInput" value={info.count} />
                          <button onClick={btnPM} value={info.id} className="btnPM">
                            +
                          </button>
                        </td>
                        <td width="150" className="total">
                          {"￦" + (info.count * salePrice(info)).toLocaleString("ko-KR")}
                        </td>
                        <td width="100">
                          <label id={String(info.id)} onClick={delInfo} className="deleter">
                            x
                          </label>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div id="bill">
          <div className="billMenu">
            <div className="price">총 주문금액</div>
            <div className="space"></div>
            <div className="price2">{"￦" + sumPrice.toLocaleString("ko-KR")}</div>
          </div>
          <div className="billMenu">
            <div className="price">배송비</div>
            <div className="space"></div>
            <div className="price2">{sumPrice > 30000 ? "￦" + 0 : "￦" + 3000}</div>
            <hr className="bill-border" />
          </div>
          <div className="billMenu">
            <div className="price">합계</div>
            <div className="space"></div>
            <div className="price2">
              {sumPrice > 30000
                ? "￦" + sumPrice.toLocaleString("ko-KR")
                : "￦" + (sumPrice + 3000).toLocaleString("ko-KR")}
            </div>
          </div>
          <hr className="bill-border" />
          <button id="payButton">결제하기</button>
        </div>
      </div>
    </StyledCartForm>
  );
};

export default CartForm;
