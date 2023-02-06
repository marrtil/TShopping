import * as React from "react";
import { Link } from "react-router-dom";
import product1 from "../upload/moomin5.jpeg";
import product2 from "../upload/moomin6.jpeg";
import product3 from "../upload/moomin7.png";
import StyledGrid from "./styles/StyledGrid";
import { ProductSort } from "./Types";
import { product } from "./product";
import { useState,useEffect } from "react";
import { gridLoad } from "./api";

interface Props {
  sort: ProductSort;
}

const ProductGrid = () => {
  const [products,setProducts] = useState<product[]>([]); // 얘도 지금은 그냥 배열이지만 state가 될지도모름 , 서버에서 받아올 정보 일듯?
  const [option, setOption] = React.useState<ProductSort>("new");

  const optionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value as ProductSort);
  };

  const gridImage = async()=>{
    const grid=await gridLoad(option);
    setProducts(grid);
  }

  useEffect(() => {
    gridImage();
  }, [option]);

    console.log(products);
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
        {products.map((value) => {
          return (
            <Link to={`/productForm/${value.id}`}>
              <div className="RecomendProduct">
                <img src={value.image} width="200" alt={value.name} />
                <strong>{value.name}</strong>
              </div>
            </Link>
          );
        })}
      </div>
    </StyledGrid>
  );
};

export default ProductGrid;
