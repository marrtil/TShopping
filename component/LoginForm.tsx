import * as React from "react";
import StyledBody from "./styles/StyledBody";
import { useEffect, useState } from "react";
import { getUser } from "./api";
import StyledLogin from "./styles/StyledLogin";
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
  const [login, setLogin] = useState<LOGIN_INFO | boolean>(false);
  const [loginInfo, setLoginInfo] = useState(LOGIN_INFO);
  let sessionStorage = window.sessionStorage;
  const [login2, setLogin2] = useState<string | boolean | null>(sessionStorage.getItem("userId"));

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLogin(await getUser({ userId: loginInfo.userId, password: loginInfo.password }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogout = () => {
    // onLoad();
    sessionStorage.clear();
    setLogin(false);
    setLogin2(false);
  };

  // handleLoad();
  useEffect(() => {
    // console.log(await test());
    if (login) {
      if (typeof login !== "boolean") {
        sessionStorage.setItem("userId", login.userId);
        setLogin2(sessionStorage.getItem("userId"));
        // sessionStorage.setItem("userInfo", login.id);
        // onLogin(sessionStorage.getItem("userId"));
      }
    }

    return () => {
      // sessionStorage.clear();
      // setLogin(false);
    };
  }, [login, sessionStorage]);
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
