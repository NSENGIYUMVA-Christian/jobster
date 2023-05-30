import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "normalize.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);
