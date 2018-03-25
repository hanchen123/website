import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Navigator.scss";

class Navigator extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    const items = ["home", "portfolio", "about", "contact"];
    const familyOptions = items.map((val, idx) => {
      return (
        <li key={idx}><Link to={`/${val}`}>{val}</Link></li>
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

export default Navigator;