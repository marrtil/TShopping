import styled from "styled-components";

const StyledTable = styled.table`
  width: 1000px;
  text-align: center;
  border-collapse: collapse;
  border-bottom: 1px solid rgb(120, 120, 120);

  .infoTd {
    width: 200px;
  }

  .stateTd {
    width: 250px;
  }

  #reviewTextArea {
    width: 100%;
  }
  #reviewTr td {
    // border-top: 1px solid rgb(120, 120, 120);
    height: 60px;
    vertical-align: middle;
  }
`;
export default StyledTable;
