import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          `
          rounded-full
          border-transparent
          px-3
          py-4
          disabled:cursor-not-allowed
          disabled:opacity-50
          text-neutral-700
          font-bold
          text-[1rem]
          hover:opacity-90
          transition
        `,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
