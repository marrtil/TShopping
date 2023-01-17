import styled from "styled-components";

const StyleCartForm = styled.div`
  #cartForm {
    display: flex;
  }
  th {
    border-bottom: 1px;
  }
  .tdSpace {
    height: 100px;
  }

  .cartName {
    width: 200px;
    padding-bottom: 70px;
  }
  .productName {
    padding-bottom: 50px;
  }

  #productInfo {
    text-align: center;
  }

  #cartTable {
    width: 700px;
    margin-left: 120px;
  }
  #bill {
    width: 350px;
    bottom: 100px;
    margin-left: 50px;
  }

  #cartTitle {
    text-align: center;
  }

  .cartList input {
    width: 15px;
  }
  .cartList button {
    text-align: center;
  }

  .cartPrice {
    width: 80px;
    text-align: center;
  }
  .cartCount {
    width: 120px;
    text-align: center;
  }

  .cartImage {
    display: flex;
    height: 200px;
    vertical-align: middle;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
  }

  .cartImage img {
    width: 200px;
    height: 200px;
    vertical-align: middle;
  }

  .center {
    text-align: center;
  }

  .deleter:hover {
    cursor: Pointer;
  }

  #bill {
    margin-top: 50px;
  }

  .space,
  .price {
    display: inline-block;
    width: 100px;
  }

  .price2 {
    display: inline-block;
    width: 100px;
    text-align: right;
  }

  .billMenu {
    margin-bottom: 10px;
  }

  .bill-border {
    width: 300px;
    margin-left: 1px;
  }

  #payButton {
    width: 200px;
    margin-left: 50px;
    height: 50px;
    backgroud-color: beige;
    border-style: none;
    border-radius: 10px;
    display: block;
  }

  .btnPM {
    background-color: beige;
    border: 0.5px solid;
    height: 21px;
    width: 25px;
  }

  .countInput {
  }
`;

export default StyleCartForm;
