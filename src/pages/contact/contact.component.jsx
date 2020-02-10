import React from "react";
import Email from "../../components/email/email.component";

import "./contact.styles.scss";

const ContactPage = () => (
  <div className="contact">
    <div className="contact-container">
      <h1>Contact Me</h1>
      <Email />
    </div>
  </div>
);

export default ContactPage;
