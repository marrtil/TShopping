import * as React from "react";
import styled from "styled-components";

const StyledOrderSearch = styled.div`
  padding: 10px 0;
  display: flex;
  button {
    border-radius: 0;
    border: 2px solid rgb(220, 220, 220);
    background-color: white;
    color: rgb(80, 80, 80);
    width: 70px;
    height: 30px;
    a:hover {
      color: rgb(80, 80, 80);
    }
  }
  div {
    margin: 0 10px 0 10px;
  }
`;
const OrderSearch = () => {
  return (
    <StyledOrderSearch>
      <div>
        <button>
          <a href="#">1주일</a>
        </button>
        <button>
          {" "}
          <a href="#">1개월</a>
        </button>
        <button>
          {" "}
          <a href="#">3개월</a>
        </button>
        <button>
          {" "}
          <a href="#">전체</a>
        </button>
      </div>
      <div>날짜선택</div>
      <select>
        <option key="0" value="">
          입금/결제
        </option>
        <option key="1" value="">
          배송중/픽업대기
        </option>
        <option key="2" value="">
          배송완료/픽업완료
        </option>
        <option key="3" value="">
          교환
        </option>
        <option key="4" value="">
          교환완료
        </option>
        <option key="5" value="">
          환불
        </option>
        <option key="6" value="">
          환불완료
        </option>
      </select>
      <button>조회</button>
    </StyledOrderSearch>
  );
};

export default OrderSearch;