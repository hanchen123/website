/* global document */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configurStore from "./store/configureStore";
import AppContainer from "./containers/AppContainer";

const store = configurStore({});

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root"),
);