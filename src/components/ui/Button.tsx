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

// Icon buttons must have an aria-label for accessibility
export interface IconButtonProps extends ButtonProps {
  variant: 'icon'
  'aria-label': string
}

type Props = IconButtonProps | ButtonProps

const Button = forwardRef<HTMLButtonElement, Props>(({
  children,
  variant = 'solid',
  size = 'md',
  className,
  ...props
}, ref) => {
  const baseStyles = [
    'inline-flex items-center justify-center',
    'transition-[transform,box-shadow,background-color,color] duration-200',
    'motion-reduce:transition-none',
    'focus-visible:outline-hidden',
    'focus-visible:ring-4 focus-visible:ring-primary/50 dark:focus-visible:ring-primary/70',
    'active:scale-95',
  ].join(' ')

  const variants = {
    solid: [
      'bg-linear-to-br from-primary to-blue-500',
      'hover:from-blue-600 hover:to-primary',
      'text-white rounded-md',
      'shadow-md hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-primary/20',
    ].join(' '),
    icon: [
      'bg-slate-100 dark:bg-slate-800',
      'text-slate-500 dark:text-slate-400',
      'hover:bg-slate-200 dark:hover:bg-slate-700',
      'hover:text-primary dark:hover:text-primary',
      'rounded-full',
      'touch-manipulation',
    ].join(' '),
    unstyled: '',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
    // 44px — meets minimum touch target size (WCAG 2.5.5)
    icon: 'w-11 h-11',
  }

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
