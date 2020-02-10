import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import axios from "axios";

import "./email.styles.scss";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.css";

class Email extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { name, email, message } = this.state;

    await axios.post("http://localhost:8000/api/email", {
      name,
      email,
      message
    });

    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };

  render() {
    return (
      <Form className="form" onSubmit={this.handleSubmit}>
        <FormGroup className="form-item">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </FormGroup>
        <FormGroup className="form-item">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </FormGroup>
        <FormGroup className="form-item">
          <Input
            className="message"
            type="textarea"
            name="message"
            placeholder="Message"
            value={this.state.message}
            onChange={this.handleChange}
            required
          />
        </FormGroup>

        <Button className="submit">Submit</Button>
      </Form>
    );
  }
}

export default Email;
