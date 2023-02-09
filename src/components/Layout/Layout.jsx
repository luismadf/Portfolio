import { useState } from "react";
import { Modal, Footer, Header, MobileMenu } from "components";
import { useModal } from "hooks";

import "./Layout.scss";

const Layout = (props) => {
  const [modalInfo, handleOnClickModal] = useModal();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="layout">
      <Header
        onOpenModal={handleOnClickModal}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
      {props.children}
      <Footer onOpenModal={handleOnClickModal} />
      <Modal modalInfo={modalInfo} handleOnClosed={handleOnClickModal} />
      <MobileMenu
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        handleOnClickModal={handleOnClickModal}
      />
    </div>
  );
};

export default Layout;
