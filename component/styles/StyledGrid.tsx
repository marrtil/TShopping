import styled from "styled-components";

const StyledGrid = styled.div`
  .listTitle {
    display: flex;
    height: 80px;
    justify-content: space-between;
    align-items: flex-end;
    padding-right: 34%;
    h2 {
      // width: 200px;
      // height: 30px;
      margin: 30px 0 0 10px;
    }
    div {
      // margin-top: 60px;
      width: 250px;
      // height: 30px;
    }
  }
  #hrDivider {
    width: 66%;
  }

  img {
    width: 500px;
    height: 300px;
    position: relative;
    transition: all 1s;
  }

  .Recomend {
    margin-top: 50px;
  }

  .RecomendProduct {
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .RecomendProduct p {
    text-decoration-line: none;
    color: black;
  }

  .RecomendProduct img {
    width: 250px;
  }

  #RecomendLink {
    text-decoration-line: none;
    color: white;
  }
`;

export default StyledGrid;
