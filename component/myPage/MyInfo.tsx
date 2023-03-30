import * as React from "react";
import { Link } from "react-router-dom";
import { User, UserInfo } from "../Types";
import StyledMyInfo from "./StyledMyInfo";

function MyInfo({ userInfo }: { userInfo: UserInfo }) {
  return (
    <StyledMyInfo>
      <table>
        <tr>
          <td className="infoName">아이디</td>
          <td className="infoSlash">|</td>
          <td className="infoValue">{userInfo.userId}</td>
        </tr>
        <tr>
          <td className="infoName">닉네임</td>
          <td className="infoSlash">|</td>
          <td className="infoValue">{userInfo.nickname}</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td className="toModFormLink">
            <Link to="modForm">정보변경</Link>
          </td>
        </tr>
      </table>
      <hr />
    </StyledMyInfo>
  );
}

export default MyInfo;
