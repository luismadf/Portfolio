import React from "react";
import CV from "../../images/luisdefreitescv.pdf";
import { contactInfo } from "../../utils";

import "./Header.css";

const Header = ({ onOpenModal, mobileMenu, setMobileMenu }) => {
  const { contactMeInfo, aboutInfo } = contactInfo;

  const handleOnClickAbout = (e) => {
    e.preventDefault();
    onOpenModal(aboutInfo);
  };

  const handleOnClickContact = (e) => {
    e.preventDefault();
    onOpenModal(contactMeInfo);
  };

  const handleOnMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header>
      <div className="container">
        <div class="logo">
          luisma<span>.dev</span>
        </div>
        <i
          class="fas fa-bars header__mobileMenu"
          onClick={() => handleOnMobileMenu()}
        ></i>
        <ul className="menu">
          <li>
            <a href="#about" onClick={handleOnClickAbout}>
              About me
            </a>
          </li>
          <li>
            <a href="#projects">Portfolio</a>
          </li>
          <li>
            <a href="#contact" onClick={handleOnClickContact}>
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
