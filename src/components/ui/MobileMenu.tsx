import { useState } from "react";
import { Menu } from "lucide-react";
import { MobileMenuItem } from "types";

interface MobileMenuProps {
  items: MobileMenuItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ items = [] }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleOnMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <>
      <Menu
        className="w-6 h-6 md:hidden cursor-pointer"
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
            {items.map(({ id, text, onClick }) => (
              <li
                key={`mobile-menu-item-${id}`}
                onClick={onClick}
                className="text-white text-xl pb-6 cursor-pointer"
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
