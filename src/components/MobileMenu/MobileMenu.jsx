import "./MobileMenu.css";

const Menu = ({
  handleOnClickAbout,
  handleOnClickContact,
  handleOnClickPortfolio,
}) => {
  return (
    <ul className="mobileMenu__menu">
      <li>
        <a href="#about" onClick={(e) => handleOnClickAbout(e)}>
          About me
        </a>
      </li>
      <li>
        <a href="#projects" onClick={(e) => handleOnClickPortfolio(e)}>
          Portfolio
        </a>
      </li>
      <li>
        <a href="#contact" onClick={(e) => handleOnClickContact(e)}>
          Contact me
        </a>
      </li>
      <li>
        <a href="/images/luisdefreitescv.pdf">Download CV</a>
      </li>
    </ul>
  );
};

const MobileMenu = ({ mobileMenu, setMobileMenu, handleOnClickModal }) => {
  const handleOnClickAbout = (e) => {
    e.preventDefault();
    setMobileMenu(!mobileMenu);
    handleOnClickModal(aboutInfo);
  };

  const handleOnClickPortfolio = (e) => {
    e.preventDefault();
    setMobileMenu(!mobileMenu);
  };

  const handleOnClickContact = (e) => {
    e.preventDefault();
    setMobileMenu(!mobileMenu);
    handleOnClickModal(contactMeInfo);
  };

  return (
    <>
      <div
        className={`mobileMenu__overlay ${mobileMenu ? "" : "hide"}`}
        onClick={() => setMobileMenu(false)}
      >
        {mobileMenu ? (
          <Menu
            handleOnClickAbout={handleOnClickAbout}
            handleOnClickContact={handleOnClickContact}
            handleOnClickPortfolio={handleOnClickPortfolio}
          />
        ) : null}
      </div>
    </>
  );
};

export default MobileMenu;
