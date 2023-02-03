import * as React from "react";
import { useState, FunctionComponent } from "react";
import { useNavigate, useParams } from "react-router";
import StyledProductForm from "./styles/StyledProductForm";
import moomin1 from "../upload/product1.jpeg";
import moomin2 from "../upload/product2.jpeg";
import moomin3 from "../upload/product3.png";
import moomin4 from "../upload/moomin1.jpeg";
import moomin5 from "../upload/moomin2.jpeg";
import { initialProducts } from "./product";
import { cart, cartIn } from "./orderApi";
const ProductForm = () => {
  const { id } = useParams();
  const navi = useNavigate();
  const [product, setProduct] = useState(initialProducts.filter((value) => value.id == Number(id))[0]);
  const optionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct((prevValue) => ({ ...prevValue, [name]: value }));
  };
  console.log(product);

  const handleCartIn = async () => {
    const check = await cartIn({ productId: product.id, size: product.size, color: product.color, count: 1 });
    if (check.id) {
      let result = confirm("물품이 장바구니에 담겼습니다.\n장바구니로 이동하시겠습니까?");
      if (result) navi("../cart");
    }
  };

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
                  {"₩" + (product.price * (1 - product.sale)).toLocaleString("ko-KR")}
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
          <button className="payButton" onClick={handleCartIn}>
            장바구니
          </button>
        </div>
      </div>
    </StyledProductForm>
  );
};

export default ProductForm;
