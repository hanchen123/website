import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import Home from "../components/Home";
import About from "../components/About";

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);

const Router = () => (
  <ConnectedSwitch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </ConnectedSwitch>
);

export default Router;