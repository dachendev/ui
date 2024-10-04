import Button from './Button'
import { options } from '@/constants'
import { buttonOptions } from './buttonStyles'
import React from 'react'

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
  },
}

export default meta

export const Default = {}

export const Solid = {
  render: (args) => (
    <div className="flex flex-wrap gap-sm">
      {options.colors.map((color) => (
        <Button color={color} {...args} />
      ))}
    </div>
  ),
}

export const Disabled = {
  render: (args) => (
    <div className="flex flex-wrap gap-sm">
      {options.colors.map((color) => (
        <Button color={color} disabled="true" {...args} />
      ))}
    </div>
  ),
}

export const Sizes = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-sm">
      {buttonOptions.sizes.map((size) => (
        <Button size={size} {...args} />
      ))}
    </div>
  ),
}

export const FullWidth = {
  args: {
    fullWidth: true,
  },
}

export const Outline = {
  render: (args) => (
    <div className="flex flex-wrap gap-sm">
      {options.colors.map((color) => (
        <Button color={color} variant="outline" {...args} />
      ))}
    </div>
  ),
}

export const Ghost = {
  render: (args) => (
    <div className="flex flex-wrap gap-sm">
      {options.colors.map((color) => (
        <Button color={color} variant="ghost" {...args} />
      ))}
    </div>
  ),
}

export const Gradient = {
  render: (args) => (
    <div className="flex flex-wrap gap-sm">
      {options.colors.map((color) => (
        <Button color={color} variant="gradient" {...args} />
      ))}
    </div>
  ),
}

export const Glass = {
  render: (args) => (
    <div className="flex flex-wrap gap-sm">
      {options.colors.map((color) => (
        <Button color={color} variant="glass" {...args} />
      ))}
    </div>
  ),
}
