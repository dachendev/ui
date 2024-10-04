import React from 'react'
import PropTypes from 'prop-types'
import { options } from '@/constants'
import classNames from 'classnames'
import { buttonOptions, buttonClasses, getColorClasses } from './buttonStyles'

export const Button = ({
  children,
  color = 'primary',
  size = 'md',
  variant = 'solid',
  fullWidth = false,
  disabled = false,
  className = '',
  type = 'button',
  ariaLabel,
  ...props
}) => {
  const classes = classNames(
    buttonClasses.base,
    buttonClasses.sizes[size],
    fullWidth && buttonClasses.fullWidth,
    getColorClasses(color, variant),
    className
  )

  return (
    <button
      className={classes}
      disabled={disabled}
      type={type}
      aria-disabled={disabled}
      aria-label={
        ariaLabel || typeof children === 'string' ? children : undefined
      }
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(buttonOptions.sizes),
  variant: PropTypes.oneOf(buttonOptions.variants),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
  ariaLabel: PropTypes.string,
}

export default Button
