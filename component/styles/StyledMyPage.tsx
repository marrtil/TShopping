import styled from "styled-components";

const StyledMyPage = styled.div`
  width: 100%;
  height: 1200px;
  display: flex;

  #myPageMenuDiv {
    width: 230px;
    padding: 20px;
    margin-right: 15px;
    ul {
      list-style: none;
      margin: 0px;
      padding-left: 20px;
    }
    li {
      margin-left: 10px;
      margin: 25px 0px 25px 0px;
      a {
        font-weight: bold;
        color: rgb(90, 90, 90);
        font-size: 20px;
        text-decoration: none;
      }
      a: hover {
        color: rgb(60, 60, 250);
      }
    }
  }
`;

export default StyledMyPage;
