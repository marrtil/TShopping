import * as React from "react";
import { useLocation } from "react-router";
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
type Props = {
  onClick: (value: number) => void;
};
const OrderSearch: React.FC<Props> = ({ onClick }) => {
  const { search } = useLocation();
  let path = search.split("&sort=")[0];
  if (!path) {
    path = "?order_state=";
  }
  // test
  return (
    <StyledOrderSearch>
      <div>
        <button onClick={() => onClick(20160000)}>1주일</button>
        <button onClick={() => onClick(86400000)}>1개월</button>
        <button onClick={() => onClick(7776000000)}>3개월</button>
        <button onClick={() => onClick(0)}>전체</button>
      </div>
    </StyledOrderSearch>
  );
};

export default OrderSearch;
