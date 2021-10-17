import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Hero from "../Hero/Hero";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Hero />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
