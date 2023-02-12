import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { Logo, Menu } from "components";

interface HeaderProps {
  mobileMenu: Boolean;
  setMobileMenu: () => {};
}

const Header: React.FC<HeaderProps> = ({ mobileMenu, setMobileMenu }: any) => {
  let navigate = useNavigate();

  const handleOnNavigate = (path: string) => navigate(path);

  const handleOnMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

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
      <div className="container mx-auto py-6 flex justify-between">
        <Logo />
        <i
          className="fas fa-bars text-xl md:hidden"
          onClick={() => handleOnMobileMenu()}
        ></i>
        <Menu items={menuItems} className="hidden md:flex" />
      </div>
    </header>
  );
};

export default Header;
