import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import Modal from "./Modal";

const Layout = (props) => {
  const showModal = useSelector((state) => state.general.modal);

  return (
    <>
      {showModal ? (
        <div className="overlay">
          <Modal />
        </div>
      ) : null}
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
