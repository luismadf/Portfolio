import { Link } from "react-router-dom";

interface LogoProps {
  showPicture?: Boolean;
}

const Logo: React.FC<LogoProps> = ({ showPicture = false }) => {
  return (
    <Link to="/">
      <div className="flex items-center font-light text-3xl md:mb-0">
        {showPicture ? (
          <img
            src="/images/circle-luis.png"
            alt="luis picture"
            className="h-10 w-10 mr-3"
          />
        ) : null}
        luisma<span className="font-bold">.dev</span>
      </div>
    </Link>
  );
};

export default Logo;
