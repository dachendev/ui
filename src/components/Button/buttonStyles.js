export const buttonOptions = {
  variants: ['solid', 'outline', 'ghost', 'gradient', 'glass'],
  sizes: ['xs', 'sm', 'md', 'lg'],
}

export const buttonClasses = {
  base: 'rounded-full font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-opacity-60 flex items-center justify-center',
  sizes: {
    xs: 'px-3 py-1 text-xs leading-4',
    sm: 'px-4 py-1.5 text-sm leading-5',
    md: 'px-5 py-2 text-base leading-6',
    lg: 'px-6 py-3 text-lg leading-7',
  },
  fullWidth: 'w-full',
  variants: {
    solid: {
      primary:
        'bg-primary-500 text-neutral-50 hover:bg-primary-600 focus:ring-primary-400 disabled:bg-primary-300',
      secondary:
        'bg-secondary-500 text-neutral-50 hover:bg-secondary-600 focus:ring-secondary-400 disabled:bg-secondary-300',
      accent:
        'bg-accent-500 text-neutral-50 hover:bg-accent-600 focus:ring-accent-400 disabled:bg-accent-300',
      success:
        'bg-success-500 text-neutral-50 hover:bg-success-600 focus:ring-success-400 disabled:bg-success-300',
      error:
        'bg-error-500 text-neutral-50 hover:bg-error-600 focus:ring-error-400 disabled:bg-error-300',
      neutral:
        'bg-neutral-200 text-neutral-700 hover:bg-neutral-300 hover:text-neutral-800 focus:ring-neutral-400 disabled:bg-neutral-100 disabled:text-neutral-400',
    },
    outline: {
      primary:
        'bg-transparent text-primary-600 border-2 border-primary-600 hover:bg-primary-100 focus:ring-primary-500',
      secondary:
        'bg-transparent text-secondary-600 border-2 border-secondary-600 hover:bg-secondary-100 focus:ring-secondary-500',
      accent:
        'bg-transparent text-accent-600 border-2 border-accent-600 hover:bg-accent-100 focus:ring-accent-500',
      success:
        'bg-transparent text-success-600 border-2 border-success-600 hover:bg-success-100 focus:ring-success-500',
      error:
        'bg-transparent text-error-600 border-2 border-error-600 hover:bg-error-100 focus:ring-error-500',
      neutral:
        'bg-transparent text-neutral-600 border-2 border-neutral-600 hover:bg-neutral-100 focus:ring-neutral-400',
    },
    ghost: {
      primary:
        'bg-transparent text-primary-600 hover:bg-primary-100 focus:ring-primary-500',
      secondary:
        'bg-transparent text-secondary-600 hover:bg-secondary-100 focus:ring-secondary-500',
      accent:
        'bg-transparent text-accent-600 hover:bg-accent-100 focus:ring-accent-500',
      success:
        'bg-transparent text-success-600 hover:bg-success-100 focus:ring-success-500',
      error:
        'bg-transparent text-error-600 hover:bg-error-100 focus:ring-error-500',
      neutral:
        'bg-transparent text-neutral-600 hover:bg-neutral-100 focus:ring-neutral-400',
    },
    gradient: {
      primary:
        'bg-gradient-to-br from-primary-400 to-primary-600 text-neutral-50 hover:from-primary-500 hover:to-primary-700 focus:ring-primary-400 disabled:from-primary-300 disabled:to-primary-400',
      secondary:
        'bg-gradient-to-br from-secondary-400 to-secondary-600 text-neutral-50 hover:from-secondary-500 hover:to-secondary-700 focus:ring-secondary-400 disabled:from-secondary-300 disabled:to-secondary-400',
      accent:
        'bg-gradient-to-br from-accent-400 to-accent-600 text-neutral-50 hover:from-accent-500 hover:to-accent-700 focus:ring-accent-400 disabled:from-accent-300 disabled:to-accent-400',
      success:
        'bg-gradient-to-br from-success-400 to-success-600 text-neutral-50 hover:from-success-500 hover:to-success-700 focus:ring-success-400 disabled:from-success-300 disabled:to-success-400',
      error:
        'bg-gradient-to-br from-error-400 to-error-600 text-neutral-50 hover:from-error-500 hover:to-error-700 focus:ring-error-400 disabled:from-error-300 disabled:to-error-400',
      neutral:
        'bg-gradient-to-br from-neutral-100 to-neutral-300 text-neutral-700 hover:from-neutral-200 hover:to-neutral-400 hover:text-neutral-800 focus:ring-neutral-400 disabled:from-neutral-50 disabled:to-neutral-200 disabled:text-neutral-400',
    },
    glass: {
      primary:
        'bg-primary-500/30 backdrop-blur-md text-primary-950 border border-primary-300/50 hover:bg-primary-500/40 focus:ring-primary-400',
      secondary:
        'bg-secondary-500/30 backdrop-blur-md text-secondary-950 border border-secondary-300/50 hover:bg-secondary-500/40 focus:ring-secondary-400',
      accent:
        'bg-accent-500/30 backdrop-blur-md text-accent-950 border border-accent-300/50 hover:bg-accent-500/40 focus:ring-accent-400',
      success:
        'bg-success-500/30 backdrop-blur-md text-success-950 border border-success-300/50 hover:bg-success-500/40 focus:ring-success-400',
      error:
        'bg-error-500/30 backdrop-blur-md text-error-950 border border-error-300/50 hover:bg-error-500/40 focus:ring-error-400',
      neutral:
        'bg-neutral-500/30 backdrop-blur-md text-neutral-950 border border-neutral-300/50 hover:bg-neutral-500/40 focus:ring-neutral-400',
    },
  },
}

export const getColorClasses = (color, variant) => {
  return buttonClasses.variants[variant][color]
}
