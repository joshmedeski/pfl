import { Dialog, Transition } from '@headlessui/react'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useState } from 'react'

import { NavItem, primaryNav, secondaryNav } from './navigation'

const SidebarMenuItem: React.FC<{ item: NavItem; isActive?: boolean }> = ({
  item,
  isActive = false
}) => {
  return (
    <Link href={item.href}>
      <a
        className={classNames([
          { 'bg-gray-50 dark:bg-neutral-900': isActive },
          'rounded-l-xl',
          'group w-full p-3 flex flex-col items-center',
          'text-xs text-black dark:text-white font-medium',
          'transition'
        ])}
        aria-current={false ? 'page' : undefined}
      >
        <div
          className={classNames([
            'p-2 rounded-full',
            { 'bg-gray-50 dark:bg-neutral-900': !isActive },
            { 'bg-black dark:bg-white': isActive }
          ])}
        >
          <item.icon
            className={classNames([
              'w-6 h-6',
              { 'text-gray-600 dark:text-gray-400': !isActive },
              { 'text-primary-300 dark:text-primary-700': isActive }
            ])}
          />
        </div>
        <span className="mt-2">{item.name}</span>
      </a>
    </Link>
  )
}

const SidebarMenu = () => {
  const router = useRouter()

  return (
    <div className="w-full h-screen pl-2 flex flex-col items-center min-h-screen">
      <div className="flex-1 mt-2 w-full space-y-2">
        {primaryNav.map((item) => (
          <SidebarMenuItem
            item={item}
            key={item.name}
            isActive={item.href !== '/' && router.asPath.startsWith(item.href)}
          />
        ))}
      </div>

      <div className="mt-6 w-full space-y-1 mb-2 justify-self-end">
        {secondaryNav.map((item) => (
          <SidebarMenuItem
            item={item}
            key={item.name}
            isActive={item.href !== '/' && router.asPath.startsWith(item.href)}
          />
        ))}
      </div>
    </div>
  )
}

const Sidebar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <aside className="bg-white dark:bg-black">
      {/* Desktop menu */}
      <div className="hidden w-24 overflow-y-auto md:block">
        <div className="fixed min-h-screen w-24">
          <SidebarMenu />
        </div>
      </div>

      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="md:hidden" onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-neutral-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative max-w-xs w-full bg-indigo-700 pt-5 pb-4 flex-1 flex flex-col">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-1 right-0 -mr-14 p-1">
                    <button
                      type="button"
                      className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 px-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 35 32"
                  >
                    <path
                      fill="#fff"
                      d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z"
                    />
                  </svg>
                </div>
                <div className="mt-5 flex-1 h-0 px-2 overflow-y-auto">
                  <nav className="h-full flex flex-col">
                    <SidebarMenu />
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </aside>
  )
}

export default Sidebar
