import styled from "styled-components";

const StyledProductList = styled.div`
  background-color: rgb(230, 230, 230);
  #productList {
    display: flex;
    flex-direction: row;
    width: 73.5%;
    flex-wrap: wrap;
    margin-left: 150px;
    background-color: rgb(230, 230, 230);
  }
  a {
    text-decoration: none;
    color: black;
  }
  .listProduct {
    width: 24%;
    height: 350px;
    margin-right: 2px;
  }
  .productInfo {
    text-align: left;
  }

  .listImage {
    width: 100%;
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

  #productFilter {
    margin-left: 150px;
    margin-bottom: 30px;
  }
  .filter {
    background-color: rgb(230, 230, 230);
    border: none;
    padding: 0.8em 0.5em;
  }

  #empty {
    width: 80%;
    min-height: 200px;
    text-align: center;
    padding-top: 120px;
  }
`;

export default StyledProductList;
