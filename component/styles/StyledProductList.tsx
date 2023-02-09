import styled from "styled-components";

const StyledProductList = styled.div`
  background-color: rgb(230, 230, 230);

  #productList {
    display: flex;
    flex-direction: row;
    width: 73.5%;
    flex-wrap: wrap;
    margin-left: 225px;
    background-color: rgb(230, 230, 230);
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  .listProduct {
    width: 24%;
    height:auto;
    margin-right: 2px;
  }
  
  .productInfo {
    text-align: left;
    width:25%
    height:auto;
    overflow:hidden;
    font-size:66%;
  }

  .listImage {
    width: 100%;
    height: auto;
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
    width: 0.5vw;
    height: 1vh;
    text-indent: -9999px;
    overflow: hidden;
    float: left;
    margin-right: 1px;
  }

  #productFilter {
    margin-left: 215px;
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

  #pageButtons {
    margin-left: 645px;

    .pages {
      margin:5px;
      border:solid 1px;
      background-color: rgb(230, 230, 230);
      cursor:pointer;
    }
  }
`;

export default StyledProductList;
