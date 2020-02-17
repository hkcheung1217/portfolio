import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

import { ReactComponent as Logo } from "../../assets/thor.svg";
import "./dropdown.styles.scss";

const DropDown = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Nav className="menu">
      <Dropdown className="dropdown" nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className="logo" nav caret>
          <Logo />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu">
          <DropdownItem className="dropdown-item">
            <Link to="/portfolio" className="item">
              Home
            </Link>
          </DropdownItem>
          <DropdownItem className="dropdown-item">
            <Link to="/portfolio/about" className="item">
              About
            </Link>
          </DropdownItem>
          <DropdownItem className="dropdown-item">
            <Link to="/portfolio/project" className="item">
              Project
            </Link>
          </DropdownItem>
          <DropdownItem className="dropdown-item">
            <Link to="/portfolio/contact" className="item">
              Contact
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Nav>
  );
};

export default DropDown;
