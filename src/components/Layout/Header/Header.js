import React from "react";
import CV from "../../../images/luisdefreitescv.pdf";
import { contactInfo } from "../../../utils/contactInfo";

import "./Header.css";

const Header = ({ onOpenModal }) => {
  const { contactMeInfo, aboutInfo } = contactInfo;


  const handleOnClickAbout = (e) => {
    e.preventDefault();
    onOpenModal(aboutInfo);
  }

  const handleOnClickContact = (e) => {
    e.preventDefault();
    onOpenModal(contactMeInfo);
  }

  return (
    <header>
      <div className="container">
        <div class="logo">
          luisma<span>.dev</span>
        </div>
        <i class="fas fa-bars header__mobileMenu"></i>
        <ul className="menu">
          <li>
            <a href="#" onClick={handleOnClickAbout}>
              About me
            </a>
          </li>
          <li>
            <a href="#projects">Portfolio</a>
          </li>
          <li>
            <a href="#" onClick={handleOnClickContact}>
              Contact me
            </a>
          </li>
          <li>
            <a href={CV} className="header__button">
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
