import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "Redux/app/store";
import { Provider } from "react-redux";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./assets/styles/main.css";
import "./assets/styles/responsive.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
