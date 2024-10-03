import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ children }) => {
  return <button className="button p-4 bg-slate-500">{children}</button>
}

Button.propTypes = {
  children: PropTypes.element,
}

export default Button
