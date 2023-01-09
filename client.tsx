import * as React from "react";
import * as ReactDOM from "react-dom/client";
// import { ThemeProvider } from "styled-components";
// import { theme } from ".component/styles/theme";
import App from "./App";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootEl);
root.render(
  // <ThemeProvider theme={theme}>
  <>
    <App />
  </>
  // </ThemeProvider>
);
