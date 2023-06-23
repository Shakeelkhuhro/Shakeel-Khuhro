import React from "react";
import "./contact.css";
import { TfiEmail } from "react-icons/tfi";
import { ImWhatsapp } from "react-icons/im";
// emailjs
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const emailJSform=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bc9erwr', 'template_m5q96xk', emailJSform.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <TfiEmail className="contact-option-icons" />
            <h4>Email</h4>
            <h5>shakeelahmedkhu@gmail.com</h5>
            <a className="btn"
              href="mailto:shakeelahmedkhu@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact-option">
            <ImWhatsapp className="contact-option-icons" />
            <h4>WhatsApp</h4>
            <h5>+92 302-8915924</h5>
            <a className="btn"
              href="https://api.whatsapp.com/send?phone=923028915924"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={emailJSform} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
