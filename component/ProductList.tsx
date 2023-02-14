import * as React from "react";
import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import StyledProductList from "./styles/StyledProductList";
import { product } from "./product";
import { allProducts, viewedProducts } from "./api";
import { salePrice } from "./CartForm";
import PageButtons from "./PageButtons";

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
  브라운: "brown",
  퍼플: "purple",
};

const ProductList = () => {
  const [listProduct, setListProduct] = useState<product[]>([]);
  const [initialProduct, setInitialProduct] = useState<product[]>(listProduct);
  const { search, pathname } = useLocation();
  const [order, setOrder] = useState<string>("0");
  const [color, setColor] = useState<string>("");
  const allPage = useMemo(() => {
    if (listProduct) return Math.ceil(listProduct.length / 16);
  }, [listProduct]);
  const [page, setPage] = useState<number>(1);
  const sessionStorage = window.sessionStorage;
  const local = window.localStorage;
  const colorList = useMemo(() => {
    var colors: string[] = [];
    initialProduct.forEach((value) => {
      value.color.split(",").forEach((value) => {
        if (!colors.includes(value)) colors.push(value);
      });
    });
    return colors;
  }, [initialProduct]);

  const allProduct = async () => {
    const product = await allProducts(search);
    setListProduct(product);
    setInitialProduct(product);
  };

  const viewedProduct = async () => {
    if (local.getItem("viewed")) {
      const product = await viewedProducts(local.getItem("viewed") || "");
      setListProduct(product);
      setInitialProduct(product);
    }
  };

  useEffect(() => {
    if (pathname === "/myPage/viewed-goods") {
      viewedProduct();
    } else {
      allProduct();
    }
  }, []);

  // console.log(search);

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

  const optionColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setColor(value);
  };
  const changeOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setOrder(value);
  };

  console.log(initialProduct);

  return (
    <StyledProductList>
      <div id="productFilter">
        {pathname === "/myPage/viewed-goods" ? (
          <></>
        ) : (
          <>
            {" "}
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
          </>
        )}
      </div>
      <div id="productList">
        {listProduct.length && page ? (
          listProduct
            .slice(0 + (page - 1) * 16, 16 * page)
            .map((product: product) => {
              return (
                <div className="listProduct">
                  <Link to={`/productForm/${product.id}`}>
                    <img src={product.image} className="listImage" />
                  </Link>
                  <div className="productInfo">
                    <Link to={`/productForm/${product.id}`}>
                      <div>{product.name}</div>
                    </Link>
                    <div>
                      {" "}
                      {product.discount > 0 ? (
                        <>
                          <del>
                            {"₩" + product.price.toLocaleString("ko-KR")}
                          </del>
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
      <PageButtons allPage={allPage} pageSet={setPage} />
    </StyledProductList>
  );
};

export default ProductList;
