import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleNav } from "../actions/navActions";
import { animationLoad } from "../actions/initActions";
import styles from "./styles/Header.scss";
import initial from "../beforeReact";
import classNames from "classnames";

class Header extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.toggleBurger = this.toggleBurger.bind(this);
  }

  componentDidMount() {
    const _this = this.props;
    initial().then(() => {_this.animationLoad(true);});
  }

  toggleBurger() {
    const _this = this.props;
    _this.toggleNav(!_this.isOpen);
  }

  render() {
    const {
      isOpen,
      isLoad
    } = this.props;

    const burger = classNames(styles.burger, {[styles.burgerOpen]: isOpen});

    return (
      <header className={styles.header}>
        <canvas id="canvasHeader" className={styles.canvas}></canvas>
        {isLoad && <a className={styles.burgerWrapper} href="javascript:void(0)" onClick={this.toggleBurger}>
          <div className={burger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>}
        {isLoad && <Link className={styles.logo} to="/"></Link>}
      </header>
    );
  }
}

const mapDispatchToProps = {
  toggleNav,
  animationLoad
};

Header.propTypes = {
  isOpen: PropTypes.bool,
  isLoad: PropTypes.bool
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
