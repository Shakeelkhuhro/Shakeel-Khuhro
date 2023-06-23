import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { HiOutlineBookOpen } from "react-icons/hi";
import { RiServiceLine } from "react-icons/ri";
import { TbMessage } from "react-icons/tb";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a href="/" className={activeNav === "#" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "active" : ""}>
        <AiOutlineUserSwitch />
      </a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === "#testimonials" ? "active" : ""}>
        <HiOutlineBookOpen />
      </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? "active" : ""}>
        <RiServiceLine />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "active" : ""}>
        <TbMessage />
      </a>
    </nav>
  );
};

export default Nav;
