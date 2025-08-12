import * as React from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'

export function Select({ value, onChange, options, placeholder = '選択してください...', className }) {
  const selectedOption = options.find(option => option.value === value)

  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative">
        <ListboxButton
          className={clsx(
            'relative w-full cursor-default rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 text-left text-base text-gray-900',
            'focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500',
            'disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500',
            'dark:border-gray-600 dark:bg-gray-800 dark:text-white',
            'dark:focus:border-indigo-400 dark:focus:ring-indigo-400',
            className
          )}
        >
          <span className="block truncate">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>

        <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:ring-gray-700">
          {options.map((option) => (
            <ListboxOption
              key={option.value}
              value={option.value}
              className={({ active }) =>
                clsx(
                  active ? 'bg-indigo-600 text-white' : 'text-gray-900 dark:text-white',
                  'relative cursor-default select-none py-2 pl-10 pr-4'
                )
              }
            >
              {({ selected, active }) => (
                <>
                  <span
                    className={clsx(
                      selected ? 'font-medium' : 'font-normal',
                      'block truncate'
                    )}
                  >
                    {option.label}
                  </span>
                  {selected && (
                    <span
                      className={clsx(
                        active ? 'text-white' : 'text-indigo-600',
                        'absolute inset-y-0 left-0 flex items-center pl-3'
                      )}
                    >
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  )}
                </>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}