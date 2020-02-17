import React from "react";

import { ReactComponent as ReactLogo } from "./../../assets/logo.svg";
import { ReactComponent as NodeLogo } from "./../../assets/icons8-nodejs.svg";
import { ReactComponent as SQLLogo } from "./../../assets/sql.svg";

import "./about.styles.scss";

const AboutPage = () => (
  <div className="about-page">
    <div className="left-side">
      <div className="about">
        <h2 className="about-header">About Hoi</h2>
        <p>Hi! My name is Hoi and I am a self-taught software developer.</p>
        <p>
          I graduated with bachelor's degree of applied mathematics at CSUN
          Spring 2019.
        </p>
        <p>
          I always had interest in programming languages and have fallen in love
          with web development.
        </p>
        <p>
          I am really into learning React and Redux because it makes producing
          with the holy trinity much faster and easier.
        </p>
        <p>
          My greatest strength is that I believe that I have a rather large
          tolerance for patience on learning new and complex things.
        </p>
      </div>
      <div className="skills">
        <h2 className="skills-header">Technological Skills</h2>
        <p>Language: HTML/CSS/Javascript, Node.js, PHP, Python</p>
        <p>Library/Framework: React, Redux, Express, Pandas </p>
        <p>Database: MySQL, MongoDB, Firebase </p>
      </div>
    </div>
    <div className="right-side">
      <ReactLogo className="logo" />
      <NodeLogo className="logo" />
      <SQLLogo className="logo" />
    </div>
  </div>
);

export default AboutPage;
