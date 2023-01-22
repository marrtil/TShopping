import * as React from "react";
import { useState, FunctionComponent } from "react";
import { useParams } from "react-router";
import StyledProductForm from "./styles/StyledProductForm";
import moomin1 from "../upload/product1.jpeg";
import moomin2 from "../upload/product2.jpeg";
import moomin3 from "../upload/product3.png";

const ProductForm = () => {
  const initialList = [
    {
      id: 1,
      name: "무민",
      kind: "남성 맨투맨",
      size: "M",
      color: "블랙,네이비,화이트,베이지",
      src: moomin1,
      price: 20000,
      sale: 0.1,
      count: 1,
    },
    {
      id: 2,
      name: "무민2",
      size: "L",
      kind: "남성 티셔츠",
      color: "베이지,그린,블루",
      src: moomin2,
      price: 35000,
      sale: 0.2,
      count: 1,
    },
    {
      id: 3,
      name: "무민3",
      size: "XL",
      kind: "여성 재킷",
      color: "블랙,화이트",
      src: moomin3,
      price: 30000,
      sale: 0.15,
      count: 1,
    },
  ];
  const { id } = useParams();

  const [product, setProduct] = useState(
    initialList.filter((value) => value.id == Number(id))[0]
  );
  const optionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct((prevValue) => ({ ...prevValue, [name]: value }));
  };
  console.log(product);

  return (
    <StyledProductForm>
      <div id="productForm">
        <div className="productImage">
          <img src={product.src} />
        </div>
        <div className="productInfo">
          <div className="infoDetail">
            <h1>{product.name}</h1>
            <p className="productKind">{product.kind}</p>
            <h3>
              {product.sale > 0 ? (
                <>
                  <del>{"₩" + product.price.toLocaleString("ko-KR")}</del>&nbsp;
                  {"₩" +
                    (product.price * (1 - product.sale)).toLocaleString(
                      "ko-KR"
                    )}
                </>
              ) : (
                product.price.toLocaleString("ko-KR")
              )}
            </h3>

            <select name="color" onChange={optionChange}>
              {product.color.split(",").map((colors) => (
                <option key={colors} value={colors}>
                  {colors}
                </option>
              ))}
            </select>

            <select name="size" onChange={optionChange}>
              <option key="S" value="S">
                S
              </option>
              <option key="M" value="M">
                M
              </option>
              <option key="L" value="L">
                L
              </option>
              <option key="XL" value="XL">
                XL
              </option>
            </select>
          </div>
          <button className="payButton">결제하기</button>
          <button className="payButton">장바구니</button>
        </div>
      </div>
    </StyledProductForm>
  );
};

export default ProductForm;
