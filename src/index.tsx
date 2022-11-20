import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import App from "./pages";
import { darkTheme } from "./themes";

ReactDOM.render(
  <BrowserRouter>
    <NextUIProvider theme={darkTheme}>
      <App />
    </NextUIProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
