import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { modMember, passwordCheck_process } from "../api";
import { checkSpace } from "../funtion";
import { InputName } from "../Types";
import ModConfirmer from "./ModConfirmer";
import StyledMyInfo from "./styles/StyledMyInfo";

interface SetUser {
  [index: string]: string;
  password: string;
  passwordCheck: string;
  nickname: string;
  email: string;
}

const INITIAL_VALUES: SetUser = {
  password: "",
  passwordCheck: "",
  nickname: "",
  email: "",
};

export interface modInfo {
  nickname: string;
  password: string;
}

const inputName: InputName = {
  userId: "아이디",
  name: "이름",
  password: "비밀번호",
  passwordCheck: "비밀번호 확인",
  email: "이메일",
};

function ModForm({ userInfo }: any) {
  const [modData, setModData] = useState(INITIAL_VALUES);
  const [confirmColor, setConfirmColor] = useState<boolean>(false);
  const [confirmText, setConfirmText] = useState<number>(-1);
  const [confirmColorP, setConfirmColorP] = useState<boolean>(false);
  const [confirmTextP, setConfirmTextP] = useState<number>(-1);
  const navi = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const passwordCheck = async () => {
    const check = modData.password;
    if (check.length < 4 || check.length > 12) {
      setConfirmColor(false);
      setConfirmText(0);
    } else if (checkSpace(check)) {
      setConfirmColor(false);
      setConfirmText(1);
    } else {
      setConfirmColor(true);
      setConfirmText(2);
    }
  };
  const passCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    if (modData.passwordCheck !== null) {
      if (e.target.value == modData.password) {
        setConfirmColorP(true);
        setConfirmTextP(3);
      } else if (e.target.value == "") setConfirmColor(false);
      else {
        setConfirmColorP(false);
        setConfirmTextP(4);
      }
    }
  };
  const handleModSubmit = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    const inputs = Object.keys(modData);
    for (let i = 0; i < inputs.length; i++) {
      if (modData[inputs[i]] == "") {
        alert(`${inputName[inputs[i]]}을 입력해주세요`);
        // e.preventDefault();
        break;
      } else if (!confirmColorP) {
        alert("비밀번호를 확인해 주세요!!");
        // e.preventDefault();
        break;
      }
    }
    await modMember(userInfo.userId, {
      nickname: modData.nickname,
      password: modData.password,
    });
  };
  return (
    <StyledMyInfo>
      <table>
        <tr>
          <td className="infoName">아이디</td>
          <td className="infoSlash">|</td>
          <td className="infoValue">{userInfo.userId}</td>
        </tr>
        <tr>
          <td className="infoName">비밀번호</td>
          <td className="infoSlash">|</td>
          <td className="infoValue">
            <input name="password" onChange={handleChange} onBlur={passwordCheck} />
          </td>
        </tr>
        <tr>
          <td />
          <td colSpan={2}>{modData.password ? <ModConfirmer colors={confirmColor} text={confirmText} /> : ""}</td>
        </tr>
        <tr>
          <td className="infoName">비밀번호 확인</td>
          <td className="infoSlash">|</td>
          <td className="infoValue">
            <input name="passwordCheck" onChange={passCheck} onBlur={passCheck} />
          </td>
        </tr>
        <tr>
          <td />
          <td colSpan={2}>
            {modData.password && modData.passwordCheck ? (
              <ModConfirmer colors={confirmColorP} text={confirmTextP} />
            ) : (
              ""
            )}
          </td>
        </tr>
        <tr>
          <td className="infoName">닉네임</td>
          <td className="infoSlash">|</td>
          <td className="infoValue">
            <input name="nickname" onChange={handleChange} /> <button>중복체크</button>
          </td>
        </tr>
        <tr>
          <td className="infoName">이메일</td>
          <td className="infoSlash">|</td>
          <td className="infoValue">
            <input name="email" type="email" onChange={handleChange} />
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td className="toModFormLink">
            <a href="/" onClick={handleModSubmit} id="modSubmit">
              확인
            </a>
          </td>
        </tr>
      </table>
      <hr />
    </StyledMyInfo>
  );
}

export default ModForm;
