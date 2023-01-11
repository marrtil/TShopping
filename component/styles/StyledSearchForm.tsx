import styled from "styled-components";

const StyledSearchForm = styled.form`
  position: absolute;
  top: 170px;
  right: 30px;
  width: 300px;
  display: flex;
  float: right;
  // margin: 140px 0 0 0;
  text-align: center;
  vertical-align: middle;

  .searchInput {
    display: inline-block;
    position: absolute;
    z-index: 0;
    vertical-align: middle;
    width: 300px;
    height: 40px;
    margin-top: 0px;
    // border: 3px solid rgb(200, 200, 200);
    border-radius: 20px;
    background-color: rgb(200, 200, 200);
  }

  input {
    z-index: 2;
    border: 0px;
    padding: 0px;
    margin-top: 6px;
    font-size: 16px;
    width: 250px;
    height: 30px;
    background-color: rgb(200, 200, 200);
  }

  button {
    margin-top: 4px;
    margin-left: 230px;
    position: absoute;
    border-radius: 16px;
    z-index: 2;
    border: 0px;
    text-decoration: none;
    display: inline-block;
    vertical-align: middle;
    width: 60px;
    height: 32px;
    background-color: white;
    color: rgb(200, 200, 200);
    font-weight: bold;
    font-size: 16px;
  }
`;

export default StyledSearchForm;
