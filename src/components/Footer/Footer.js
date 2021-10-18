import { contactInfo } from "../../utils/contactInfo";

import "./Footer.css";

const Footer = ({ onOpenModal }) => {
  const { contactMeInfo } = contactInfo;

  const handleOnClickContact = (e) => {
    e.preventDefault();
    onOpenModal(contactMeInfo);
  };

  return (
    <>
      <footer>
        <div className="container">
          <div class="logo">
            luisma<span>.dev</span>
          </div>
          <ul>
            <li>
              <a href="#projects">Portfolio</a>
            </li>
            <li>
              <a onClick={handleOnClickContact}>Contacto</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
