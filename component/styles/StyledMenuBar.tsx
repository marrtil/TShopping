import styled from "styled-components";

const StyledMenuBar = styled.div`
  background-color: rgb(230, 230, 230);
  height: 50px;
  width: 100%;
  display: inline-block;
  text-align: center;
  padding-left: 250px;

  .allMenu li:hover {
    background-color: rgb(200, 200, 200);
    color: black;
  }

  .menuUl {
    display: none;
    position: absolute;
    top: 281px;
    background-color: rgb(200, 200, 200);
    height: 400px;
    width: 50%;
    z-index: 4;
    float: left;
    text-align: center;
  }

  .gender {
    display: inline-block;
    text-align: center;
    margin-right: 40px;
    vertical-align: middle;
  }

  .menu:hover {
    .menuUl {
      display: block;
    }
  }

  ul hr {
    width: 30px;
    height: 1px;
    background-color: black;
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
