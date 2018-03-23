/* global window process */

import _ from "lodash";
import { createStore, applyMiddleware, compose } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import rootReducer from "../reducers";
  
import { persistState } from "redux-devtools";
import DevTools from "../containers/DevTools";

const history = createHistory();

function configureStoreDev(initialState) {
  const enhancer = compose(
  applyMiddleware(routerMiddleware(history)),
  DevTools.instrument(),
  persistState(
      window.location.href.match(
        /[?&]debug_session=([^&#]+)\b/
      )
    )
  );

  return createStore(rootReducer, _.assign({}, routerReducer, initialState), enhancer);
}

function configureStoreProd(initialState) {
  return createStore(rootReducer, _.assign({}, routerReducer, initialState), applyMiddleware(routerMiddleware(history)));
}

const configurStore = process.env.NODE_ENV === "production" ? configureStoreProd : configureStoreDev;

export default configurStore;