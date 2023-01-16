import styled from "styled-components";

const StyledProductForm = styled.div`
  #productForm {
    display: flex;
  }

  .productImage {
    width: 500px;
    height: 500px;
  }
  .productImage img {
    width: 400px;
    height: 400px;
  }

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
  }
`;

export default StyledProductForm;
