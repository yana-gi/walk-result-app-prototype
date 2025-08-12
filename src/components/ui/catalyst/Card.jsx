import * as React from 'react'
import { clsx } from 'clsx'

export function Card({ title, children, className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        'rounded-xl border border-gray-200 bg-white shadow-sm',
        'dark:border-gray-800 dark:bg-gray-900',
        className
      )}
    >
      {title && (
        <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  )
}