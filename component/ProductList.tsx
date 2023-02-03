import * as React from "react";
import { useState, useMemo, useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import StyledProductList from "./styles/StyledProductList";
import { productManT, productWomenT } from "./Types";
import { initialProducts, product } from "./product";
import { allProducts } from "./api";
import { salePrice } from "./CartForm";

type tableType = {
  [index: string]: string;
  블랙: string;
  화이트: string;
  네이비: string;
  그린: string;
  블루: string;
  베이지: string;
  오렌지: string;
  생지: string;
  샐비지: string;
  워싱: string;
};

type genderFilter = {
  [index: string]: string;
  man: "남성";
  women: "여성";
};
const genderCheck: genderFilter = {
  man: "남성",
  women: "여성",
};

const colorTable: tableType = {
  블랙: "black",
  화이트: "white",
  네이비: "navy",
  그린: "green",
  블루: "blue",
  베이지: "beige",
  오렌지: "orange",
  생지: "blue",
  샐비지: "navy",
  워싱: "skyblue",
};

const productWomen: productWomenT = {
  아우터: "outter",
  가디건: "cardigan",
  셔츠: "shirts",
  블라우스: "blouse",
  니트: "neat",
  후드티: "hood",
  티셔츠: "T-shirts",
  팬츠: "pants",
  스커트: "skirt",
  언더웨어: "under-wear",
  신발: "shoes",
};

const productMan: productManT = {
  팬츠: "pants",
  아우터: "outter",
  수트: "suit",
  후드티: "hood",
  맨투맨: "manman",
  니트: "neat",
  가디건: "cardigan",
  스웨터: "sweater",
  셔츠: "shirts",
  언더웨어: "under-wear",
  신발: "shoes",
};

const ProductList = () => {
  const [listProduct, setListProduct] = useState<product[]>([]);
  const [initialProduct, setInitialProduct] = useState<product[]>(listProduct);
  const allProduct = async () => {
    const product = await allProducts();
    setListProduct(product);
    setInitialProduct(product);
  };
  useEffect(() => {
    allProduct();
  }, []);
  const { search } = useLocation();
  const [query, setQuery] = useState<string[]>(search.split(/[?|=|&]/));
  const [order, setOrder] = useState<string>("0");
  const [color, setColor] = useState<string>("");
  const sessionStorage = window.sessionStorage;
  const colorList = useMemo(() => {
    var colors: string[] = [];
    initialProduct.forEach((value) => {
      value.color.split(",").forEach((value) => {
        if (!colors.includes(value)) colors.push(value);
      });
    });
    return colors;
  }, [initialProduct]);

  useEffect(() => {
    const searchItem = sessionStorage.getItem("itemName");
    if (searchItem) {
      setListProduct(
        initialProducts.filter((value) => value["name"].includes(searchItem))
      );
      setInitialProduct(
        initialProducts.filter((value) => value["name"].includes(searchItem))
      );
    }
    sessionStorage.removeItem("itemName");
  }, []);

  useEffect(() => {
    if (color) {
      if (color == "default") setListProduct(initialProduct);
      else {
        setListProduct(
          initialProduct.filter((values) => values["color"].includes(color))
        );
      }
    }
  }, [color]);

  useEffect(() => {
    if (order == "1") {
      setListProduct((prevValue) => [...prevValue].sort((a, b) => b.id - a.id));
    } else if (order == "2") {
      setListProduct((prevValue) =>
        [...prevValue].sort((a, b) => a.price - b.price)
      );
    } else if (order == "3") {
      setListProduct((prevValue) =>
        [...prevValue].sort((a, b) => b.price - a.price)
      );
    }
  }, [order, color]);

  useEffect(() => {
    if (query[2] && query[2] == "man") {
      if (query[4]) {
        const itemKey = Object.keys(productMan).find(
          (key) => productMan[key] == query[4]
        );
        setListProduct((prevValue) =>
          prevValue.filter(
            (value) =>
              value.kind == itemKey && value.gender == genderCheck[query[2]]
          )
        );
        setInitialProduct((prevValue) =>
          prevValue.filter(
            (value) =>
              value.kind == itemKey && value.gender == genderCheck[query[2]]
          )
        );
        return;
      } else {
        setListProduct((prevValue) =>
          prevValue.filter((value) => value.gender == genderCheck[query[2]])
        );
        setInitialProduct((prevValue) =>
          prevValue.filter((value) => value.gender == genderCheck[query[2]])
        );
      }
    } else if (query[2] && query[2] == "women") {
      if (query[4]) {
        const itemKey = Object.keys(productWomen).find(
          (key) => productMan[key] == query[4]
        );
        setListProduct((prevValue) =>
          prevValue.filter(
            (value) =>
              value.kind == itemKey && value.gender == genderCheck[query[2]]
          )
        );
        setInitialProduct((prevValue) =>
          prevValue.filter(
            (value) =>
              value.kind == itemKey && value.gender == genderCheck[query[2]]
          )
        );
        return;
      } else {
        setListProduct((prevValue) =>
          prevValue.filter((value) => value.gender == genderCheck[query[2]])
        );
        setInitialProduct((prevValue) =>
          prevValue.filter((value) => value.gender == genderCheck[query[2]])
        );
      }
    }
  }, []);

  const optionColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setColor(value);
  };
  const changeOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setOrder(value);
  };

  return (
    <StyledProductList>
      <div id="productFilter">
        <select name="order" onChange={changeOrder} className="filter">
          <option value="1">최신순</option>
          <option value="2">낮은 가격순</option>
          <option value="3">높은 가격순</option>
        </select>
        <select name="color" onChange={optionColor} className="filter">
          <option key="default" value="default">
            전체 색상
          </option>
          {colorList.map((colors) => (
            <option key={colors} value={colors}>
              {colors}
            </option>
          ))}
        </select>
      </div>
      <div id="productList">
        {listProduct.length ? (
          listProduct.map((product: product) => {
            return (
              <div className="listProduct">
                <Link to={`/productForm/${product.id}`}>
                  <img src={product.src} className="listImage" />
                </Link>
                <div className="productInfo">
                  <Link to={`/productForm/${product.id}`}>
                    <div>{product.name}</div>
                  </Link>
                  <div>
                    {" "}
                    {product.sale > 0 ? (
                      <>
                        <del>{"₩" + product.price.toLocaleString("ko-KR")}</del>
                        &nbsp;
                        {"₩" + salePrice(product).toLocaleString("ko-KR")}
                      </>
                    ) : (
                      product.price.toLocaleString("ko-KR")
                    )}
                  </div>
                  <ul id="colors">
                    {product.color.split(",").map((colors: string) => {
                      const style = {
                        backgroundColor: colorTable[colors],
                      };
                      return (
                        <li key={colors}>
                          <a className="color" style={style}></a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })
        ) : (
          <div id="empty">찾으시는 종류의 상품이 없습니다</div>
        )}
      </div>
    </StyledProductList>
  );
};

export default ProductList;
