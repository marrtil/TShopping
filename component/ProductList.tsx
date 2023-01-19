import * as React from "react";
import { useState, FunctionComponent } from "react";
import { useParams } from "react-router";
import StyledProductForm from "./styles/StyledProductForm";
import moomin1 from "../upload/product1.jpeg";
import moomin2 from "../upload/product2.jpeg";
import moomin3 from "../upload/product3.png";
import StyledProductList from "./styles/StyledProductList";

const ProductList = () => {
  const initialList = [
    {
      id: 1,
      name: "무민",
      kind: "남성 맨투맨",
      size: "M",
      color: "네이비",
      src: moomin1,
      price: 10000,
      sale: 0.1,
      count: 1,
    },
    {
      id: 2,
      name: "무민2",
      size: "L",
      kind: "남성 티셔츠",
      color: "베이지",
      src: moomin2,
      price: 15000,
      sale: 0.2,
      count: 1,
    },
    {
      id: 3,
      name: "무민3",
      size: "XL",
      kind: "여성 재킷",
      color: "그린",
      src: moomin3,
      price: 20000,
      sale: 0.15,
      count: 1,
    },
    {
      id: 1,
      name: "무민",
      kind: "남성 맨투맨",
      size: "M",
      color: "네이비",
      src: moomin1,
      price: 10000,
      sale: 0.1,
      count: 1,
    },
  ];
  return (
    <StyledProductList>
      <div id="productList">
        {initialList.map((product) => {
          return (
            <div className="listProduct">
              <img src={product.src} className="listImage" />
              <div className="productInfo">
                <div>{product.name}</div>
                <div>
                  {" "}
                  {product.sale > 0 ? (
                    <>
                      <del>{"₩" + product.price.toLocaleString("ko-KR")}</del>
                      &nbsp;
                      {"₩" +
                        (product.price * (1 - product.sale)).toLocaleString(
                          "ko-KR"
                        )}
                    </>
                  ) : (
                    product.price.toLocaleString("ko-KR")
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </StyledProductList>
  );
};

export default ProductList;
