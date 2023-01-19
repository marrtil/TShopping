import styled from "styled-components";

const StyledProductList = styled.div`
  #productList {
    display: flex;
    width: 1000px;
  }
  .listProduct {
    width: 250px;
    height: 300px;
    flex: 1 1 30%;
  }
  .listImage {
    width: 200px;
    height: 220px;
  }

  del {
    color: grey;
    font-weight: 200;
  }
`;

export default StyledProductList;
