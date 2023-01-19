import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { modMember } from "../api";
import FileInput from "../FileInput";
import { InputName } from "../Types";
import StyledMyInfo from "./StyledMyInfo";

function MyInfo() {
  // let l1 = document.getElementById("myInfoLink");
  // l1!.style.color = "black";
  return (
    <StyledMyInfo>
      <table>
        <tr>
          <td className="infoName">아이디</td>
          <td className="infoSlash">|</td>
          <td className="infoValue">idvalue</td>
        </tr>
        <tr>
          <td className="infoName">닉네임</td>
          <td className="infoSlash">|</td>
          <td className="infoValue">nicknamevalue</td>
        </tr>
        <tr>
          <td className="infoName">이메일</td>
          <td className="infoSlash">|</td>
          <td className="infoValue">emailvalue</td>
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
