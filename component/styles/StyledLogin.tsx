import styled from "styled-components";

const StyledLogin = styled.div`
  text-align: center;
  .loginForm {
    display: inline-block;
    margin: 30px;
    border: 1px solid rgb(230, 230, 230);
    padding: 30px 10px 10px 10px;
    text-align: center;
    width: 300px;
    height: 400px;

    #loginTitle {
      font-size: 26px;
      margin-bottom: 30px;
    }

    .loginInput {
      border: 1px solid rgb(160, 160, 160);
      width: 250px;
      height: 40px;
      border-radius: 2px;
      font-size: 17px;
    }
    .loginBtn {
      margin: 30px 0px 20px 0;
      width: 255px;
      height: 40px;
      border: 1px solid rgb(220, 220, 220);
      background-color: rgb(220, 220, 220);
      border-radius: 2px;
      :hover {
        cursor: pointer;
      }
    }
    hr {
      width: 100%;
      border: 1px solid rgb(220, 220, 220);
      margin-bottom: 20px;
    }
    .joinAnchor {
      text-decoration: none;
      color: rgb(120, 120, 120);
    }
  }
`;

export default StyledLogin;
