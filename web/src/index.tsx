import * as React from "react";
import * as ReactDom from "react-dom";
import "./index.css";
import { Hello } from "./componentns/Hello";
import App from "./App";

ReactDom.render(
  // <Hello compiler="Typescript" framework="React"></Hello>,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
