import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router";
import Home from "../components/Home/Home";
import Portfolio from "../components/Portfolio/Portfolio";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import NotFound from "../components/NotFound/NotFound";

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);

const Router = () => (
  <ConnectedSwitch>
    <Route exact path="/" component={Home} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path='/404' component={NotFound} />
    <Redirect from='*' to='/404' />
  </ConnectedSwitch>
);

export default Router;