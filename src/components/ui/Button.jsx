import { forwardRef } from 'react';
import { clsx } from 'clsx';

const colors = {
  'dark': [
    'bg-gray-900 text-white shadow-sm',
    'hover:bg-gray-800',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900',
    'data-[disabled]:bg-gray-900/50 data-[disabled]:text-white/50 data-[disabled]:cursor-not-allowed'
  ],
  'zinc': [
    'bg-zinc-600 text-white shadow-sm',
    'hover:bg-zinc-500',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600',
    'data-[disabled]:bg-zinc-600/50 data-[disabled]:text-white/50 data-[disabled]:cursor-not-allowed'
  ],
  'white': [
    'bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-950/10',
    'hover:bg-gray-50',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
    'data-[disabled]:bg-gray-50 data-[disabled]:text-gray-950/50 data-[disabled]:cursor-not-allowed'
  ],
  'red': [
    'bg-red-600 text-white shadow-sm',
    'hover:bg-red-500',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600',
    'data-[disabled]:bg-red-600/50 data-[disabled]:text-white/50 data-[disabled]:cursor-not-allowed'
  ],
  'blue': [
    'bg-blue-600 text-white shadow-sm',
    'hover:bg-blue-500', 
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
    'data-[disabled]:bg-blue-600/50 data-[disabled]:text-white/50 data-[disabled]:cursor-not-allowed'
  ],
  'green': [
    'bg-green-600 text-white shadow-sm',
    'hover:bg-green-500',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600',
    'data-[disabled]:bg-green-600/50 data-[disabled]:text-white/50 data-[disabled]:cursor-not-allowed'
  ],
  // 散歩アプリ用のカスタムカラー
  'game': [
    'bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold shadow-lg',
    'hover:from-orange-500 hover:to-yellow-500 hover:shadow-xl hover:scale-[1.02]',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400',
    'data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:transform-none',
    'transform transition-all duration-200 ease-in-out'
  ],
  'counter': [
    'bg-gradient-to-r from-teal-400 to-green-400 text-white font-bold shadow-lg',
    'hover:from-teal-500 hover:to-green-500 hover:shadow-xl hover:scale-[1.05]',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400',
    'data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:transform-none',
    'transform transition-all duration-200 ease-in-out'
  ]
};

export const Button = forwardRef(({ 
  children,
  color = 'dark',
  outline = false,
  plain = false,
  type = 'button',
  className,
  disabled,
  href,
  ...props 
}, ref) => {
  const baseClasses = [
    // Base styles - Catalyst inspired
    'relative inline-flex items-center justify-center gap-2',
    'rounded-lg border border-transparent',
    'px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)]',
    'text-sm/6 font-semibold',
    'focus-visible:outline focus-visible:outline-0',
    'transition-all duration-200 ease-in-out cursor-pointer',
    'select-none touch-manipulation',
    // Disabled styles
    disabled && 'cursor-not-allowed'
  ];

  const colorClasses = colors[color] || colors.dark;

  let buttonClasses;
  
  if (plain) {
    buttonClasses = [
      ...baseClasses,
      'border-transparent bg-transparent shadow-none',
      'text-gray-950 hover:bg-gray-950/5',
      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
      'data-[disabled]:text-gray-950/50 data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-transparent'
    ];
  } else if (outline) {
    buttonClasses = [
      ...baseClasses,
      'shadow-sm ring-1 ring-inset',
      color === 'dark' ? [
        'text-gray-950 ring-gray-950/20',
        'hover:bg-gray-50',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
        'data-[disabled]:text-gray-950/50 data-[disabled]:ring-gray-950/10 data-[disabled]:cursor-not-allowed'
      ] : [
        `text-${color}-700 ring-${color}-600/20`,
        `hover:bg-${color}-50`,
        `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}-600`,
        `data-[disabled]:text-${color}-600/50 data-[disabled]:ring-${color}-600/10 data-[disabled]:cursor-not-allowed`
      ]
    ];
  } else {
    buttonClasses = [
      ...baseClasses,
      ...colorClasses
    ];
  }

  const Component = href ? 'a' : 'button';
  const componentProps = href ? { href } : { type, disabled };

  return (
    <Component
      ref={ref}
      className={clsx(buttonClasses, className)}
      {...componentProps}
      {...props}
    >
      {children}
    </Component>
  );
});

Button.displayName = 'Button';