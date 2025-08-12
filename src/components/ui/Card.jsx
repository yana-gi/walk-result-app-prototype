import { clsx } from 'clsx';

export const Card = ({ children, className, title, ...props }) => {
  return (
    <div 
      className={clsx(
        'bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200',
        className
      )} 
      {...props}
    >
      {title && (
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            {title}
          </h3>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};