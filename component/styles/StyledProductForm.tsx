import styled from "styled-components";

const StyledProductForm = styled.div`
  #productForm {
    display: flex;
  }

  .productImage {
    width: 500px;
    height: 500px;
    padding: 30px;
  }
  .productImage img {
    width: 400px;
    height: 400px;
  }
  ////////////////////////////
  .productInfo {
    width: 500px;
    height: 500px;
  }

  .productInfo select {
    margin-right: 10px;
    border: 1px solid;
    padding: 0.8em 0.5em;
  }
  .productKind {
    font-weight: 100;
    font-size: 15px;
  }

  .infoDetail {
    margin: 50px;
  }

  .payButton {
    width: 300px;
    margin-left: 50px;
    height: 50px;
    backgroud-color: beige;
    border-style: none;
    border-radius: 10px;
    display: block;
    margin-top: 10px;
    a {
      text-decoration-line: none;
      color: black;
    }
  }
  del {
    color: grey;
    font-weight: 200;
  }
  /////////////////
  h3 {
    margin-left: 50px;
  }
  hr {
    width: 920px;
    margin: 0px 0px 0px 40px;
  }
  table {
    width: 920px;
    // margin-left: 40px;
  }
`;

export default StyledProductForm;
