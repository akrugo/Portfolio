import React from "react";
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
import { titleAnim } from "../animation";

//api
import * as emailjs from "emailjs-com";
import apiKeys from "../apikeys";

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    let templateParams = {
      from_name: name,
      to_name: "Hamza",
      message: message,
      email: email,
    };
    emailjs.send(
      apiKeys.SERVICE_ID,
      apiKeys.TEMPLATE_ID,
      templateParams,
      apiKeys.USER_ID
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <ContactStyle>
        <motion.h1 variants={titleAnim}>
          <span>Get In Touch</span>
        </motion.h1>
        <form className="contact-form" onSubmit={this.handleSubmit.bind(this)}>
          <input
            className="contact-form-text"
            placeholder="Your Name"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange.bind(this, "name")}
          />

          <input
            className="contact-form-text"
            placeholder="Your Email "
            type="email"
            name="email"
            aria-describedby="emailHelp"
            value={this.state.email}
            onChange={this.handleChange.bind(this, "email")}
          />

          <textarea
            className="contact-form-text"
            placeholder="Your Message"
            name="message"
            rows="5"
            value={this.state.message}
            onChange={this.handleChange.bind(this, "message")}
          />
          <button type="submit">Send</button>
        </form>
      </ContactStyle>
    );
  }
}

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  padding: 6rem 0;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
  h1 {
    text-align: center;
    color: #ddd;
    padding-bottom: 2rem;
  }
  .contact-form {
    max-width: 600px;
    margin: auto;
    padding: 0 10px;
    overflow: hidden;
  }

  .contact-form-text {
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin: 16px 0;
    border: 0;
    background: #111;
    padding: 20px 40px;
    outline: none;
    color: #ddd;
    transition: 0.5s;
  }
`;

export default Contact;
