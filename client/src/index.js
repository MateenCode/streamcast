import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from "./helpers/history";

import App from "App";

import store from "stores";

import "sass/main.scss";

import registerServiceWorker from "registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.querySelector("#root")
);

registerServiceWorker();
