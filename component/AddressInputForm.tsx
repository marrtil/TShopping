import * as React from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { telNo1 } from "./data";
import { address, INITIAL_ADDRESS } from "./Types";

const AddressInputForm = () => {
  const [address, setAddress] = React.useState<address>(INITIAL_ADDRESS);
  const open = useDaumPostcodePopup();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleComplete = (data: any) => {
    console.log("handleComplete");
    const zoneCode: string = data.zonecode;
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log(zoneCode);
    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    const newAddress: address = {
      zoneCode: zoneCode,
      address: fullAddress,
      addressDetail: "",
    };
    setAddress({ ...newAddress });
  };

  const handleClick = () => {
    console.log("handleClick");
    open({ onComplete: handleComplete });
  };
  return (
    <div>
      배송지 입력
      <div>
        <strong>수령인</strong>
        <input type="text" />
      </div>
      <div>
        <strong>연락처</strong>
        <select className="telNo1">
          {telNo1.map((no) => {
            return <option value={no}>{no}</option>;
          })}
        </select>
        -
        <input type="text" className="telNo" />-
        <input type="text" className="telNo" />
      </div>{" "}
      <div>
        <strong>배송지 주소</strong>
        <input
          value={address.zoneCode}
          type="text"
          className="adressInput"
          readOnly
        />
        <button onClick={handleClick}>우편번호 검색</button>
        <br />
        <input value={address.address} type="text" name="address" readOnly />
        <input
          value={address.addressDetail}
          type="text"
          placeholder="상세 주소 입력"
          onChange={handleChange}
          name="addressDetail"
        />
      </div>{" "}
      <div>
        <strong>요청사항</strong>
        <input type="text" name="deliveryMemo" />
      </div>{" "}
      <div>
        <strong>수령인</strong>
        <input type="text" />
      </div>
    </div>
  );
};

export default AddressInputForm;
