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
    color: black;
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

  #colors {
    list-style: none;
  }

  .color {
    weight: 8px;
    height: 8px;
    text-indent: -9999px;
    overflow: hidden;
    float: left;
  }
`;

export default StyledProductList;
