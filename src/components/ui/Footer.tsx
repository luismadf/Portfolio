import Link from './Link'
import Logo from './Logo'
import { FooterProps } from 'types'

const Footer: React.FC<FooterProps> = ({ menuItems = [] }) => {
  return (
    <footer className='py-8'>
      <div className='container mx-auto flex justify-between items-center'>
        <Logo />

        <div className='flex gap-4'>
          {menuItems.map(({ id, text, url }) => (
            <Link key={id} to={url} target='_blank'>
              {text}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
