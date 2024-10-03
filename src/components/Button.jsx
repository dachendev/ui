import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

const variantStyles = {
  primary: {
    default: 'bg-neutral-800 text-white enabled:hover:bg-neutral-700',
    outline:
      'border-neutral-800 text-neutral-700 enabled:hover:bg-neutral-700 enabled:hover:text-white',
    focus: 'focus:ring-neutral-500',
  },
  secondary: {
    default: 'bg-neutral-500 text-white enabled:hover:bg-neutral-600',
    outline:
      'border-neutral-500 text-neutral-500 enabled:hover:bg-neutral-500 enabled:hover:text-white',
    focus: 'focus:ring-neutral-700',
  },
  success: {
    default: 'bg-green-500 text-white enabled:hover:bg-green-600',
    outline:
      'border-green-500 text-green-500 enabled:hover:bg-green-500 enabled:hover:text-white',
    focus: 'focus:ring-green-700',
  },
  error: {
    default: 'bg-red-500 text-white enabled:hover:bg-red-600',
    outline:
      'border-red-500 text-red-500 enabled:hover:bg-red-500 enabled:hover:text-white',
    focus: 'focus:ring-red-700',
  },
}

const sizeStyles = {
  default: 'px-2 py-1 text-base',
  lg: 'px-4 py-2 text-lg',
  sm: 'px-1 py-0.5 text-sm',
}

export const Button = ({
  variant = 'primary',
  outline = false,
  size,
  className,
  ...props
}) => {
  const variantStyle = variantStyles[variant]
  const sizeStyle = sizeStyles[size] || sizeStyles.default

  const classes = cn(
    'rounded transition cursor-pointer',
    outline
      ? ['border bg-transparent', variantStyle.outline]
      : variantStyle.default,
    sizeStyle,
    'focus:outline-none focus:ring',
    variantStyle.focus,
    'disabled:opacity-75 disabled:cursor-default',
    className
  )

  return <button className={classes} {...props} />
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'error']),
  outline: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'sm']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
}
