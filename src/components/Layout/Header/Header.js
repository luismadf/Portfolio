import React from "react";
import CV from "../../../images/luisdefreitescv.pdf";
import { contactInfo } from "../../../utils/contactInfo";
import { Modal } from "../..";
import { useModal } from "../../../hooks/useModal";

import "./Header.css";

const Header = () => {
  const { contactMeInfo, aboutInfo } = contactInfo;
  const [modalInfo, handleOnClickModal] = useModal();

  return (
    <header>
      <Modal modalInfo={modalInfo} handleOnClosed={handleOnClickModal} />
      <div className="container">
        <div class="logo">
          luisma<span>.dev</span>
        </div>
        <i class="fas fa-bars header__mobileMenu"></i>
        <ul className="menu">
          <li>
            <a href="#" onClick={() => handleOnClickModal(aboutInfo)}>
              About me
            </a>
          </li>
          <li>
            <a href="#projects">Portfolio</a>
          </li>
          <li>
            <a href="#" onClick={() => handleOnClickModal(contactMeInfo)}>
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
