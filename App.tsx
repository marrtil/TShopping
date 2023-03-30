import * as React from "react";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { logOut_process } from "./component/api";
import Footer from "./component/Footer";
import Header from "./component/Header";
import JoinForm from "./component/JoinForm";
import LoginForm from "./component/LoginForm";
import { UserInfo, INITIAL_USERINFO } from "./component/Types";

const App: FC = () => {
  const session = window.sessionStorage;
  const [userInfo, setuserInfo] = React.useState<UserInfo>(
    JSON.parse(session.getItem("userInfo")!) || INITIAL_USERINFO
  );

  const handleLogin = async (loginInfo: UserInfo) => {
    session.setItem("userInfo", JSON.stringify(loginInfo));
    await setuserInfo(loginInfo);
  };

  const handleLogout = async () => {
    session.removeItem("userInfo");
    setuserInfo(INITIAL_USERINFO);
    await logOut_process();
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/join" element={<JoinForm />} />
          <Route
            path="/*"
            element={
              <>
                <Header userInfo={userInfo} handleLogout={handleLogout} />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
