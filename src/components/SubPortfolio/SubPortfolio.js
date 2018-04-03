import React from "react";
import PropTypes from "prop-types";
import Config from "./Config";
import styles from "./SubPortfolio.scss";

class SubPortfolio extends React.PureComponent {
  render() {
    const {
      match
    } = this.props;

    const content = Config[match.params.id];
    const tech = content.tech.map((val, idx) => {
      return(<li key={idx}>{val}</li>);
    });

    return (
      <section className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <h1 className={styles.h1}>{content.headline}</h1>
          <div className={styles.intro}>
            <h2>{content.subHeadline}</h2>
            <p dangerouslySetInnerHTML={{__html: content.description}}></p>
            <a className={styles.link} href={content.link} target="_blank" rel="noopener noreferrer">SEE IT LIVE</a>
          </div>
          <div className={styles.screen}>
            <img className={styles.desktopImg} src={`/${content.desktop}`} alt="desktop-view" />
            <img className={styles.mobileImg} src={`/${content.mobile}`} alt="mobile-view" />
          </div>
          <div className={styles.clear}>
            <h3 className={styles.h3}>Released</h3>
            <p>{content.release}</p>
          </div>
          <div className={styles.clear}>
            <h3 className={styles.h3}>Technologies</h3>
            <ul>{tech}</ul>
          </div>
        </div>  
      </section>    
    );
  }
}

SubPortfolio.propTypes = {
  match: PropTypes.object
};

export default SubPortfolio;