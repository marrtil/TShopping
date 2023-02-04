import * as React from "react";
import { useState, FunctionComponent } from "react";
import { useNavigate, useParams } from "react-router";
import StyledProductForm from "./styles/StyledProductForm";
import { product } from "./product";
import { cart, cartIn } from "./orderApi";
import { productDetail } from "./api";
import { salePrice } from "./CartForm";

const initialproduct: product = {
  id: 1,
  name: "",
  gender: "",
  kind: "",
  size: "",
  color: "",
  image: "",
  price: 0,
  sale: 0,
  count: 0,
};

const ProductForm = () => {
  const { id } = useParams();
  const navi = useNavigate();
  const [product, setProduct] = useState<product>(initialproduct);
  const optionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct((prevValue) => ({ ...prevValue, [name]: value }));
  };
  console.log(product);

  const loadProduct = async () => {
    const productNum = await productDetail(Number(id));
    setProduct(productNum);
  };

  React.useEffect(() => {
    loadProduct();
  }, []);

  const handleCartIn = async () => {
    const check = await cartIn({
      productId: product.id,
      size: product.size,
      color: product.color,
      count: 1,
    });
    if (check.id) {
      let result = confirm(
        "물품이 장바구니에 담겼습니다.\n장바구니로 이동하시겠습니까?"
      );
      if (result) navi("../cart");
    }
  };

  return (
    <StyledProductForm>
      <div id="productForm">
        <div className="productImage">
          <img src={product.image} />
        </div>
        <div className="productInfo">
          <div className="infoDetail">
            <h1>{product.name}</h1>
            <p className="productKind">{product.kind}</p>
            <h3>
              {product.sale > 0 ? (
                <>
                  <del>{"₩" + product.price.toLocaleString("ko-KR")}</del>&nbsp;
                  {"₩" + salePrice(product).toLocaleString("ko-KR")}
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
