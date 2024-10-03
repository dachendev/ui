import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Click me!',
  },
}
export default meta

export const Primary = {
  args: {
    variant: 'primary',
  },
}

export const PrimaryOutline = {
  args: {
    variant: 'primary',
    outline: true,
  },
}

export const Secondary = {
  args: {
    variant: 'secondary',
  },
}

export const SecondaryOutline = {
  args: {
    variant: 'secondary',
    outline: true,
  },
}

export const Success = {
  args: {
    variant: 'success',
  },
}

export const SuccessOutline = {
  args: {
    variant: 'success',
    outline: true,
  },
}

export const Error = {
  args: {
    variant: 'error',
  },
}

export const ErrorOutline = {
  args: {
    variant: 'error',
    outline: true,
  },
}

export const Large = {
  args: {
    size: 'lg',
  },
}

export const Small = {
  args: {
    size: 'sm',
  },
}

export const Disabled = {
  args: {
    disabled: true,
  },
}
