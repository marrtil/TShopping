import * as React from "react";
import { useState, FunctionComponent } from "react";
import StyledProductForm from "./styles/StyledProductForm";
import moomin1 from "../upload/moomin1.jpeg";

const ProductForm = () => {
  const [product, setProduct] = useState({
    id: 1,
    name: "무민",
    size: "M",
    color: "네이비",
    src: moomin1,
    price: 10000,
    count: 1,
  });
  const optionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, size } = e.target;
    setProduct((prevValue) => ({ ...prevValue, [name]: size }));
    console.log(product);
  };

  return (
    <StyledProductForm>
      <div id="productForm">
        <div className="productImage">
          <img src={product.src} />
        </div>
        <div className="productInfo">
          <h2>{product.name}</h2>
          <h3>₩{product.price}</h3>

          <select name="color" onChange={optionChange}>
            <option key="블랙" value="블랙">
              블랙
            </option>
            <option key="화이트" value="화이트">
              화이트
            </option>
            <option key="네이비" value="네이비">
              네이비
            </option>
            <option key="베이지" value="베이지">
              베이지
            </option>
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
          <button className="payButton">결제하기</button>
          <button className="payButton">장바구니</button>
        </div>
      </div>
    </StyledProductForm>
  );
};

export default ProductForm;
