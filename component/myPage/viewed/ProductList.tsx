import * as React from "react";
import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import StyledViewedGoods from "../styles/StyledViewedGoods";
import { product } from "../../product";
import { viewedProducts } from "../../api";
import { salePrice } from "../../CartForm";
import PageButtons from "../../PageButtons";
import { colorTable } from "./type";

const ProductList = () => {
  const [listProduct, setListProduct] = useState<product[]>([]);
  const allPage = useMemo(() => {
    if (listProduct) return Math.ceil(listProduct.length / 16);
  }, [listProduct]);
  const [page, setPage] = useState<number>(1);
  const local = window.localStorage;
  const session = window.sessionStorage;
  const userId = JSON.parse(session.getItem("userInfo")!).userId;

  const handleLoad = async () => {
    if (local.getItem("viewed_" + userId)) {
      const product = await viewedProducts(local.getItem("viewed_" + userId) || "");
      setListProduct(product);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <StyledViewedGoods>
      <div id="productList">
        {listProduct.length && page ? (
          listProduct.slice((page - 1) * 16, 16 * page).map((product: product) => {
            return (
              <div className="listProduct">
                <Link to={`/productForm/${product.id}`}>
                  <img src={product.image} className="listImage" />
                  <div className="productInfo">
                    <div>{product.name}</div>
                    <div>
                      {" "}
                      {product.discount > 0 ? (
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
                </Link>
              </div>
            );
          })
        ) : (
          <div id="empty">찾으시는 종류의 상품이 없습니다</div>
        )}
      </div>
      <PageButtons allPage={allPage} pageSet={setPage} />
    </StyledViewedGoods>
  );
};

export default ProductList;
