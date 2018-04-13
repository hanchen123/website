/* eslint-disable react/no-string-refs */
/* global document */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as Animated from "animated/lib/targets/react-dom";
import _ from "lodash";
import { splitOrderType, buildAnimation } from "../../utils/Animated";
import config from "./Animation";
import detail from "./Config";
import styles from "./SubPortfolio.scss";

class SubPortfolio extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      animations: []
    };
  }

  componentDidMount() {
    document.documentElement.style.height = "auto";
    document.getElementById("mainAnchor").scrollTop = 0;
    document.getElementById("mainAnchor").scrollIntoView();
    this.setState(
      {
        animations: _.sortBy(Object.keys(this.refs).map(ref => {
          const ret = splitOrderType(ref);
          return {
            value: new Animated.Value(0), 
            type: ret.type, 
            order: ret.order
          };
        }), "order")
      },
      () => {
        Animated.stagger(
          150,
          this.state.animations.map(anim =>
            Animated.spring(anim.value, { toValue: 0.5, speed: 150 })
          )
        ).start();
      }
    );
  }

  componentWillReceiveProps(newProps) {
    if (newProps.leaving) {
      Animated.stagger(
        100,
        this.state.animations.map(anim =>
          Animated.spring(anim.value, { toValue: 1 })
        )
      ).start();
    }
  }

  render() {
    const {
      match
    } = this.props;

    const content = detail[match.params.id];
    const tech = content.tech.map((val, idx) => {
      return(<li key={idx}>{val}</li>);
    });

    const style = this.state.animations.map(anim => {
      return buildAnimation(Animated, anim.value, _.find(config, {type: anim.type}));
    });

    return (
      <section className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <Animated.div className={styles.h1} style={style[0]} ref="slideLeft0">
            <h1>{content.headline}</h1>
          </Animated.div>  
          <Animated.div className={styles.intro} style={style[1]} ref="slideUp1">
            <h2>{content.subHeadline}</h2>
            <p dangerouslySetInnerHTML={{__html: content.description}}></p>
            <a className={styles.link} href={content.link} target="_blank" rel="noopener noreferrer">{content.linkText}</a>
          </Animated.div>
          <Animated.div className={styles.screen} style={style[2]} ref="popUp2">
            <img className={styles.desktopImg} src={`/${content.desktop}`} alt="desktop-view" />
            <img className={styles.mobileImg} src={`/${content.mobile}`} alt="mobile-view" />
          </Animated.div>
          <Animated.div className={styles.clear} style={style[3]} ref="slideLeft3">
            <h3 className={styles.h3}>Released</h3>
            <p>{content.release}</p>
          </Animated.div>
          <Animated.div className={styles.clear} style={style[4]} ref="slideLeft4">
            <h3 className={styles.h3}>Technologies</h3>
            <ul>{tech}</ul>
          </Animated.div>
          <Link className={styles.link} to="/portfolio">BACK</Link>
        </div>  
      </section>    
    );
  }
}

SubPortfolio.propTypes = {
  match: PropTypes.object
};

export default SubPortfolio;

/* eslint-enable react/no-string-refs */