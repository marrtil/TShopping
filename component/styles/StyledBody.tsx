import styled from "styled-components";

const StyledBody = styled.div`
  width: 1000px;
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

  .Recomend {
    margin-top: 50px;
  }

  .RecomendProduct {
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .RecomendProduct p {
    text-decoration-line: none;
    color: black;
  }

  .RecomendProduct img {
    width: 250px;
  }

  #RecomendLink {
    text-decoration-line: none;
    color: white;
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
    width: 100px;
    text-align: center;
  }
  .cartCount {
    width: 100px;
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
`;

export default StyledBody;
