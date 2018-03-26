import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { toggleNav } from "../actions/navActions";
import styles from "./styles/Navigator.scss";
import classNames from "classnames";

class Navigator extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      currentPath,
      toggleNav
    } = this.props;

    const items = ["", "portfolio", "about", "contact"];
    const familyOptions = items.map((val, idx) => {
      const selected = classNames({[styles.selected]: val === currentPath});
      return (
        <li className={selected} key={idx}><Link to={`/${val}`} onClick={()=>{toggleNav(false);}}>{idx === 0 ? "home" : val}</Link></li>
      );
    });

    return (
      <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <nav className={styles.nav}>
            <ul>{familyOptions}</ul>
          </nav>
          <footer className={styles.footer}>
            <span>&copy; 2018 - Han Chen All rights reserved.</span>
            <span>chenhan728@gmail.com</span>
          </footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPath: state.router.location.pathname.replace(/^\//g, "")
});

const mapDispatchToProps = {
  toggleNav
};

Navigator.propTypes = {
  currentPath: PropTypes.string,
  toggleNav: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigator);