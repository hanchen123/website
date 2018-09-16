/* global window document */

import React from "react";
import { Link } from "react-router-dom";
import * as Animated from "animated/lib/targets/react-dom";
import _ from "lodash";
import { collectKeys, partition, splitOrderType, buildAnimation } from "../../utils/Animated";
import config from "./Animation";
import PortfolioConfig from "./PortfolioConfig";
import styles from "./Portfolio.scss";

class Portfolio extends React.PureComponent {
  constructor(props) {
    super(props);
    this.scrollFunc = this.scrollFunc.bind(this);
    this.state = {
      animations: []
    };
  }

  componentWillMount() {
    this.setState(
      {
        animations: _.sortBy(collectKeys(PortfolioConfig).map(ref => {
          const ret = splitOrderType(ref);
          return {
            value: new Animated.Value(0), 
            type: ret.type, 
            order: ret.order
          };
        }), "order")
      }
    );
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollFunc);
    document.documentElement.style.height = "auto";
    window.scrollTo(0, window.__portfolio__scrollTop || 0);
    partition(this.state.animations, 2, window.__portfolio__number || 0).map(anims => {
      Animated.stagger(
        400,
        anims.map(anim =>
          Animated.spring(anim.value, { toValue: 0.5, speed: 200 })
        )
      ).start();
    });
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

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollFunc);
  }

  scrollFunc() {
    window.__portfolio__scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  }

  render() {
    const style = this.state.animations.map(anim => {
      return buildAnimation(Animated, anim.value, _.find(config, {type: anim.type}));
    });

    const articles = PortfolioConfig.map((article, idx) => {
      return(
        <article key={idx}>
          <Animated.div style={style[idx * 2]}>
            <Link to={article.link} onClick={() => {window.__portfolio__number = idx}} tabIndex={-1}>
              <figure>
                <svg viewBox="0 0 350 350" xmlns="http://www.w3.org/2000/svg" perpetual-motion="0">
                  <defs>
                    <filter id="blur">
                      <feGaussianBlur stdDeviation="3" />
                    </filter>
                    <clipPath id="mask">
                      <polygon points="350,350 50,350 0,300 0,100 200,0 350,50" />
                    </clipPath>
                  </defs> 
                  <image clipPath="url(#mask)" filter="url(#blur)" 
                    x="0" y="0" height="100%" width="100%" xlinkHref={article.image} alt="portfolio-image"/>
                </svg>
                <img className={styles.logo} src={article.logo} alt="portfolio-logo" />
              </figure>
            </Link>
          </Animated.div>
          <Animated.div style={style[idx * 2 + 1]} className={styles.text}> 
            <Link to={article.link} onClick={() => {window.__portfolio__number = idx}}>
              <h2>{article.headline}</h2>
              <h3>{article.subHeadline}</h3>
            </Link>
          </Animated.div>
        </article>
      );
    });

    return (
      <section className={styles.wrapper}>
        {articles}
      </section>
    );
  }
}

export default Portfolio;