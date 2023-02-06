import styled from "styled-components";

const StyledGrid = styled.div`
  margin-left: 300px;
  .listTitle {
    display: flex;
    height: 80px;
    justify-content: space-between;
    align-items: flex-end;
    padding-right: 13%;
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
    width: 87%;
  }

  img {
    width: 500px;
    height: 300px;
    position: relative;
    transition: all 1s;
    border-radius: 10px;
  }

  .Recomend {
    margin-top: 50px;
  }

  .RecomendProduct {
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .RecomendProduct strong {
    display:block;
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
