import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./state-manager/store";
import "./index.scss";
import AppRouter from "./AppRouter";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
