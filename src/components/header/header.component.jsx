import React from "react";
import { Link } from "react-router-dom";

import DropDown from "../dropdown/dropdown.component";
import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <DropDown className="logo" />
    </div>
    <div className="options">
      <Link className="option" to="/portfolio">
        Home
      </Link>
      <Link className="option" to="/portfolio/about">
        About
      </Link>
      <Link className="option" to="/portfolio/contact">
        Contact
      </Link>
    </div>
  </div>
);

export default Header;
