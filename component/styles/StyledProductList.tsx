import styled from "styled-components";

const StyledProductList = styled.div`
  #productList {
    display: flex;
    width: 1050px;
    flex-wrap: wrap;
    margin-left: 150px;
    margin-top: 120px;
    background-color: rgb(230, 230, 230);
  }
  a {
    text-decoration: none;
    color: black;
  }
  .listProduct {
    width: 250px;
    height: 350px;
    flex: 1 1 25%;
  }
  .productInfo {
    text-align: left;
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
    display: inline;
  }

  .color {
    width: 8px;
    height: 8px;
    text-indent: -9999px;
    overflow: hidden;
    float: left;
    margin-right: 1px;
  }
`;

export default StyledProductList;
