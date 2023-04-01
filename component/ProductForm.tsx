import * as React from "react";
import { useState, FunctionComponent } from "react";
import { useNavigate, useParams } from "react-router";
import StyledProductForm from "./styles/StyledProductForm";
import { product } from "./product";
import { cart, cartIn, reviewLoadProduct } from "./orderApi";
import { productDetail } from "./api";
import { salePrice } from "./CartForm";
import { Link } from "react-router-dom";
import { INITIAL_REVIEW, Review } from "./Types";
import ReviewTable from "./myPage/review/ReviewTable";

const initialproduct: product = {
  id: 1,
  name: "",
  gender: "",
  kind: "",
  size: "",
  color: "",
  image: "",
  price: 0,
  discount: 0,
  count: 0,
};

const ProductForm = () => {
  const { id } = useParams();
  const navi = useNavigate();
  const local = window.localStorage;
  const session = window.sessionStorage;
  const userId = JSON.parse(session.getItem("userInfo")!).userId;
  const [product, setProduct] = useState<product>(initialproduct);
  const [select, setSelect] = useState({ color: "select", size: "select" });
  const [review, setReview] = useState<Review[]>([INITIAL_REVIEW]);

  const optionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSelect((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const loadProduct = async () => {
    const productNum = await productDetail(Number(id));
    setProduct(productNum);
    const review = await reviewLoadProduct(String(id));
    setReview(review);
  };

  React.useEffect(() => {
    loadProduct();
    if (id && userId) {
      if (local.getItem("viewed_" + userId)) {
        let filltered = local
          .getItem("viewed_" + userId)
          ?.split(",")
          .filter((item) => item !== id);
        local.setItem("viewed_" + userId, id + "," + filltered);
      } else local.setItem("viewed_" + userId, id);
    }
  }, []);

  const handleOptionCheck = (e: any) => {
    if (select.color === "select" || select.size === "select") {
      alert("옵션을 선택해주세요.");
      e.preventDefault();
      return;
    }
  };
  const handleCartIn = async () => {
    if (session.getItem("userInfo")) {
      if (select.color === "select" || select.size === "select") {
        alert("옵션을 선택해주세요.");
        return;
      }
      const check = await cartIn({
        productId: product.id,
        size: select.size,
        color: select.color,
        count: 1,
      });
      if (check.id) {
        let result = confirm("물품이 장바구니에 담겼습니다.\n장바구니로 이동하시겠습니까?");
        if (result) navi("../cart");
      }
    } else alert("로그인 후 이용가능합니다.");
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
              {product.discount > 0 ? (
                <>
                  <del>{"₩" + product.price.toLocaleString("ko-KR")}</del>&nbsp;
                  {"₩" + salePrice(product).toLocaleString("ko-KR")}
                </>
              ) : (
                product.price.toLocaleString("ko-KR")
              )}
            </h3>

            <select name="color" onChange={optionChange}>
              <option key="select" value="select">
                색상 선택
              </option>
              {product.color.split(",").map((colors) => (
                <option key={colors} value={colors}>
                  {colors}
                </option>
              ))}
            </select>

            <select name="size" onChange={optionChange}>
              <option key="select" value="select">
                사이즈 선택
              </option>
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
          <button className="payButton">
            <Link to="../payment" state={[{ ...product, ...select }]} onClick={handleOptionCheck}>
              결제하기
            </Link>
          </button>
          <button className="payButton" onClick={handleCartIn}>
            장바구니
          </button>
        </div>
      </div>
      <div>
        <h3>리뷰</h3>
        <hr />
        <ReviewTable {...review} />
      </div>
    </StyledProductForm>
  );
};

export default ProductForm;
