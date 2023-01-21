import * as React from "react";
import { useState } from "react";
import { formatDiagnostic } from "typescript";
import StyledJoin from "./styles/StyledJoin";
import { InputName } from "./Types";
// import { getUserInfo, joinMember } from "../api";
const INITIAL_VALUES = {
  userId: "",
  password: "",
  name: "",
  email: "",
};
const inputName: InputName = {
  userId: "아이디",
  name: "이름",
  password: "비밀번호",
  passwordCheck: "비밀번호 확인",
  email: "이메일",
};
function JoinForm() {
  const [joinData, setJoinData] = useState(INITIAL_VALUES);
  const [idConfrim, setIdConfirm] = useState(false);
  const [passConfirm, setPassConfirm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJoinData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleJoinSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const inputs = document.querySelectorAll(".joinInput") as NodeListOf<HTMLInputElement>;
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value == "") {
        alert(`${inputName[inputs[i].name]}을 입력해주세요`);
        e.preventDefault();
        break;
      } else if (!idConfrim) {
        alert("사용할 수 없는 아이디입니니다.");
        e.preventDefault();
        break;
      } else if (!passConfirm) {
        alert("비밀번호를 확인해 주세요!!");
        e.preventDefault();
        break;
      }
    }

    const formData = new FormData();
    formData.append("userId", joinData.userId);
    formData.append("password", joinData.password);
    formData.append("name", joinData.name);
    formData.append("email", joinData.email);
    formData.append("tag", "Front");
    formData.append("imageUrl", "");
    try {
      // await joinMember(formData);
    } catch (error) {
      console.log(error);
    }
  };
  function checkSpace(str: string) {
    if (str.search(/\s/) != -1) {
      return true;
    } else {
      return false;
    }
  }

  function checkSpecial(str: string) {
    var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

    if (special_pattern.test(str) == true) {
      return true;
    } else {
      return false;
    }
  }
  const idCheck = async () => {
    const check = joinData.userId;
    const checkText = document.querySelector("#idCheck") as HTMLParagraphElement;
    joinData.userId;
    // const check = await getUserInfo(joinData.userId);
    // if (check.userId) {

    if (check.length < 5) {
      checkText.textContent = "아이디는 5글자 이상이어야 합니다.";
      checkText.style.color = "red";
    } else if (checkSpace(check) || checkSpecial(check)) {
      checkText.textContent = "공백 또는 특수문자(!,@,#,$...)가 포함될 수 없습니다.";
      checkText.style.color = "red";
    } else if (check === "marrtil") {
      setIdConfirm(false);
      checkText.textContent = "이미 사용중이거나 탈퇴한 아이디입니다.";
      checkText.style.color = "red";
    } else {
      setIdConfirm(true);
      checkText.textContent = "사용 가능한 이이디입니다.";
      checkText.style.color = "green";
    }
  };

  const passCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkText: HTMLElement | null = document.getElementById("passwordCheck");
    if (checkText !== null) {
      if (e.target.value == joinData.password) {
        checkText.innerText = "비밀번호가 일치합니다.";
        setPassConfirm(true);
        checkText.style.color = "Green";
      } else if (e.target.value == "") setPassConfirm(false);
      else {
        checkText.innerText = "비밀번호가 일치하지 않습니다!!";
        setPassConfirm(false);
        checkText.style.color = "red";
      }
    }
  };

  return (
    <StyledJoin>
      <form onSubmit={handleJoinSubmit} className="joinForm" action="/">
        <p>아이디</p>
        <input name="userId" onChange={handleChange} className="joinInput" onBlur={idCheck} />
        <p id="idCheck"></p>
        <p>비밀번호</p>
        <input name="password" type="password" onChange={handleChange} className="joinInput" />
        <p>비밀번호 확인</p>
        <input name="passwordCheck" type="password" onChange={passCheck} className="joinInput" />
        <p id="passwordCheck"></p>
        <p>이름</p>
        <input name="name" onChange={handleChange} className="joinInput" />
        <p>이메일</p>
        <input type="email" name="email" onChange={handleChange} className="joinInput" />
        <br></br>
        <button type="submit" id="joinSubmit">
          가입하기
        </button>
      </form>
    </StyledJoin>
  );
}

export default JoinForm;
