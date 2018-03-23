import React from "react";
import styles from "./styles/header.scss"
import initial from "../beforeReact";

class Header extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  componentDidMount() {
    initial();
  }

  render() {
    return (
      <header className={styles.header}>
        <canvas id="canvasHeader" className={styles.canvas}></canvas>
      </header>
    );
  }
}

export default Header;