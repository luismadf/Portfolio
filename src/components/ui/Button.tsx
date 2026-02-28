import { ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'icon' | 'unstyled'
  size?: 'sm' | 'md' | 'lg' | 'icon'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ 
  children, 
  variant = 'solid',
  size = 'md',
  className,
  ...props 
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center transition-colors duration-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800'
  
  const variants = {
    solid: 'bg-[#3B82F6] hover:bg-[#2A5CAF] text-white rounded-md',
    icon: 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-full',
    unstyled: '',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
    icon: 'w-10 h-10',
  }

  // If variant is icon, force icon size
  const activeSize = variant === 'icon' ? 'icon' : size

  const buttonClass = cn(
    variant !== 'unstyled' && baseStyles,
    variants[variant],
    variant !== 'unstyled' && sizes[activeSize],
    className
  )

  return (
    <button ref={ref} className={buttonClass} {...props}>
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
