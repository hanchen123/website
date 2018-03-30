import React from "react";
import * as Animated from "animated/lib/targets/react-dom";
import PropTypes from "prop-types";
import styles from "./AnimatedWrapper.scss";

class AnimatedWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      animate: new Animated.Value(0),
      leaving: false
    };
  }

  componentDidMount() {
    Animated.spring(this.state.animate, { toValue: 1 }).start();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isLeaveing) {
      this.setState({animate: new Animated.Value(0), leaving: true});
    } else {
      this.setState({leaving: false});
      Animated.spring(this.state.animate, { toValue: 1 }).start();
    }
  }

  componentWillUnmount() {
    Animated.spring(this.state.animate, { toValue: 0 }).start();
  }

  render() {
    const style = {
      opacity: Animated.template`${this.state.animate}`
    };
    return (
      <Animated.div className={styles.wrapper} style={style}>
        {React.cloneElement(this.props.children, {leaving: this.state.leaving})}
      </Animated.div>
    );
  }
}

AnimatedWrapper.propTypes = {
  children: PropTypes.element.isRequired
};

export default AnimatedWrapper;