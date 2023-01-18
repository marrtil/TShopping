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
    font-weight:800;
  }
  .productName {

  }
  .cartExplain{
    color:grey;
    font-weight:100;
    font-size:14px;
  }

  #productInfo {
    text-align: center;
  }

  #cartTable {
    margin-left: 120px;
  }

  #cartTitle {
    text-align: center;
  }



  .cartList input {
    width: 20px;
    height:20px;
    text-align:center;
    border:2px solid beige;
    font-size:17px;
    font-weight:50;
  }
  .btnPM {
    background-color: beige;
    border:1px solid beige;
    height: 25px;
    width: 40px;
    font-size:17px;
  }


  .cartPrice {
    width: 80px;
    text-align: center;
    font-weight:600;
  }

  .total{
    text-align:center;
    font-weight:600;
  }


  .cartCount {
    width: 200px;
    text-align: center;
    vertical-align:middle;
  }

  .cartImage {
    display: flex;
    height: 165px;
    vertical-align: middle;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
  }

  .cartImage img {
    width: 150px;
    height: 150px;
    vertical-align: middle;
  }

  .center {
    text-align: center;
  }

  .deleter:hover {
    cursor: Pointer;
  }

  

  ///////////////////// bill ///////////////////////

  #bill {
    width: 350px;
    bottom: 100px;
    margin-top: 50px;
    
  }
    .billMenu {
      margin-bottom: 10px;
    }

    .bill-border {
      width: 300px;
      margin-left: 1px;
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

    #payButton {
      width: 200px;
      margin-left: 50px;
      height: 50px;
      backgroud-color: beige;
      border-style: none;
      border-radius: 10px;
      display: block;
    }
  }
`;

export default StyleCartForm;
