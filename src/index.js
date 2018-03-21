/* global window document */

import React from "react";
import { render } from "react-dom";
import { connect, Provider } from "react-redux";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";

import { createStore, applyMiddleware, compose } from "redux";
import createHistory from "history/createBrowserHistory";

import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";

import { persistState } from "redux-devtools";
import DevTools from "./containers/DevTools";

import * as reducers from "./reducers";
//import initial from "./beforeReact";

const history = createHistory();

const enhancer = compose(
  applyMiddleware(routerMiddleware(history)),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

const store = createStore(
  ...reducers,
  routerReducer,
  enhancer,
);

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);

const AppContainer = () => (
  <ConnectedSwitch>
    <Route exact path="/" component={() => (<h1>Home <Link to="/about">About</Link></h1>)} />
    <Route path="/about" component={() => (<h1>About <Link to="/">Home</Link></h1>)} />
  </ConnectedSwitch>
);

const App = connect(state => ({
  location: state.location,
}))(AppContainer);

render(
  <Provider store={store}>
    <div>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById("root"),
);

//initial();