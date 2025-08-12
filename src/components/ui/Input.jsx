import { forwardRef } from 'react';
import { clsx } from 'clsx';

export const Field = ({ children, className, ...props }) => {
  return (
    <div className={clsx('space-y-2', className)} {...props}>
      {children}
    </div>
  );
};

export const Label = ({ children, className, ...props }) => {
  return (
    <label 
      className={clsx(
        'block text-sm font-medium text-gray-700',
        className
      )} 
      {...props}
    >
      {children}
    </label>
  );
};

export const Input = forwardRef(({ 
  className,
  type = 'text',
  invalid = false,
  disabled = false,
  ...props 
}, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      disabled={disabled}
      className={clsx(
        // Base styles - Catalyst inspired
        'relative block w-full appearance-none rounded-lg border px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)]',
        'text-base/6 text-gray-950 placeholder:text-gray-500',
        'border-gray-950/10 bg-transparent',
        'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600',
        'data-[disabled]:cursor-not-allowed data-[disabled]:bg-gray-950/5 data-[disabled]:opacity-50',
        
        // Normal state
        !invalid && !disabled && [
          'border-gray-950/10 shadow-sm',
          'focus:border-blue-600'
        ],
        
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

Input.displayName = 'Input';