import React from "react";
import { ReactComponent as Logo } from "../../assets/cloud-computing-web-development-svgrepo-com.svg";
import "./home.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="title">
      <h1>Welcome to my portfolio!</h1>
      <h1>Hoi Cheung</h1>
    </div>
    <div className="logo">
      <Logo />
    </div>
  </div>
);

export default HomePage;
