import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/custom.css";
import "./utils/firebase";

import { RecoilRoot } from "recoil";

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById("root")
);
