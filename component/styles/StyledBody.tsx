import styled from "styled-components";

const StyledBody = styled.div`
  width: 1200px;
  #buttons {
    position: absolute;
    top: 580px;
    left: 586px;

    button {
      color: white;
      background-color: black;
      height: 30px;
    }
  }

  height: 1300px;

  #banner {
    margin-left: 150px;
    img {
      width: 500px;
      height: 300px;
      position: relative;
      transition: all 1s;
      border-radius: 5px;
      border: 5px solid beige;
    }
  }
`;

export default StyledBody;
