import * as React from "react";
import { useState } from "react";
import { loginCheck_process, login_process, logOut_process } from "./api";
import StyledLogin from "./styles/StyledLogin";
import { useNavigate } from "react-router";
export interface LOGIN_INFO {
  // id: string;
  userId: string;
  password: string;
}
const LOGIN_INFO: LOGIN_INFO = {
  // id: "",
  userId: "",
  password: "",
};

const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState(LOGIN_INFO);
  const navi = useNavigate();

  const handleLoginCheck = async () => {
    console.log(await loginCheck_process());
    // if (loginCheck_process().userId) {
    //   console.log("로그인된 상태입니다.");
    // } else console.log("로그인 ㄱ");
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (await login_process({ userId: loginInfo.userId, password: loginInfo.password }))
      console.log("###### 로그인 $$$$$$$$$");
    // navi("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogout = async () => {
    await logOut_process();
    // sessionStorage.clear();
  };

  return (
    <StyledLogin>
      <form className="loginForm" onSubmit={handleLogin}>
        <div id="loginTitle">로그인</div>
        <div>
          <input placeholder="  아이디" type="text" name="userId" className="loginInput" onChange={handleChange} />
          <input
            placeholder="  비밀번호"
            type="password"
            name="password"
            className="loginInput"
            onChange={handleChange}
          />
        </div>
        <button className="loginBtn" type="submit">
          로그인
        </button>
        <hr />
        <a className="joinAnchor" href="#">
          회원가입
        </a>
      </form>
      <button className="loginBtn" onClick={handleLogout}>
        로그아웃
      </button>
      <button className="loginBtn" onClick={handleLoginCheck}>
        로그인체크
      </button>
    </StyledLogin>
  );
};

export default LoginForm;
