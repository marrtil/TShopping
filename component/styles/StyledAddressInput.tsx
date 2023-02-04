import styled from "styled-components";

const StyledAddressInput = styled.div`
  padding: 30px;

  h3 {
    margin-top: 0px;
    margin-bottom: 40px;
  }
  select {
    height: 25px;
    padding-left: 5px;
  }
  input {
    height: 20px;
    padding-left: 5px;
  }
  .telNo {
    width: 40px;
  }
  strong {
    font-size: 15px;
    display: inline-block;
    width: 150px;
    height: 60px;
  }
  .addressStrong {
    position: relative;
    top: -25px;
  }
  .addressDiv {
    display: inline-block;
    height: 60px;
    input {
      width: 100px;
      margin: 0 20px 5px 0;
    }

    .addressDetailDiv {
      input {
        width: 220px;
      }
    }
  }
`;

export default StyledAddressInput;
