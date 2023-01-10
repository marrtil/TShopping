import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import product1 from "../upload/product1.jpeg";
import product2 from "../upload/product2.jpeg";
import product3 from "../upload/product3.png";

const RecomendProduct = () => {
  const productSrc: string[] = [product1, product2, product3]; // 얘도 지금은 그냥 배열이지만 state가 될지도모름 , 서버에서 받아올 정보 일듯?
  const productNum: string[] = ["0", "1", "2"];

  return (
    <div className="Recomend">
      <Link to={"/RecomendList"} id="RecomendLink">
        <h2>추천상품</h2>
      </Link>
      <div>
        {productSrc.map((value, index) => {
          return (
            <Link to={`/ProductForm/${productNum[index]}`}>
              <div className="RecomendProduct">
                <img src={value} width="200" alt={productNum[index]} />
                <p>무민동화책{index + 1}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RecomendProduct;
