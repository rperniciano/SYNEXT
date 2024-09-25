"use client"

import React from "react";
import HomePage from "./home";
import "../../css/style.css";
import { Provider } from "react-redux";
import store from "./redux/store";

const Wrapper = () => {
  return (
    <Provider store={store}>
      <HomePage></HomePage>
    </Provider>
  );
};

export default Wrapper;
