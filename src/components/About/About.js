/* eslint-disable react/no-string-refs */

import React from "react";
import portrait from "../../assets/portrait.png";
import styles from "./About.scss";

class About extends React.PureComponent {
  render() {
    const intro = `I spend my days crafting websites in many different areas of web development from 
      <strong>back-end programming (Java, MySQL)</strong> to <strong>front-end engineering 
      (HTML, CSS, and Javascript)</strong>.<br><br>I’m <strong>passionate about everything related to web 
      development</strong>, and keep up with the cutting edge technologies and trends.<br><br>I have always 
      loved semi colons and now I get to use them everyday.`;

    return (
      <section className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <div className={styles.photo}>
            <figure className={styles.figure}>
              <img src={portrait} alt="self-portrait" />
            </figure>
          </div>
          <div className={styles.intro}>
            <span className={styles.greeting}>Hi,</span>
            <h1 className={styles.h1}>{"I'm a full-stack web developer with 5+ years of professional experience in desktop and mobile web-based applications."}</h1>
            <p className={styles.p} dangerouslySetInnerHTML={{__html: intro}}></p>
          </div>
          <div className={styles.skills}>
            <h2>Skills and Techniques</h2>
            <div className={styles.fcolumn}>
              <div className={styles.iconWrapper}>
                <i className={styles.frontend}></i>
                <h3>FRONT-END</h3>
              </div>
              <div className={styles.details}>
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
              </div>
            </div>
            <div className={styles.scolumn}>
              <div className={styles.iconWrapper}>
                <i className={styles.backend}></i>
                <h3>BACK-END</h3>
              </div>
              <div className={styles.details}>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

/* eslint-enable react/no-string-refs */