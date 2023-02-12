interface MenuProps {
  items: any;
  color?: string;
  className?: string;
}

const Menu: React.FC<MenuProps> = ({ items, color = "black", className }) => {
  return (
    <ul
      className={`menu-component font-medium md:flex md:flex-row md:items-center gap-6 ${className}`}
    >
      {items.map(({ id, text, onClick, cta }: any) => (
        <li key={`menu-item-${id}`} className="cursor-pointer">
          {cta ? (
            <p
              className={`cta py-3 px-5 text-white uppercase bg-blue-500 font-medium rounded-md duration-500 hover:shadow-xl hover:scale-105`}
              onClick={onClick}
            >
              {text}
            </p>
          ) : (
            <p
              className={`relative after:absolute after:-left-0.5 after:-bottom-1 after:h-[3px] after:w-[105%] after:rounded after:content-[' '] after:duration-500 after:bg-${color} md:after:w-0 md:hover:after:w-[105%]`}
              onClick={onClick}
            >
              {text}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
