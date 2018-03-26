
/* eslint-disable */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import * as Animated from "animated/lib/targets/react-dom";
import { toggleNav } from "../actions/navActions";
import styles from "./styles/Navigator.scss";
import classNames from "classnames";

class Navigator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }

  componentWillMount() {
    this.renderItems(this.props.items);
  }

  renderItems(items) {
    this.setState(
      {
        animations: items.map(() => new Animated.Value(0))
      },
      () => {
        Animated.stagger(
          150,
          this.state.animations.map(anim =>
            Animated.spring(anim, { toValue: 1 })
          )
        ).start();
      }
    );
  }

  render() {
    const {
      currentPath,
      toggleNav,
      items
    } = this.props;

    const familyOptions = items.map((val, idx) => {
      const style = {
        opacity: this.state.animations[idx],
        transform: Animated.template`
          translate3d(0, ${this.state.animations[idx].interpolate({
            inputRange: [0, 1],
            outputRange: ["30px", "0px"]
          }
        )},0)`
      };

      const selected = classNames({[styles.selected]: val === currentPath});

      return (
        <li className={selected} key={idx}>
          <Animated.div style={style}>
            <Link to={`/${val}`} onClick={()=>{toggleNav(false);}}>{idx === 0 ? "home" : val}</Link>
          </Animated.div>
        </li>
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
  currentPath: state.router.location.pathname.replace(/^\//g, ""),
  items: ["", "portfolio", "about", "contact"]
});

const mapDispatchToProps = {
  toggleNav
};

Navigator.propTypes = {
  currentPath: PropTypes.string,
  items: PropTypes.array,
  toggleNav: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigator);