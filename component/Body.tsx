import * as React from "react";
import StyledBody from "./styles/StyledBody";
import Banner from "./Banner";
import RecomendProduct from "./RecomendProduct";
import ProductGrid from "./ProductGrid";
import { useState } from "react";

export type UserInfo = {
  userId: string;
  nickname: string;
  password: string;
  email: string;
  gender: string;
};

export type infoProps = {
  userInfo: UserInfo;
};

const Body = () => {
  const sessionStorage = window.sessionStorage;
  const [userInfo, setuserInfo] = useState<UserInfo>(
    JSON.parse(sessionStorage.getItem("userInfo")!)
  );

  return (
    <StyledBody>
      <Banner />
      <RecomendProduct userInfo={userInfo} />
      <ProductGrid userInfo={userInfo} />
      {/* 새제품,인기상품 통합 - props로 구분할 수 있게 */}
    </StyledBody>
  );
};

export default Body;
