import styled from "styled-components";

const StyledMyInfo = styled.div`
  padding: 25px;
  width: 100%;
  table {
    width: 100%;
    text-align: center;
  }
  .infoName {
    // text-align: center;
    width: 20%;
    font-size: 18px;
    padding: 10px;
  }
  .infoSlash {
  }
  .infoValue {
    text-align: left;
    width: 75%;
    font-size: 18px;
    padding: 10px;
  }
  .toModFormLink {
    text-align: left;
    padding: 10px;
    a {
      text-decoration: none;
      color: black;
    }
    a: hover {
      color: rgb(60, 60, 250);
    }
  }
`;

export default StyledMyInfo;
