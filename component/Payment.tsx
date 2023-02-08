import * as React from "react";
import { useLocation, useNavigate } from "react-router";
import AddressInputForm from "./AddressInputForm";
import CartForm, { salePrice } from "./CartForm";
import CartTable from "./CartTable";
import { addressLoad, cart, payAddressIn, payCartOut, payOrderIn } from "./orderApi";
import PaySelect from "./PaySelect";
import { CartProduct, DelveriyInfo, INITIAL_DELEVERIYINFO } from "./Types";

export const isEmpty = (object: object) => !Object.values(object).every((x) => x !== null && x !== "");

const Payment = () => {
  const props = useLocation().state;
  const session = window.sessionStorage;
  const navi = useNavigate();
  const [addressSel, setAddressSel] = React.useState<String>();
  const [userAddress, setUserAddress] = React.useState<DelveriyInfo[]>([INITIAL_DELEVERIYINFO]);
  const [cartInfo, setCartInfo] = React.useState<CartProduct[]>(props);
  const [deliveryInfo, setDeliveryInfo] = React.useState<DelveriyInfo>(INITIAL_DELEVERIYINFO);

  const sumPrice = React.useMemo(() => {
    var sum = 0;
    if (cartInfo) cartInfo.forEach((value) => (sum += value.count * salePrice(value)));
    return sum;
  }, [cartInfo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePay = async () => {
    if (isEmpty(cartInfo && deliveryInfo)) {
      alert("빈 항목이 있습니다!");
      return;
    }
    const con = confirm(`결제를 진행하시겠습니까? \n총액 : ${sumPrice}원`);
    if (con) {
      const callbackArr = [payCartOut(cartInfo), payOrderIn(cartInfo, deliveryInfo), payAddressIn(deliveryInfo)];
      for (let call of callbackArr) {
        await call;
      }
      alert("결제가 완료되었습니다.");
      navi("../");
    } else {
    }
  };

  const payLoad = async () => {
    // 주소 가져오기
    const myAddress: DelveriyInfo[] = await addressLoad(JSON.parse(session.getItem("userInfo")!).userId);
    if (myAddress.length > 0) {
      setUserAddress(myAddress);
      setAddressSel("old");
    }
  };
  React.useEffect(() => {
    // 로그아웃했을때 메인으로 돌아가기
    if (!session.getItem("userInfo")) {
      navi("../");
      return;
    }
    console.log("load");
    if (userAddress[0].id === "0") payLoad();
    else if (addressSel === "old") {
      console.log("else");
      (document.getElementById("addressSelect0") as HTMLInputElement).checked = true;
      setDeliveryInfo({ ...userAddress[0] });
      (document.getElementById("oldAddressRadio") as HTMLInputElement).checked = true;
    }
  }, [userAddress, addressSel]);

  return (
    <>
      <div>
        <CartTable
          cartInfo={cartInfo}
          handleLoad={async () => setCartInfo(await cart(JSON.parse(session.getItem("userInfo")!).userId))}
          handleChange={setCartInfo}
          state="pay"
        />
        <hr />
        <div>
          배송지 정보
          <div>
            {/* 가져온 배송지가 있으면 선택지 출력 */}
            {userAddress[0]?.id !== "0" ? (
              <>
                배송지 선택
                <form>
                  <label>
                    <input
                      type="radio"
                      name="addressSelect"
                      id="oldAddressRadio"
                      onChange={() => {
                        setAddressSel("old");
                      }}
                      // checked
                    />
                    기존 주소지
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="addressSelect"
                      id="newAddressRadio"
                      onChange={() => {
                        setAddressSel("new");
                      }}
                    />
                    새 주소지
                  </label>
                </form>
              </>
            ) : (
              <></>
            )}
          </div>
          <hr />
          {addressSel === "old" ? (
            <>
              {userAddress.map((address, index) => {
                return (
                  <>
                    <label>
                      <input
                        type="radio"
                        name="addressSelect"
                        id={`addressSelect${index}`}
                        onChange={() => setDeliveryInfo({ ...address })}
                      />
                      {address.address}
                    </label>
                  </>
                );
              })}
              <div>
                배송지 상세
                <p>이름(집) : {deliveryInfo.recipient}</p>
                <p>전화번호 : {deliveryInfo.phone}</p>
                <p>
                  상세 주소 : {deliveryInfo.address} = {deliveryInfo.addressDetail}
                </p>
                <p>요청사항 </p>
                <input name="deliveryMemo" />
              </div>
            </>
          ) : (
            <AddressInputForm setInfo={setDeliveryInfo} handleChange={handleChange} />
          )}
        </div>
        <hr />
        <PaySelect handleChange={handleChange} />
        <hr />
        <div>
          <button onClick={handlePay}>결제하기</button>
        </div>
      </div>
    </>
  );
};

export default Payment;
