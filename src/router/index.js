import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);

const Router = () => (
  <ConnectedSwitch>
    <Route exact path="/" component={() => (<h1>Home <Link to="/about">About</Link></h1>)} />
    <Route path="/about" component={() => (<h1>About <Link to="/">Home</Link></h1>)} />
  </ConnectedSwitch>
);

export default Router;