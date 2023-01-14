import styled from "styled-components";

const StyledBody = styled.div`
  width: 1200px;
  img {
    width: 500px;
    height: 300px;
    position: relative;
    transition: all 1s;
  }
  #btn1 {
    left: 436px;
    top: 566px;
    height: 30px;
    color: white;
    background-color: black;
    position: absolute;
  }
  #btn2 {
    left: 460px;
    top: 566px;
    height: 30px;
    color: white;
    background-color: black;
    position: absolute;
    text-align: center;
  }
  #btn3 {
    left: 484px;
    top: 566px;
    height: 30px;
    color: white;
    background-color: black;
    position: absolute;
  }
  height: 1300px;

  #cartForm {
    display: flex;
  }

  #cartTable {
    width: 700px;
  }
  #bill {
    width: 350px;
    bottom: 100px;
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
    width: 80px;
    text-align: center;
  }

  .cartImage {
    display: flex;
    height: 300px;
    vertical-align: middle;
    flex-direction: column;
    text-align: center;
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
  }
`;

export default StyledBody;
