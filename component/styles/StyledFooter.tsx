import styled from "styled-components";

const StyledFooter = styled.div`
  #container {
    background-color: rgb(225, 226, 227);
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    position: relative;
  }

  .container2 {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .icon {
    font-size: 30px;
    display: flex;
    margin-right: 15px;
    flex-direction: column;
    text-align: center;
    vertical-align: middle;
  }

  .icon p {
    font-size: 10px;
  }

  #helper {
    height: 100%;
  }

  .ballon {
    display: none;
    position: absolute;
    width: 205px;
    height: 16px;
    left: 550px;
    bottom: 100px;
    background: #484848;
    color: white;
    border-radius: 5px;
    padding: 12px 12.8px;
  }

  .ballon:after {
    border-top: 10px solid #484848;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0px solid transparent;
    content: "";
    position: absolute;
    top: 40px;
    left: 160px;
  }

  .ballon2 {
    display: none;
    position: absolute;
    width: 205px;
    height: 16px;
    left: 590px;
    bottom: 100px;
    background: #484848;
    color: white;
    border-radius: 5px;
    padding: 12px 12.8px;
  }

  .ballon2:after {
    border-top: 10px solid #484848;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0px solid transparent;
    content: "";
    position: absolute;
    top: 40px;
    left: 160px;
  }
`;

export default StyledFooter;
