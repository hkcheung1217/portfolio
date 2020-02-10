import React from "react";

import { SocialIcon } from "react-social-icons";
import "./social-link.styles.scss";

const SocialLink = () => (
  <div className="social-link">
    <div className="container">
      <SocialIcon className="social-item" url="mailto:hkcheung1217@gmail.com" />
      <SocialIcon
        className="social-item"
        url="https://www.linkedin.com/in/hoi-cheung-64704220/"
        target="_blank"
      />
      <SocialIcon
        className="social-item"
        url="https://github.com/hkcheung1217"
        target="_blank"
      />
    </div>
  </div>
);

export default SocialLink;
