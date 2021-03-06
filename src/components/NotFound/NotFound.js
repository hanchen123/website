/* global document */

import React from "react";
import styles from "./NotFound.scss";

class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.documentElement.style.height = "100%";
  }

  render() {
    return (
      <section className={styles.wrapper}>
        <div className={styles.content}>
          <span className={styles.huge}>404</span>
          <h2>Looks like something went wrong!</h2>
        </div>
      </section>
    );
  }
}

export default NotFound;