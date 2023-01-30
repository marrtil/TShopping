import * as React from "react";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getUser, getUserInfo, loginCheck_process, logOut_process } from "./component/api";
import Footer from "./component/Footer";
import Header from "./component/Header";
import JoinForm from "./component/JoinForm";
import LoginForm from "./component/LoginForm";

const App: FC = () => {
  const session = window.sessionStorage;
  const [userId, setUserId] = React.useState<string>(session.getItem("userId") as string);

  const handleLogin = (userId: string) => {
    session.setItem("userId", userId);
    setUserId(session.getItem("userId") as string);
  };
  const handleLoad = async () => {
    console.log(await loginCheck_process());
  };

  React.useEffect(() => {
    // handleLoad();
  }, []);
  const handleLogout = async () => {
    session.clear();
    setUserId("");
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
                <Header userId={userId} handleLogout={handleLogout} />
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
