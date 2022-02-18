import React, { useEffect } from "react";
import CV from "../../images/luisdefreitescv.pdf";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import ImgLuis from "../../images/profile-round.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { contactInfo } from "../../utils";

import "./Header.scss";

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

  useEffect(() => {
    gsap.from(".logo", {
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
    });
    gsap.from(".menu li", {
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      y: 20,
      stagger: 0.2,
    });
  }, []);

  return (
    <header>
      {/* <div className="container">
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
      </div> */}

      <nav className="container">
        <Link class="logo" to="/">
          <h3>
            luisma<span>.dev</span>
          </h3>
        </Link>

        <ul className="nav__menu container">
          <li>
            <i class="fas fa-user" />
            <a href="#about" onClick={handleOnClickAbout}>
              About me
            </a>
          </li>
          <li>
            <i class="fas fa-suitcase"></i>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <i class="fas fa-comment-dots"></i>
            <a href="#contact" onClick={handleOnClickContact}>
              Contacto
            </a>
          </li>
          <li>
            <i class="fas fa-book"></i>
            <a href={CV} className="header__button">
              Descargar CV
            </a>
          </li>
        </ul>

        <img src={ImgLuis} alt="Luis" />
      </nav>
    </header>
  );
};

export default Header;
