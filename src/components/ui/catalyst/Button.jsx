import * as React from 'react'
import { clsx } from 'clsx'

const variants = {
  primary: [
    'inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed',
  ],
  secondary: [
    'inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed',
  ],
  outline: [
    'inline-flex items-center justify-center px-4 py-2 border border-indigo-300 text-base font-medium rounded-md text-indigo-700 bg-transparent hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed',
  ],
  ghost: [
    'inline-flex items-center justify-center px-4 py-2 text-base font-medium rounded-md text-gray-700 bg-transparent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed',
  ],
  game: [
    'inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-lg shadow-lg text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
  ],
  counter: [
    'inline-flex items-center justify-center w-12 h-12 border border-gray-300 text-lg font-semibold rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm transition disabled:opacity-50 disabled:cursor-not-allowed',
  ],
}

const sizes = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2', 
  lg: 'text-lg px-6 py-3',
  xl: 'text-xl px-8 py-4',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className={clsx(
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </button>
  )
}