import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FooterProps } from "types";

const Footer: React.FC<FooterProps> = ({ menuItems = [] }) => {
  return (
    <footer className="py-8">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />

        <ul className="flex gap-4">
          {menuItems.map(({ id, text, url }) => (
            <li
              key={`footer-item-${id}`}
              className="relative after:absolute after:-left-0.5 after:-bottom-1 after:h-[3px] after:w-[105%] after:rounded md:after:content-[' '] md:after:duration-500 md:after:bg-black md:after:w-0 md:hover:after:w-[105%]"
            >
              <Link to={url} target="_blank">
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
