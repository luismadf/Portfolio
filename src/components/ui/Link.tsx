import { Link as RouterLink } from 'react-router-dom'

interface LinkProps {
  children: any
  to: string
  target: string
}

const Link: React.FC<LinkProps> = ({ children, to, ...props }) => {
  return (
    <RouterLink
      className="link relative after:absolute after:-left-0.5 after:-bottom-1 after:h-[3px] after:w-[105%] after:rounded md:after:content-[' '] md:after:duration-500 md:after:bg-black md:after:w-0 md:hover:after:w-[105%]"
      to={to}
      {...props}
    >
      {children}
    </RouterLink>
  )
}

export default Link
