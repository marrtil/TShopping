import * as React from "react";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { logOut_process } from "./component/api";
import Footer from "./component/Footer";
import Header from "./component/Header";
import JoinForm from "./component/JoinForm";
import LoginForm from "./component/LoginForm";

const App: FC = () => {
  const session = window.sessionStorage;
  const [userInfo, setuserInfo] = React.useState<any>(JSON.parse(session.getItem("userInfo")!));

  const handleLogin = async (loginInfo: any) => {
    session.setItem("userInfo", JSON.stringify(loginInfo));
    await setuserInfo(loginInfo);
  };

  console.log(userInfo);

  const handleLogout = async () => {
    session.removeItem("userInfo");
    setuserInfo("");
    await logOut_process();
  };

  const testDel = async () => {
    await fetch(`http://localhost:3001/order/cart/allDel`, {
      method: "delete",
    });
  };

  return (
    <>
      <BrowserRouter>
        <button onClick={testDel}>테스트</button>
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
