import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./features/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  // wrap provider on everything
  <Provider store={store}>
    <App />
  </Provider>
);
