/* global process */

import React from "react";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import DevTools from "./DevTools";
import Router from "../router";
import Header from "../components/Header";

const history = createHistory();

class AppContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const isDev = process.env.NODE_ENV === "development";

    return (
      <div>
        <Header />
        <ConnectedRouter history={history}>
          <Router />
        </ConnectedRouter>
        {isDev && <DevTools />}
      </div>
    );
  }
}

export default AppContainer;