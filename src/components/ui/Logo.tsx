import { Link } from 'react-router-dom'

interface LogoProps {
  showLogoImage?: Boolean
}

const Logo: React.FC<LogoProps> = ({ showLogoImage }) => {
  return (
    <Link to='/'>
      <div className='flex items-center font-light text-3xl md:mb-0'>
        {showLogoImage && (
          <img src='/images/circle-luis.png' alt='luis picture' className='h-10 w-10 mr-3' />
        )}
        <h3 className='logo font-normal'>
          luisma<span className='font-bold'>.dev</span>
        </h3>
      </div>
    </Link>
  )
}

export default Logo
