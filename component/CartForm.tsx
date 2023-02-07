import * as React from "react";
import StyledCartForm from "./styles/StyledCartForm";
import { useNavigate } from "react-router-dom";

import { useState, useMemo } from "react";
import { cart, order } from "./orderApi";
import { CartProduct, INITIAL_CARTPRODUCT } from "./Types";
import { Link } from "react-router-dom";
import CartTable from "./CartTable";

export const salePrice = ({ price, sale }: { price: number; sale: number }) => {
  return (price * (100 - sale)) / 100;
};

const CartForm = ({ handle }: any) => {
  const session = window.sessionStorage;
  const navi = useNavigate();
  const [cartInfo, setCartInfo] = useState<CartProduct[]>([INITIAL_CARTPRODUCT]);

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

  const handlePay = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 변경된 장바구니를 order테이블에 저장.
    // 장바구니를 비우는건 결제가 끝난 뒤에 하자.
    // 아닌가? 결제를 취소하면 order테이블에 넣은 의미가 없다.
    // 장바구니는 파라미터로 넘긴다.
    if (cartInfo.length === 0) {
      e.preventDefault();
      alert("장바구니에 상품이 없습니다.");
      return;
    }
    const check = confirm(`이대로 결제하시겠습니까? \n총액 : ${sumPrice}원`);
    if (!(check && cartInfo)) {
      e.preventDefault();

      // console.log(cartInfo);
      // order(cartInfo);

      // navi("../payment");
    }
    //  else return;
  };

  return (
    <StyledCartForm>
      {handle ? <h1 id="cartTitle">물건목록</h1> : <h1 id="cartTitle">장바구니</h1>}
      <hr color="beige" />
      <div id="cartForm">
        <CartTable cartInfo={cartInfo} handleLoad={cartLoad} handleChange={setCartInfo} />

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
          {handle ? (
            <></>
          ) : (
            <Link onClick={handlePay} to="../payment" type="button" state={cartInfo}>
              <button id="payButton">결제하기</button>
            </Link>
          )}
        </div>
      </div>
    </StyledCartForm>
  );
};

export default CartForm;
