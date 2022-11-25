import React, { useEffect } from "react";
import { contactInfo } from "../../utils";
// import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { Navbar, Button, Text, Link } from "@nextui-org/react";

import "./Header.scss";

interface HeaderProps {
  onOpenModal: () => {};
  mobileMenu: Boolean;
  setMobileMenu: () => {};
}

const Header: React.FC<HeaderProps> = ({
  onOpenModal,
  mobileMenu,
  setMobileMenu,
}: any) => {
  const { contactMeInfo, aboutInfo } = contactInfo;

  const handleOnClickAbout = (e: any) => {
    e.preventDefault();
    onOpenModal(aboutInfo);
  };

  const handleOnClickContact = (e: any) => {
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
    // <header>
    //   <div className="container">
    //     <Link className="logo" to="/">
    //       <h3>
    //         luisma<span>.dev</span>
    //       </h3>
    //     </Link>
    //     <i
    //       className="fas fa-bars header__mobileMenu"
    //       onClick={() => handleOnMobileMenu()}
    //     ></i>
    //     <ul className="menu">
    //       <li>
    //         <a href="#about" onClick={handleOnClickAbout}>
    //           About me
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#projects">Proyectos</a>
    //       </li>
    //       <li>
    //         <a href="#contact" onClick={handleOnClickContact}>
    //           Contacto
    //         </a>
    //       </li>
    //       <li>
    //         <a className="header__button">Descargar CV</a>
    //       </li>
    //     </ul>
    //   </div>
    // </header>

    <Navbar variant="sticky">
      <Navbar.Brand>
        <Text h3 weight="light" className="header__brand">
          luisma
          <Text span b>
            .dev
          </Text>
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link href="#about">About me</Navbar.Link>
        <Navbar.Link href="#projects">Proyectos</Navbar.Link>
        <Navbar.Link onClick={handleOnClickContact}>Contacto</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Button auto shadow as={Link} href="/">
            Descargar CV
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default Header;
