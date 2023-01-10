import * as React from "react";
import { FC } from "react";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Header from "./component/Header";
import LinkMatcher from "./component/LinkMatcher";

const App: FC = () => {
  return (
    <>
      <Header />
      {/* <LinkMatcher /> */}
      <Footer />
    </>
  );
};

export default App;
