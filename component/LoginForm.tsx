import * as React from "react";
import { useState } from "react";
import { login_process } from "./api";
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

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (await login_process({ userId: loginInfo.userId, password: loginInfo.password })) navi("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogout = () => {
    sessionStorage.clear();
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
        <hr></hr>
        <a className="joinAnchor" href="#">
          회원가입
        </a>
      </form>
    </StyledLogin>
  );
};

export default LoginForm;
