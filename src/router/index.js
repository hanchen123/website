/* global setTimeout */

import React from "react";
import { Route, Switch, Redirect } from "react-router";
import PropTypes from "prop-types";
import AnimatedWrapper from "../components/commonKits/AnimatedWrapper";
import Home from "../components/Home/Home";
import Portfolio from "../components/Portfolio/Portfolio";
import SubPortfolio from "../components/SubPortfolio/SubPortfolio";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import NotFound from "../components/NotFound/NotFound";

class AnimatedRouter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      isLeaveing: false
    };
  }

  componentWillMount() {
    this.setState({location: this.props.location});
  } 

  componentWillReceiveProps(newProps) {
    if (newProps.history.action !== "POP") {
      const _this = this;

      if (newProps.location.pathname !== this.props.location.pathname) {
        _this.setState({isLeaveing: true});
        setTimeout(() => {
          _this.setState({location: newProps.location, isLeaveing: false});
        }, 300);
      }
    }
  }

  render() {
    const parentProps = {
      leave: this.state.location,
      isLeaveing: this.state.isLeaveing,
      enter: this.props.location,
    };

    return (
      <Switch location={this.state.location}>
        <Route exact path="/" render = {props => (
          <AnimatedWrapper {...parentProps}>
            <Home {...props} />
          </AnimatedWrapper>
        )} />
        <Route exact path="/portfolio" render = {props => (
          <AnimatedWrapper {...parentProps}>
            <Portfolio {...props} />
          </AnimatedWrapper>
        )} />
        <Route path="/portfolio/:id" render = {props => (
          <AnimatedWrapper {...parentProps}>
            <SubPortfolio {...props} />
          </AnimatedWrapper>
        )} />
        <Route path="/about" render = {props => (
          <AnimatedWrapper {...parentProps}>
            <About {...props} />
          </AnimatedWrapper>
        )} />
        <Route path="/contact" render = {props => (
          <AnimatedWrapper {...parentProps}>
            <Contact {...props} />
          </AnimatedWrapper>
        )} />
        <Route path='/404' render = {props => (
          <AnimatedWrapper {...parentProps}>
            <NotFound {...props} />
          </AnimatedWrapper>
        )} />
        <Redirect from='*' to='/404' />
      </Switch>
    );
  }
}

const Router = () => (
  <Route component={AnimatedRouter} />
);

AnimatedRouter.propTypes = {
  location: PropTypes.object
};

export default Router;