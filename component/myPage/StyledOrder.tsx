import styled from "styled-components";

const StyledOrder = styled.div`
  .alignRight {
    text-align: right;
  }
  .displayFlexBetween {
    display: flex;
    justify-content: space-between;
  }

  a {
    color: rgb(80, 80, 80);
    text-decoration: none;
    margin-right: 5px;
    :hover {
      color: blue;
      cursor: pointer;
    }
  }

  table {
    width: 1000px;
    text-align: center;
    border-collapse: collapse;
  }

  padding-top: 20px;
  #orderTitle {
    font-size: 20px;
    padding-bottom: 10px;
  }

  .orderSort {
    margin-left: 10px;
  }
  .orderAll {
    margin-right: 5px;
  }
`;

export default StyledOrder;
