import styled from "styled-components";

const StyledBody = styled.div`
  width: 1200px;
  height: 1300px;

  #buttons {
    left: 706px;
    top: 270px;
    position: relative;
    button {
      color: white;
      background-color: black;
      height: 30px;
    }
  }

  #banner {
    margin-left: 300px;
    background-size: 100% 100%;
    width: 780px;
    height: 300px;
    transition: all 1s;
    border-radius: 5px;
    border: 5px solid beige;
    .imageLink {
      height: 100%;
    }
  }
`;

export default StyledBody;
