import styled from "styled-components";

const StyledMenuBar = styled.div`
  background-color: rgb(230, 230, 230);
  height: 50px;
  width: 100%;
  display: inline-block;
  //   display: table;

  .menuDiv {
    display: none;
    // display: block;
    position: absolute;
    top: 297px;
    background-color: skyblue;
    height: 300px;
    width: 300px;
    // z-index: 4;
  }
  .menu:hover {
    background-color: rgb(200, 200, 200);
    color: black;
    .menuDiv {
      display: block;
    }
  }
  ul {
    // display: table-cell;
    margin-top: 12px;
    height: 30px;
    width: 500px;
    vertical-align: middle;
  }
  li {
    font-size: 20px;
    height: 30px;
    padding: 11px 30px;
    margin-left: 0px;
  }
`;

export default StyledMenuBar;
