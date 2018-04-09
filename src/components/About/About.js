/* eslint-disable react/no-string-refs */
/* global document */

import React from "react";
import * as Animated from "animated/lib/targets/react-dom";
import _ from "lodash";
import { splitOrderType, buildAnimation } from "../../utils/Animated";
import config from "./Animation";
import portrait from "../../assets/portrait.png";
import styles from "./About.scss";

class About extends React.PureComponent {
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
    const intro = `I spend my days crafting websites in many different areas of web development from 
      <strong>back-end programming (Java, MySQL)</strong> to <strong>front-end engineering 
      (HTML, CSS, and Javascript)</strong>.<br><br>I’m <strong>passionate about everything related to web 
      development</strong>, and keep up with the cutting edge technologies and trends.<br><br>I have always 
      loved semi colons and now I get to use them everyday.`;
    const website = `This site has been designed and built by hand from scratch. It's handled through <strong>ReactJS 
      and fully animated</strong>.<br><br>The CSS is written in <strong>Sass</strong>, with a <strong>mobile first approach 
      and responsive design</strong>.<br><br>Everything is optimised for speed, browser compatibility and SEO.`;  

    const style = this.state.animations.map(anim => {
      return buildAnimation(Animated, anim.value, _.find(config, {type: anim.type}));
    });

    return (
      <section className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <div className={styles.photo}>
            <figure className={styles.figure}>
              <img src={portrait} alt="self-portrait" />
            </figure>
          </div>
          <div className={styles.intro}>
            <Animated.div className={styles.greeting} style={style[0]} ref="slideLeft0">Hi,</Animated.div>
            <Animated.div style={style[1]} ref="slideUp1">
              <h1 className={styles.h1}>{"I'm a full-stack web developer with 5+ years of professional experience in desktop and mobile web-based applications."}</h1>
            </Animated.div> 
            <Animated.div style={style[2]} ref="slideUp2">
              <p className={styles.p} dangerouslySetInnerHTML={{__html: intro}}></p>
            </Animated.div>
          </div>
          <div className={styles.section}>
            <h2>Skills and Techniques</h2>
            <div className={styles.fcolumn}>
              <Animated.div className={styles.iconWrapper} style={style[3]} ref="slideLeft3">
                <i className={styles.frontend}></i>
                <h3>FRONT-END</h3>
              </Animated.div>
              <Animated.div className={styles.details} style={style[4]} ref="slideUp4">
                <strong>Skills:</strong>
                <ul className={styles.half}>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Jade/Sightly</li>
                  <li>Sass/Stylus</li>
                  <li>Gulp/Webpack</li>
                </ul>
                <ul className={styles.half}>
                  <li>JaveScript</li>
                  <li>JQuery</li>
                  <li>ReactJS/ES6</li>
                  <li>AngularJS/TypeScript</li>
                  <li>Ajax/WebSocket</li>
                </ul>
                <strong>Patterns and Techniques:</strong>
                <ul>
                  <li>MVC/Modular</li>
                  <li>Flux/Redux</li>
                  <li>Functional Programming</li>
                  <li>Observer Pattern/Mediator Pattern</li>
                  <li>Responsive/Mobile First</li>
                  <li>Performance Optimisation Techniques</li>
                </ul>
              </Animated.div>
            </div>
            <div className={styles.scolumn}>
              <Animated.div className={styles.iconWrapper} style={style[5]} ref="slideLeft5">
                <i className={styles.backend}></i>
                <h3>BACK-END</h3>
              </Animated.div>
              <Animated.div className={styles.details} style={style[6]} ref="slideUp6">
                <strong>Skills:</strong>
                <ul className={styles.half}>
                  <li>Jave/NodeJS</li>
                  <li>MySQL</li>
                  <li>Oracle</li>
                  <li>Shell Script</li>
                  <li>Apache/Nginx</li>
                </ul>
                <ul className={styles.half}>
                  <li>Spring</li>
                  <li>MyBatis</li>
                  <li>Express</li>
                  <li>RESTful APIs</li>
                  <li>Linux</li>
                </ul>
                <strong>Patterns and Techniques:</strong>
                <ul>
                  <li>MVC</li>
                  <li>Dependency Injection</li>
                  <li>AOP</li>
                  <li>Middlewares/Streams</li>
                  <li>Memcached</li>
                  <li>Adobe Experience Manager</li>
                </ul>
              </Animated.div>
            </div>
          </div>
          <div className={styles.section}>
            <h2>About this Website</h2>
            <p className={styles.webIntro} dangerouslySetInnerHTML={{__html: website}}></p>
          </div>  
        </div>
      </section>
    );
  }
}

export default About;

/* eslint-enable react/no-string-refs */