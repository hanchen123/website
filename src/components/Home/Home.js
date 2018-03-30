/* eslint-disable react/no-string-refs */

import React from "react";
import * as Animated from "animated/lib/targets/react-dom";
import _ from "lodash";
import { splitOrderType, buildAnimation } from "../../utils/Animated";
import config from "./Animation";
import styles from "./Home.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animations: []
    };
  }

  componentDidMount() {
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
            Animated.spring(anim.value, { toValue: 0.5, bounciness: 100 })
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

    return (
      <section className={styles.wrapper}>
        <div className={styles.content}>
          <Animated.div style={style[0]} ref="slideUp0">
            <h1>HAN CHEN</h1>
          </Animated.div>  
          <Animated.div style={style[1]} ref="slideUp1">
            <h2>SENIOR WEB DEVELOPER</h2>
          </Animated.div>  
        </div>
      </section>
    );
  }
}

export default Home;

/* eslint-enable react/no-string-refs */