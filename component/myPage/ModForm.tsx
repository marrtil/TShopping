import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { modMember, passwordCheck_process } from "../api";
import { checkSpace } from "../funtion";
import { InputName, UserInfo } from "../Types";
import StyledMyInfo from "./styles/StyledMyInfo";

interface SetUser {
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

const inputName: InputName = {
  userId: "아이디",
  name: "이름",
  password: "비밀번호",
  passwordCheck: "비밀번호 확인",
  email: "이메일",
};

function ModForm({ userInfo }: { userInfo: UserInfo }) {
  const [modData, setModData] = useState(INITIAL_VALUES);
  const [passConfirm, setPassConfirm] = useState(false);
  const navi = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const passwordCheck = async () => {
    const { userId } = userInfo;
    const check = modData.password;
    const checkText = document.querySelector("#passwordCheckText") as HTMLParagraphElement;

    if (check.length < 4 || check.length > 12) {
      checkText.textContent = "패스워드는 4~12글자 이내이어야 합니다.";
      checkText.style.color = "red";
    } else if (checkSpace(check)) {
      checkText.textContent = "공백이 포함될 수 없습니다.";
      checkText.style.color = "red";
    } else {
      setPassConfirm(true);
      checkText.textContent = "사용 가능한 비밀번호입니다.";
      checkText.style.color = "green";
    }
  };
  const passCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkText = document.getElementById("passwordCheckText2") as HTMLParagraphElement;
    if (checkText !== null) {
      if (e.target.value == modData.password) {
        checkText.textContent = "비밀번호가 일치합니다.";
        setPassConfirm(true);
        checkText.style.color = "Green";
      } else if (e.target.value == "") setPassConfirm(false);
      else {
        checkText.textContent = "비밀번호가 일치하지 않습니다!!";
        setPassConfirm(false);
        checkText.style.color = "red";
      }
    }
  };
  const handleModSubmit = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    const inputs = document.querySelectorAll(".joinInput") as NodeListOf<HTMLInputElement>;
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value == "") {
        alert(`${inputName[inputs[i].name]}을 입력해주세요`);
        // e.preventDefault();
        break;
      } else if (!passConfirm) {
        alert("비밀번호를 확인해 주세요!!");
        // e.preventDefault();
        break;
      }
    }
    await modMember(userInfo.userId, { nickname: modData.nickname, password: modData.password });
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
          <td colSpan={2}>
            <p id="passwordCheckText"></p>
          </td>
        </tr>
        <tr>
          <td className="infoName">비밀번호 확인</td>
          <td className="infoSlash">|</td>
          <td className="infoValue">
            <input name="passwordCheck" onChange={handleChange} onBlur={passCheck} />
          </td>
        </tr>
        <tr>
          <td />
          <td colSpan={2}>
            <p id="passwordCheckText2"></p>
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
