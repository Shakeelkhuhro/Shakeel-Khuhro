import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { HiOutlineBookOpen } from "react-icons/hi";
import { RiServiceLine } from "react-icons/ri";
import { TbMessage } from "react-icons/tb";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#header");

  return (
    <nav>
      <a href="#header" className={activeNav === "#header" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "active" : ""}>
        <AiOutlineUserSwitch />
      </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "active" : ""}>
        <RiServiceLine />
      </a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === "#testimonials" ? "active" : ""}>
        <HiOutlineBookOpen />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "active" : ""}>
        <TbMessage />
      </a>
    </nav>
  );
};

export default Nav;
