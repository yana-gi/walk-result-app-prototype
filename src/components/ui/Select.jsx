import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { clsx } from 'clsx';

export const Select = ({ 
  value, 
  onChange, 
  options, 
  placeholder = "選択してください",
  className,
  invalid = false,
  disabled = false
}) => {
  const selectedOption = options.find(option => option.value === value);

  return (
      <Listbox value={value} onChange={onChange} disabled={disabled}>
        <div className="relative">
          <Listbox.Button 
            className={clsx(
              // Base styles - Catalyst inspired
              'relative block w-full appearance-none rounded-lg border px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)]',
              'text-base/6 text-gray-950 placeholder:text-gray-500',
              'border-gray-950/10 bg-transparent shadow-sm',
              'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:border-blue-600',
              'text-left transition-colors',
              
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
          >
            <span className={clsx(
              'block truncate',
              !selectedOption && 'text-gray-400'
            )}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {options.map((option) => (
                <Listbox.Option
                  key={option.value}
                  className={({ active }) =>
                    clsx(
                      'relative cursor-default select-none py-3 pl-10 pr-4',
                      active ? 'bg-blue-50 text-blue-900' : 'text-gray-900'
                    )
                  }
                  value={option.value}
                >
                  {({ selected }) => (
                    <>
                      <span className={clsx(
                        'block truncate',
                        selected ? 'font-medium' : 'font-normal'
                      )}>
                        {option.label}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
  );
};