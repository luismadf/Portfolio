import { useNavigate } from "react-router-dom";
import { Logo, Menu } from "components";

const Footer: React.FC = () => {
  let navigate = useNavigate();

  const handleOnNavigate = (path: string) => navigate(path);

  const menuItems = [
    {
      id: "1",
      text: "Contacto",
      onClick: () => handleOnNavigate("/contact"),
    },
  ];

  return (
    <footer className="bg-blue-500 text-white">
      <div className="container mx-auto py-8 flex flex-col items-center md:flex-row md:justify-between">
        <Logo />
        <Menu items={menuItems} color="white" />
      </div>
    </footer>
  );
};

export default Footer;
