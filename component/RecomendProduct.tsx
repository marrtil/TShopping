import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import StyledRecommend from "./styles/StyledRecommend";

type categoryManT = {
  [index: string]: string;
  Mmanman: string;
  Mpants: string;
  Moutter: string;
  Mtshirts: string;
  Mneet: string;
  Mdenim: string;
};
type categoryWomenT = {
  [index: string]: string;
  Fcardigan: string;
  Fdress: string;
  Foutter: string;
  FAcce: string;
  Fshirts: string;
  Fpants: string;
  Ftshirts: string;
};
type UserInfo = {
  userId: string;
  nickname: string;
  password: string;
  email: string;
  gender: string;
};

const categoryMan: categoryManT = {
  Mmanman: "맨투맨,후드티",
  Mpants: "팬츠",
  Moutter: "아우터",
  Mtshirts: "티셔츠,탑",
  Mneet: "니트,가디건,스웨터",
  Mdenim: "데님",
};
const categoryWomen: categoryWomenT = {
  Fcardigan: "가디건,풀오버",
  Fdress: "드레스",
  Foutter: "아우터",
  FAcce: "악세서리",
  Fshirts: "셔츠",
  Fpants: "팬츠",
  Ftshirts: "티셔츠,탑",
};

const RecomendProduct = ({userInfo}:any) => {
 
  
  return (
    <StyledRecommend>
      {userInfo ? (
        userInfo.gender == "M" ? (
          Object.keys(categoryMan).map((value) => {
            return (
              <div className="recommend">
                <a href={`/productList?gender=남성&kind=${categoryMan[value]}`}>
                  <img src={`http://localhost:3001/image/${value}.png`} />
                </a>
              </div>
            );
          })
        ) : (
          Object.keys(categoryWomen).map((value) => {
            return (
              <div className="recommend">
                <a href={`/productList?gender=여성&kind=${categoryWomen[value]}`}>
                  <img src={`http://localhost:3001/image/${value}.png`} />
                </a>
              </div>
            );
          })
        )
      ) : (
        <div id="empty">
          <p>로그인 하시면 추천 목록이 생성됩니다!!</p>
        </div>
      )}
    </StyledRecommend>
  );
};

export default RecomendProduct;
