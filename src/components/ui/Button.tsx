import classNames from 'classnames'

interface ButtonProps {
  children: any
  onClick: any
  className: string
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  const buttonClass = classNames(
    'text-white bg-[#3B82F6] hover:bg-[#2A5CAF] duration-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md px-5 py-2.5',
    className
  )

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
