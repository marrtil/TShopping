import styled from "styled-components";

const StyledJoin = styled.div`
  text-align: center;
  background-color: rgb(230, 230, 230);
  // width: 1000px;
  height: 1200px;
  padding: 50px 0 0 0;

  .joinForm {
    display: inline-block;
    width: 600px;
  }
  p {
    color: rgb(50, 50, 50);
    font-size: 18px;
    padding-left: 50px;
    text-align: left;
    // display: inline-block;
    margin: 35px 0 0 0;
  }
  .joinInput {
    border: 1px solid rgb(200, 200, 200);
    padding: 0 0 0 10px;
    width: 500px;
    height: 45px;
    margin-top: 5px;
    font-size: 18px;
  }

  #idCheck {
    margin-top: 5px;
    color: rgb(250, 100, 100);
    font-size: 14px;
  }
  #passwordCheck {
    margin-top: 5px;
    color: rgb(250, 100, 100);
    font-size: 14px;
  }

  #joinSubmit {
    margin-top: 50px;
    border: 0px;
    width: 510px;
    height: 50px;
    :hover {
      cursor: pointer;
    }
  }
`;

export default StyledJoin;
