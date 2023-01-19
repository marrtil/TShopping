import * as React from "react";
import { useState, useEffect } from "react";
// import { modMember } from "../api";
import FileInput from "../FileInput";
// import "./ModForm.css";
import axios from "axios";
import { InputName } from "../Types";
import StyledMyInfo from "./StyledMyInfo";

interface SetUser {
  password: string;
  name: string;
  email: string;
  imageUrl: string | any;
  imageFile: string | any;
}

const INITIAL_VALUES: SetUser = {
  password: "",
  name: "",
  email: "",
  imageUrl: null,
  imageFile: null,
};

const inputName: InputName = {
  userId: "아이디",
  name: "이름",
  password: "비밀번호",
  passwordCheck: "비밀번호 확인",
  email: "이메일",
};

function MyInfo() {
  return (
    <StyledMyInfo>
      <table>
        <tr>
          <td className="infoName">아이디</td>
          <td className="infoSlash">|</td>
          <td className="infoValue">idvalue(고정)</td>
        </tr>
        <tr>
          <td className="infoName">비밀번호</td>
          <td className="infoSlash">|</td>
          <td className="infoValue">
            <input />
          </td>
        </tr>
        <tr>
          <td className="infoName">비밀번호 확인</td>
          <td className="infoSlash">|</td>
          <td className="infoValue">
            <input />
            <div id="passwordCheckDiv"> 일치/불일치 </div>
          </td>
        </tr>
        <tr>
          <td className="infoName">닉네임</td>
          <td className="infoSlash">|</td>
          <td className="infoValue">
            <input /> <button>중복체크</button>
          </td>
        </tr>
        <tr>
          <td className="infoName">이메일</td>
          <td className="infoSlash">|</td>
          <td className="infoValue">
            <input />
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td className="toModFormLink">
            <a href="#">확인</a>
          </td>
        </tr>
      </table>
      <hr />
    </StyledMyInfo>
  );
}

export default MyInfo;
