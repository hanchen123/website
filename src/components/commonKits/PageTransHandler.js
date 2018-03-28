/* global setTimeout */

import React from "react";
import PropTypes from "prop-types";

class PageTransHandler extends React.PureComponent {
  constructor(props) {
    super(props);
    this.transitionEnd = this.transitionEnd.bind(this);
    this.mountStyle = this.mountStyle.bind(this);
    this.unMountStyle = this.unMountStyle.bind(this);
    this.state = {
      show: false,
      style : {
        opacity: 0,
        transition: "opacity .4s ease",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0
      }
    };
  }
  
  componentWillReceiveProps(newProps) {
    if (!newProps.mounted)
      return this.unMountStyle();
    this.setState({
      show: true
    });
    setTimeout(this.mountStyle, 0);
  }
  
  unMountStyle() {
    this.setState({
      style: {
        opacity: 0,
        transition: "opacity .4s ease",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0
      }
    });
  }
  
  mountStyle() {
    this.setState({
      style: {
        opacity: 1,
        transition: "opacity .5s ease",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0
      }
    });
  }
  
  componentDidMount() {
    setTimeout(this.mountStyle, 0);
  }
  
  transitionEnd() {
    if (!this.props.mounted) {
      this.setState({
        show: false
      });
    }
  }

  render() {
    return (
      this.state.show && <div style={this.state.style} onTransitionEnd={this.transitionEnd}>
        {React.cloneElement(this.props.children, {mounted: this.props.mounted})}
      </div>
    );
  }
}

PageTransHandler.propTypes = {
  mounted: PropTypes.bool,
  children: PropTypes.element.isRequired
};

export default PageTransHandler;