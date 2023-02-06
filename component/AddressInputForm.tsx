import * as React from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { telNo1 } from "./data";
import StyledAddressInput from "./styles/StyledAddressInput";
import { address, INITIAL_ADDRESS } from "./Types";

const AddressInputForm = ({ handleChange }: any) => {
  const [address, setAddress] = React.useState<address>(INITIAL_ADDRESS);
  const open = useDaumPostcodePopup();

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
        extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    const newAddress: address = { zoneCode: zoneCode, address: fullAddress, addressDetail: "" };
    setAddress({ ...newAddress });
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };
  return (
    <StyledAddressInput>
      <h3>배송지 입력</h3>
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
        </select>{" "}
        - <input type="text" className="telNo" /> - <input type="text" className="telNo" />
      </div>{" "}
      <div>
        <strong className="addressStrong">배송지 주소</strong>
        <div className="addressDiv">
          <input
            value={address.zoneCode}
            onChange={handleChange}
            type="text"
            name="zoneCode"
            className="adressInput"
            readOnly
          />
          <button onClick={handleClick}>우편번호 검색</button>
          <br />
          <div className="addressDetailDiv">
            <input value={address.address} onChange={handleChange} type="text" name="address" readOnly />
            <input type="text" placeholder="상세 주소 입력" onChange={handleChange} name="addressDetail" />
          </div>
        </div>
      </div>
      <div>
        <strong>요청사항</strong>
        <input type="text" name="deliveryMemo" onChange={handleChange} />
      </div>{" "}
    </StyledAddressInput>
  );
};

export default AddressInputForm;
