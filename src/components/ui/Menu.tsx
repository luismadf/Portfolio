interface MenuProps {
  items: any;
  color?: string;
  className?: string;
}

const Menu: React.FC<MenuProps> = ({
  items,
  color = "after:bg-black",
  className,
}) => {
  return (
    <ul
      className={`menu-component font-medium md:flex md:flex-row md:items-center gap-6 ${className}`}
    >
      {items.map(({ id, text, onClick, cta }: any) => (
        <li key={`menu-item-${id}`} className="menu-item cursor-pointer">
          {cta ? (
            <p
              className={`text-white bg-blue-500 hover:bg-blue-700 duration-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md px-5 py-2.5`}
              onClick={onClick}
            >
              {text}
            </p>
          ) : (
            <p
              className={`relative after:absolute after:-left-0.5 after:-bottom-1 after:h-[3px] after:w-[105%] after:rounded after:content-[' '] after:duration-500 ${color} md:after:w-0 md:hover:after:w-[105%]`}
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
