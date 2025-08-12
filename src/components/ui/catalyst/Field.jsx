import * as React from 'react'
import { clsx } from 'clsx'

export function Field({ className, children, ...props }) {
  return (
    <div {...props} className={clsx('space-y-2', className)}>
      {children}
    </div>
  )
}

export function Label({ className, children, ...props }) {
  return (
    <label 
      {...props} 
      className={clsx(
        'block text-sm font-medium text-gray-700 dark:text-gray-300',
        className
      )}
    >
      {children}
    </label>
  )
}