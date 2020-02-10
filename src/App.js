import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/home/home.component";
import AboutPage from "./pages/about/about.component";
import ContactPage from "./pages/contact/contact.component";
import SocialLink from "./components/social-link/social-link.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/portfolio/" component={HomePage} />
        <Route exact path="/portfolio/about" component={AboutPage} />
        <Route exact path="/portfolio/contact" component={ContactPage} />
      </Switch>
      <SocialLink />
    </div>
  );
}

export default App;
