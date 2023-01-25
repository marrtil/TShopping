import * as React from "react";
import { useState, useMemo, useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { Link } from "react-router-dom";
import StyledProductForm from "./styles/StyledProductForm";
import moomin1 from "../upload/product1.jpeg";
import moomin2 from "../upload/product2.jpeg";
import moomin3 from "../upload/product3.png";
import moomin4 from "../upload/moomin1.jpeg";
import moomin5 from "../upload/moomin2.jpeg";
import StyledProductList from "./styles/StyledProductList";
import { productManT, productWomenT } from "./Types";

type product = {
  [index: string]: string | number | any;
  id: number;
  name: string;
  kind: string;
  size: string;
  color: string;
  src: string | any;
  price: number;
  sale: number;
  count: number;
};

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
const gender: genderFilter = {
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

const initialProduct: product[] = [
  {
    id: 1,
    name: "무민",
    gender: "남성",
    kind: "맨투맨",
    size: "M",
    color: "블랙,네이비,화이트,베이지",
    src: moomin1,
    price: 20000,
    sale: 0.15,
    count: 1,
  },
  {
    id: 2,
    name: "무민2",
    size: "L",
    gender: "남성",
    kind: "티셔츠",
    color: "베이지,그린,블루",
    src: moomin2,
    price: 130000,
    sale: 0.25,
    count: 1,
  },
  {
    id: 3,
    name: "무민3",
    size: "XL",
    gender: "여성",
    kind: "재킷",
    color: "블랙,화이트",
    src: moomin3,
    price: 10000,
    sale: 0.1,
    count: 1,
  },
  {
    id: 4,
    name: "무민4",
    gender: "여성",
    kind: "청바지",
    size: "M",
    color: "생지,샐비지,워싱",
    src: moomin4,
    price: 50000,
    sale: 0.15,
    count: 1,
  },
  {
    id: 5,
    name: "무민5",
    gender: "남성",
    kind: "패딩",
    size: "M",
    color: "블랙,오렌지,네이비",
    src: moomin5,
    price: 15000,
    sale: 0.2,
    count: 1,
  },
];

const ProductList = () => {
  const { search } = useLocation();
  const cond = search.split(/[?|=|&]/);
  console.log(cond);
  console.log(gender[cond[2]]);
  //   const [listProduct, setListProduct] = useState<product[]>(
  //     initialProduct
  //       .sort((a, b) => b.id - a.id)
  //       .filter((value) => value.gender == gender[cond[2]])
  //   );
  const [listProduct, setListProduct] = useState<product[]>(
    initialProduct.sort((a, b) => b.id - a.id)
  );
  const [order, setOrder] = useState<string>("0");
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
  }, [listProduct, order]);

  const optionFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const iniFilter = initialProduct;
    setListProduct(iniFilter.filter((values) => values[name].includes(value)));
  };
  const changeOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setOrder(value);
  };

  return (
    <StyledProductList>
      <div id="productFilter">
        <select name="order" onChange={changeOrder} className="filter">
          <option hidden>정렬 기준</option>
          <option value="1">최신순</option>
          <option value="2">낮은 가격순</option>
          <option value="3">높은 가격순</option>
        </select>
        <select name="color" onChange={optionFilter} className="filter">
          <option hidden>컬러</option>
          {colorList.map((colors) => (
            <option key={colors} value={colors}>
              {colors}
            </option>
          ))}
        </select>
      </div>
      <div id="productList">
        {listProduct.map((product: product) => {
          return (
            <div className="listProduct">
              <Link to={`/ProductForm/${product.id}`}>
                <img src={product.src} className="listImage" />
              </Link>
              <div className="productInfo">
                <Link to={`/ProductForm/${product.id}`}>
                  <div>{product.name}</div>
                </Link>
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
        })}
      </div>
    </StyledProductList>
  );
};

export default ProductList;
