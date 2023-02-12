import { useState } from "react";
import { Footer, Header, MobileMenu } from "components";

import "./Layout.scss";

const Layout = (props) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="layout">
      <Header mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      {props.children}
      <Footer />
      <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    </div>
  );
};

export default Layout;
