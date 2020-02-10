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
        <p>Hi! My name is Hoi and I am a self-taught Software Developer.</p>
        <p>
          I graduated with bachelor degree of applied mathematics at CSUN 2019
          Spring.{" "}
        </p>
        <p>
          Since then, I have started learning programming and have fallen in
          love with web development.{" "}
        </p>
        <p>
          Recently, I am really into learning React and Redux because of the new
          way of writing html/css/javascript which made up by components.
        </p>
        <p>
          My greatest strength is that I have patience on learning new things by
          spending time on doing my own research even if they are difficult.
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
