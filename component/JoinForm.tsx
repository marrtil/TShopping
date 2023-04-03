import * as React from "react";
import { useState } from "react";
import { join_process, idCheck_process } from "./api";
import Confirmer from "./Confirmer";
import { checkSpace, checkSpecial } from "./funtion";
import StyledJoin from "./styles/StyledJoin";
import { InputName } from "./Types";
// import { getUserInfo, joinMember } from "../api";
const INITIAL_VALUES = {
  userId: "",
  password: "",
  name: "",
  email: "",
  gender: "",
  passwordCheck: "",
};

type joinDatas = {
  [index: string]: string;
  userId: string;
  password: string;
  name: string;
  email: string;
  gender: string;
  passwordCheck: string;
};

const inputName: InputName = {
  userId: "아이디",
  name: "이름",
  password: "비밀번호",
  passwordCheck: "비밀번호 확인",
  email: "이메일",
  gender: "성별",
};

function JoinForm() {
  const [joinData, setJoinData] = useState<joinDatas>(INITIAL_VALUES);
  const [confirmColor, setConfirmColor] = useState<boolean>(false);
  const [confirmText, setConfirmText] = useState<number>(-1);
  const [confirmColorP, setConfirmColorP] = useState<boolean>(false);
  const [confirmTextP, setConfirmTextP] = useState<number>(-1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJoinData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleJoinSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const inputs = Object.keys(joinData);
    for (let i = 0; i < inputs.length; i++) {
      if (joinData[inputs[i]] == "") {
        e.preventDefault();
        alert(`${inputName[inputs[i]]}을 입력해주세요`);
        return;
      } else if (!confirmColor) {
        e.preventDefault();
        alert("사용할 수 없는 아이디입니니다.");
        return;
      } else if (!confirmColorP) {
        e.preventDefault();
        alert("비밀번호를 확인해 주세요!!");
        return;
      }
    }
    await join_process({
      userId: joinData.userId,
      nickname: joinData.name,
      password: joinData.password,
      email: joinData.email,
      gender: joinData.gender,
    });
  };

  const idCheck = async () => {
    const check = joinData.userId;
    joinData.userId;
    // const check = await getUserInfo(joinData.userId);
    // if (check.userId) {
    if (check.length < 5) {
      setConfirmColor(false);
      setConfirmText(0);
    } else if (checkSpace(check) || checkSpecial(check)) {
      setConfirmColor(false);
      setConfirmText(1);
    } else if (await idCheck_process(check)) {
      setConfirmColor(false);
      setConfirmText(2);
    } else {
      setConfirmColor(true);
      setConfirmText(3);
    }
  };

  const passCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    if (joinData.passwordCheck !== null) {
      if (e.target.value == joinData.password) {
        setConfirmColorP(true);
        setConfirmTextP(4);
      } else if (e.target.value == "") setConfirmColorP(false);
      else {
        setConfirmColorP(false);
        setConfirmTextP(5);
      }
    }
  };

  return (
    <StyledJoin>
      <form onSubmit={handleJoinSubmit} className="joinForm" action="/">
        <p>아이디</p>
        <input
          name="userId"
          onChange={handleChange}
          className="joinInput"
          onBlur={idCheck}
        />
        {joinData.userId.length ? (
          <Confirmer colors={confirmColor} text={confirmText} />
        ) : (
          ""
        )}
        <p>비밀번호</p>
        <input
          name="password"
          type="password"
          onChange={handleChange}
          className="joinInput"
        />
        <p>비밀번호 확인</p>
        <input
          name="passwordCheck"
          type="password"
          onChange={passCheck}
          className="joinInput"
        />
        {joinData.password && joinData.passwordCheck ? (
          <Confirmer colors={confirmColorP} text={confirmTextP} />
        ) : (
          ""
        )}
        <p>이름</p>
        <input name="name" onChange={handleChange} className="joinInput" />
        <p>이메일</p>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="joinInput"
        />
        <p>성별</p>
        남성
        <input type="radio" name="gender" onChange={handleChange} value="M" />
        여성
        <input type="radio" name="gender" onChange={handleChange} value="F" />
        <br></br>
        <button type="submit" id="joinSubmit">
          가입하기
        </button>
      </form>
    </StyledJoin>
  );
}

export default JoinForm;
