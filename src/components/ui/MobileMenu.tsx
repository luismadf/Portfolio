import { useState } from "react";

interface MobileMenu {
  items: any;
}

const MobileMenu: React.FC<MobileMenu> = ({ items = [] }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleOnMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <>
      <i
        className="fas fa-bars text-xl md:hidden"
        onClick={handleOnMobileMenu}
      />
      <div
        className={`fixed z-10 top-0 right-0 bottom-0 flex justify-center items-center duration-500 bg-black/90 ${
          showMobileMenu ? "w-full" : "w-0"
        }`}
        onClick={() => setShowMobileMenu(false)}
      >
        {showMobileMenu ? (
          <ul className="text-center">
            {items.map(({ id, text, onClick }: any) => (
              <li
                key={`mobile-menu-item-${id}`}
                onClick={onClick}
                className="text-white text-xl pb-6"
              >
                {text}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default MobileMenu;
