import * as React from "react";
import { FC } from "react";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Header from "./component/Header";

const App: FC = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default App;
