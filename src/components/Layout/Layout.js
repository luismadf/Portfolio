import React, { useState } from "react";
import { Modal, Footer, Header, MobileMenu } from "../";
import { useModal } from "../../hooks";

const Layout = (props) => {
  const [modalInfo, handleOnClickModal] = useModal();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
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
    </>
  );
};

export default Layout;
