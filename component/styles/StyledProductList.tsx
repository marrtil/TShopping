import styled from "styled-components";

const StyledProductList = styled.div`
  #productList {
    display: flex;
    width: 1050px;
    flex-wrap: wrap;
    margin-left: 150px;
    margin-top: 120px;
  }
  a {
    text-decoration: none;
  }
  .listProduct {
    width: 250px;
    height: 320px;
    flex: 1 1 25%;
  }
  .listImage {
    width: 250px;
    height: 270px;
  }

  del {
    color: grey;
    font-weight: 200;
  }
`;

export default StyledProductList;
