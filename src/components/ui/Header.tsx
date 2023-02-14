import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { Logo, Menu, MobileMenu } from "components";

const Header: React.FC = () => {
  let navigate = useNavigate();

  const handleOnNavigate = (path: string) => navigate(path);

  const menuItems = [
    {
      id: "1",
      text: "About me",
      onClick: () => handleOnNavigate("/aboutme"),
    },
    {
      id: "2",
      text: "Contacto",
      onClick: () => handleOnNavigate("/contact"),
    },
    {
      id: "3",
      text: "Descargar CV",
      onClick: () => {},
      cta: true,
    },
  ];

  useEffect(() => {
    gsap.from(".logo-component", {
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
    });
    gsap.from(".menu-item", {
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      y: 20,
      stagger: 0.2,
    });
  }, []);

  return (
    <header>
      <div className="container mx-auto py-6 flex justify-between">
        <Logo />
        <MobileMenu items={menuItems} />
        <Menu items={menuItems} className="hidden md:flex" />
      </div>
    </header>
  );
};

export default Header;
