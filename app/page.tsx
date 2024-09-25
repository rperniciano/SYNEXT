"use client";

import { Provider } from "react-redux";
import Wrapper from "./landing-page/page";
import store from "./landing-page/redux/store";

export default function Router() {
  return (
    <main>
      <Provider store={store}>
        <Wrapper></Wrapper>
      </Provider>
    </main>
  );
}
