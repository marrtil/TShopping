import * as React from "react";
import { useState, useEffect } from "react";
import { passwordCheck_process } from "../api";
import { checkSpace } from "../funtion";
import { InputName } from "../Types";
import StyledMyInfo from "./StyledMyInfo";

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

function ModForm({ userInfo }: any) {
  const [modData, setModData] = useState(INITIAL_VALUES);
  const [passConfirm, setPassConfirm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const passwordCheck = async () => {
    const { userId } = userInfo;
    const check = modData.password;
    const checkText = document.querySelector("#passwordCheck") as HTMLParagraphElement;
    // const check = await getUserInfo(joinData.userId);
    // if (check.userId) {
    if (check.length < 4 || check.length > 12) {
      checkText.textContent = "패스워드는 4~12글자 이내이어야 합니다.";
      checkText.style.color = "red";
    } else if (checkSpace(check)) {
      checkText.textContent = "공백이 포함될 수 없습니다.";
      checkText.style.color = "red";
    } else if (await passwordCheck_process({ userId: userId, password: check })) {
      setPassConfirm(false);
      checkText.textContent = "이미 사용중인 비밀번호입니다.";
      checkText.style.color = "red";
    } else {
      setPassConfirm(true);
      checkText.textContent = "사용 가능한 비밀번호입니다.";
      checkText.style.color = "green";
    }
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
          <td colSpan={2} />
          <td>
            <p id="passwordCheck"></p>
          </td>
        </tr>
        <tr>
          <td className="infoName">비밀번호 확인</td>
          <td className="infoSlash">|</td>
          <td className="infoValue">
            <input name="passwordCheck" onChange={handleChange} />
            <div id="passwordCheckDiv"> 일치/불일치 </div>
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
            <a href="#">확인</a>
          </td>
        </tr>
      </table>
      <hr />
    </StyledMyInfo>
  );
}

export default ModForm;
