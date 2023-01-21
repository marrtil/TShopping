import * as React from "react";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import JoinForm from "./component/JoinForm";
import LoginForm from "./component/LoginForm";

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/join" element={<JoinForm />} />
          <Route
            path="/*"
            element={
              <>
                <Header />
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
