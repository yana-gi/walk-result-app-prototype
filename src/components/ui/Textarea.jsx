import { forwardRef } from 'react';
import { clsx } from 'clsx';

export const Textarea = forwardRef(({ 
  className,
  rows = 3,
  invalid = false,
  disabled = false,
  ...props 
}, ref) => {
  return (
    <textarea
      ref={ref}
      rows={rows}
      disabled={disabled}
      className={clsx(
        // Base styles - Catalyst inspired
        'relative block w-full appearance-none rounded-lg border px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)]',
        'text-base/6 text-gray-950 placeholder:text-gray-500',
        'border-gray-950/10 bg-transparent shadow-sm resize-none',
        'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:border-blue-600',
        'transition-colors',
        
        // Invalid state
        invalid && !disabled && [
          'border-red-500/70 shadow-sm shadow-red-500/10',
          'focus:border-red-600 focus:ring-red-600'
        ],
        
        // Disabled state
        disabled && [
          'border-gray-950/20 bg-gray-950/5 text-gray-950/50',
          'cursor-not-allowed'
        ],
        
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';