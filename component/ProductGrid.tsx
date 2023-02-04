import * as React from "react";
import { Link } from "react-router-dom";
import product1 from "../upload/moomin5.jpeg";
import product2 from "../upload/moomin6.jpeg";
import product3 from "../upload/moomin7.png";
import StyledGrid from "./styles/StyledGrid";
import { ProductSort } from "./Types";

interface Props {
  sort: ProductSort;
}

const ProductGrid: React.FC<Props> = ({ sort }) => {
  const productSrc: string[] = [product1, product2, product3]; // 얘도 지금은 그냥 배열이지만 state가 될지도모름 , 서버에서 받아올 정보 일듯?
  const productNum: string[] = ["1", "2", "3"];
  const [option, setOption] = React.useState<ProductSort>(sort);

  const optionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value as ProductSort);
  };

  React.useEffect(() => {}, [option]);

  return (
    <StyledGrid>
      <div className="listTitle">
        {option === "new" ? (
          <h2>새제품</h2>
        ) : option === "major" ? (
          <h2>인기상품</h2>
        ) : (
          <h2>추천상품</h2>
        )}
        <select onChange={optionChange}>
          <option key="new" value="new">
            새제품
          </option>
          <option key="major" value="major">
            인기상품
          </option>
          <option key="recomend" value="recomend">
            추천상품
          </option>
          <option key="any">기타...</option>
        </select>
      </div>
      <div id="hrDivider">
        <hr />
      </div>
      <div>
        {productSrc.map((value, index) => {
          return (
            <Link to={`/productForm/${productNum[index]}`}>
              <div className="RecomendProduct">
                <img src={value} width="200" alt={productNum[index]} />
                <p>무민동화책{index + 1}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </StyledGrid>
  );
};

export default ProductGrid;
