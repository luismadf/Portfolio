import React from "react";
import styled from "@emotion/styled";
import Hero from "../Hero";
import CV from "../../images/luisdefreitescv.pdf";
import { contactInfo } from "../../utils/contactInfo";
import { Modal } from "../";
import { useModal } from "../../hooks/useModal";

const MainNav = styled.nav`
  display: flex;
  align-items: center;
  height: 72px;

  .container1 {
    height: 100%;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1000px) {
      flex-direction: column;
    }
  }

  .logo {
    font-size: 25px;
    font-weight: 400;
    span {
      font-weight: 700;
    }
    @media (max-width: 1000px) {
      font-size: 30px;
      margin: 30px 0 20px 0;
    }
  }

  ul {
    display: flex;
    align-items: center;
    color: black;
    font-weight: 500;

    @media (max-width: 1000px) {
      flex-direction: column;
    }
  }

  ul li {
    @media (max-width: 1000px) {
      margin: 10px 0;
      margin-left: 0;
    }
  }

  ul li a {
    color: black;
    @media (max-width: 1000px) {
      margin-left: 0;
    }
  }

  ul li .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 40px;
    background-color: #4398f1;
    color: white;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
  }

  @media (max-width: 1000px) {
    height: auto;
  }
`;

const Header = () => {
  const { contactMeInfo } = contactInfo;
  const [modalInfo, handleOnClickModal] = useModal();

  return (
    <header>
      <Modal modalInfo={modalInfo} handleOnClosed={handleOnClickModal} />
      <MainNav>
        <div class="container1">
          <div class="logo">
            luisma<span>.dev</span>
          </div>
          <ul>
            {/* <li>
              <a href="#" onClick={() => showModal(aboutInfo)}>
                About me
              </a>
            </li> */}
            <li>
              <a href="#projects">Portfolio</a>
            </li>
            <li>
              <a href="#" onClick={() => handleOnClickModal(contactMeInfo)}>
                Contact me
              </a>
            </li>
            <li>
              <a href={CV} className="button">
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </MainNav>
      <div class="container">
        <Hero />
      </div>
    </header>
  );
};

export default Header;
