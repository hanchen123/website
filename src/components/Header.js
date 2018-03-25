import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { toggleNav } from "../actions/navActions";
import styles from "./styles/header.scss";
import initial from "../beforeReact";
import classNames from "classnames";

class Header extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.toggleBurger = this.toggleBurger.bind(this);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    initial().then(() => {this.setState({loaded: true});});
  }

  toggleBurger() {
    const _this = this.props;
    _this.toggleNav(!_this.isOpen);
  }

  render() {
    const {
      isOpen
    } = this.props;

    const burger = classNames(styles.burger, {[styles.burgerOpen]: isOpen});

    return (
      <header className={styles.header}>
        <canvas id="canvasHeader" className={styles.canvas}></canvas>
        {this.state.loaded && <a className={styles.burgerWrapper} href="javascript:void(0)" onClick={this.toggleBurger}>
          <div className={burger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>}
        {this.state.loaded && <Link className={styles.logo} to="/"></Link>}
      </header>
    );
  }
}

const mapStateToProps = state => ({isOpen: state.global.isOpen});

const mapDispatchToProps = {
  toggleNav
};

Header.propTypes = {
  isOpen: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
