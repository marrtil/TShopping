import * as React from "react";
import { useState, useEffect } from "react";
import StyledBody from "./styles/StyledBody";
import moomin1 from "../upload/moomin1.jpeg";
import moomin2 from "../upload/moomin2.jpeg";
import Banner from "./Banner";
import RecomendProduct from "./RecomendProduct";

const Body = () => {
  return (
    <StyledBody>
      <Banner />
      <RecomendProduct />
    </StyledBody>
  );
};

export default Body;
