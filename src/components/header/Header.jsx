import React from "react";
import "./header.css";
import CTA from "./CTA";
import MyImage from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";
import {BsArrowRight} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Shakeel Khuhro</h1>
        <h5 className="text-light">Front-End Devloper</h5>
        <CTA />
        <HeaderSocial/>

        <div className="me">
          <img src={MyImage} alt="My-Pic" />
        </div>
        <a href="#contact" className="scroll-down"><BsArrowRight/></a>
      </div>
    </header>
  );
};

export default Header;
