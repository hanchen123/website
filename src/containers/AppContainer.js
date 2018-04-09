/* global process navigator */

import React from "react";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DevTools from "./DevTools";
import Router from "../router";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import PageTransHandler from "../components/commonKits/PageTransHandler";
import styles from "./AppContainer.scss";

const history = createHistory();

const ConnectedHeader = connect(
  state => ({
    isOpen: state.global.isOpen
  })
)(Header);

const ConnectedPageTransHandler = connect(
  state => ({
    mounted: state.global.isOpen
  })
)(PageTransHandler);

class AppContainer extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {
      isLoad
    } = this.props;

    const isDev = process.env.NODE_ENV === "development";
    const isChrome = /Chrome/.test(navigator.userAgent);

    return (
      <div className={styles.wrapper}>
        <ConnectedRouter history={history}>
          <div className={styles.wrapper}>
            <ConnectedHeader isLoad={isLoad} />
            <main className={styles.main} id="mainAnchor">
              {isLoad && <Router />}
            </main>
            <ConnectedPageTransHandler>
              <Navigator />
            </ConnectedPageTransHandler>
          </div>
        </ConnectedRouter>
        {isDev && isChrome && <DevTools />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoad: state.global.isLoad
});

AppContainer.propTypes = {
  isLoad: PropTypes.bool
};

export default connect(
  mapStateToProps
)(AppContainer);