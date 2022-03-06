import { ArrowRightIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import React from 'react'

import './button.css'

interface ButtonProps {
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={classNames([
        'bg-primary',
        'overflow-hidden',
        'w-full sm:w-auto rounded-md',
        'inline-flex items-stretch relative',
        'group transition-slowest ease',
        'shadow-lg',
        'shadow-gray-200/20 dark:shadow-gray-800/20',
        'font-bold tracking-wider',
        'dark:text-black text-white',
        'dark:bg-primary-200 bg-primary-700'
      ])}
    >
      <span
        className={classNames([
          'dark:bg-white dark:bg-opacity-20',
          'bg-black bg-opacity-20',
          '-top-4 -right-2',
          'absolute overflow-hidden',
          'w-16 h-16 group-hover:w-full',
          'transition-width duration-300 ease-in-out',
          'transform group-hover:right-0 -skew-x-6 group-hover:skew-x-0'
        ])}
      ></span>

      <span className="z-20 flex-grow px-5 py-3 text-center wf">
        {children}
      </span>

      <span className="z-10 flex flex-col justify-center px-5 py-3">
        <ArrowRightIcon className="flex-initial w-5 h-5" />
      </span>
    </button>
  )
}
