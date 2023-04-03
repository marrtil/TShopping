import styled from "styled-components";

const StyledProductList = styled.div`

  #productList {
    display: flex;
    flex-direction: row;
    width: 800px;
    flex-wrap: wrap;
    padding-left: 1%;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  a: hover {
    color: black;
  }
  .listProduct {
    width: 24%;
    height:auto;
    margin-right: auto;
    margin-bottom: 1%;
  }
  
  .productInfo {
    text-align: left;
    width:25%
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
    text-align: center;
    .pages {
      margin:5px;
      border:solid 1px;
      background-color: rgb(230, 230, 230);
      cursor:pointer;
    }
  }
`;

export default StyledProductList;
