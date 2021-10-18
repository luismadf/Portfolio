import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Modal from "./Modal/Modal";
import Hero from "../Hero/Hero";
import { useModal } from '../../hooks'

const Layout = (props) => {
  const [modalInfo, handleOnClickModal] = useModal();

  return (
    <>
      <Header onOpenModal={handleOnClickModal} />
      <Hero />
      {props.children}
      <Footer />
      <Modal modalInfo={modalInfo} handleOnClosed={handleOnClickModal} />
    </>
  );
};

export default Layout;
