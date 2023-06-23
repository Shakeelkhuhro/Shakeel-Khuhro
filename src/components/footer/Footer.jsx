import React from "react";
import "./footer.css";
import { FiLinkedin } from 'react-icons/fi';
import { SiFacebook } from 'react-icons/si';
import { FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer id="footer">
      <a href="/" className="footer-logo"> {/* Update the href attribute with a valid URL */}
        <img src={logo} alt="Portfolio logo" />
      </a>
      <ul className="permalinks">
        <li>
          <a href="/">Home</a> {/* Update the href attribute with a valid URL */}
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        {/* <li><a href="#experience">Experience</a></li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a> {/* Correct the spelling of 'Testimonials' */}
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-socials">
        <a href="https://linkedin.com/in"><FiLinkedin /></a> {/* Update the href attribute with a valid LinkedIn URL */}
        <a href="https://facebook.com"><SiFacebook /></a> {/* Update the href attribute with a valid Facebook URL */}
        <a href="https://instagram.com"><FaInstagram /></a> {/* Update the href attribute with a valid Instagram URL */}
        <a href="https://twitter.com"><FiTwitter /></a> {/* Update the href attribute with a valid Twitter URL */}
      </div>

      <div className="footer-copyright">
        <small>&copy; Shakeel Khuhro, All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
