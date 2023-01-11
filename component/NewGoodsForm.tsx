import * as React from "react";
import StyledGoodsList from "./styles/StyledGoddsList";

const NewProdForm = () => {
  return (
    <StyledGoodsList>
      <div className="listTitle">
        <h2>신제품</h2>
        <div>추천수/조회수/찜/등등 고를수있게</div>
      </div>
      <hr />
      <div>내용스</div>
    </StyledGoodsList>
  );
};

export default NewProdForm;
