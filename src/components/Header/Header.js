import React from "react";
import CV from "../../images/luisdefreitescv.pdf";
import { Link } from "react-router-dom";

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
        <Link class="logo" to="/">
          <h3>
            luisma<span>.dev</span>
          </h3>
        </Link>
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
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact" onClick={handleOnClickContact}>
              Contacto
            </a>
          </li>
          <li>
            <a href={CV} className="header__button">
              Descargar CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
