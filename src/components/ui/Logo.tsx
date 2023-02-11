import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo-component text-2xl mb-6 md:mb-0">
        luisma<span className="font-bold">.dev</span>
      </div>
    </Link>
  );
};

export default Logo;
