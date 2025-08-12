import * as React from 'react'
import { clsx } from 'clsx'

const textareaStyles = [
  'block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-500',
  'focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500',
  'disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500',
  'dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400',
  'dark:focus:border-indigo-400 dark:focus:ring-indigo-400',
  'dark:disabled:border-gray-700 dark:disabled:bg-gray-900 dark:disabled:text-gray-400',
  'resize-none',
]

export function Textarea({ className, ...props }) {
  return (
    <textarea
      {...props}
      className={clsx(textareaStyles, className)}
    />
  )
}