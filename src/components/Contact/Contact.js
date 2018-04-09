/* eslint-disable react/no-string-refs */
/* global document */

import React from "react";
import * as Animated from "animated/lib/targets/react-dom";
import _ from "lodash";
import { splitOrderType, buildAnimation } from "../../utils/Animated";
import config from "./Animation";
import styles from "./Contact.scss";

class Contact extends React.Component {
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
    const style = this.state.animations.map(anim => {
      return buildAnimation(Animated, anim.value, _.find(config, {type: anim.type}));
    });
    const contactInfo = "Have a cool project in mind, and think I can help you with it?<br/>Please feel free to e-mail me at <a href='mailto:chenhan728@gmail.com'>chenhan728@gmail.com</a>";

    return (
      <section className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <Animated.div className={styles.h1} style={style[0]} ref="slideLeft0">
            <h1>CONTACT</h1>
          </Animated.div>  
          <Animated.div className={styles.h2} style={style[1]} ref="slideUp1">
            <h2 dangerouslySetInnerHTML={{__html: contactInfo}}></h2>
          </Animated.div>  
          <Animated.div className={styles.location} style={style[2]} ref="slideUp2">
            <h3 className={styles.h3}>
              <a href="https://www.google.com/maps/place/Greene+St,+Jersey+City,+NJ/" target="_blank" rel="noopener noreferrer">
                <i className={styles.i}></i>
              </a>
            Jersey City<strong>New Jersey US</strong></h3>
          </Animated.div> 
          <Animated.div className={styles.social} style={style[3]} ref="fadeIn3">
            <a href="https://www.linkedin.com/in/hanchen728/" target="_blank" rel="noopener noreferrer">
              <i className={styles.linkedin}></i>
            </a>
            <a href="https://www.facebook.com/han.chen.14811/" target="_blank" rel="noopener noreferrer">
              <i className={styles.facebook}></i>
            </a>
            <a href="https://github.com/hanchen123/" target="_blank" rel="noopener noreferrer">
              <i className={styles.github}></i>
            </a>
          </Animated.div>
        </div>
      </section>
    );
  }
}

export default Contact;

/* eslint-enable react/no-string-refs */