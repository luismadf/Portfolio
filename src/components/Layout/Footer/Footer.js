import { contactInfo } from "../../../utils/contactInfo";
import { useModal } from "../../../hooks";
import { Modal } from "../../";

import "./Footer.css";

const Footer = () => {
  const { contactMeInfo } = contactInfo;
  const [modalInfo, handleOnClickModal] = useModal();

  return (
    <>
      <Modal modalInfo={modalInfo} handleOnClosed={handleOnClickModal} />
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
              <a onClick={() => handleOnClickModal(contactMeInfo)}>Contacto</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
