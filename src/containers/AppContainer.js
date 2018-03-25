/* global process */

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

class AppContainer extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {
      isOpen,
      isLoad
    } = this.props;

    const isDev = process.env.NODE_ENV === "development";

    return (
      <div>
        <ConnectedRouter history={history}>
          <div>
            <Header isOpen={isOpen} isLoad={isLoad} />
            <main className={styles.main}>
              <Router />
            </main>
            <PageTransHandler mounted={isOpen}>
              <Navigator />
            </PageTransHandler>
          </div>
        </ConnectedRouter>
        {isDev && <DevTools />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isOpen: state.global.isOpen,
  isLoad: state.global.isLoad
});

AppContainer.propTypes = {
  isOpen: PropTypes.bool,
  isLoad: PropTypes.bool
};

export default connect(
  mapStateToProps
)(AppContainer);