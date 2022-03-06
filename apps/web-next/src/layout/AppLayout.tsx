import { MenuAlt2Icon } from '@heroicons/react/outline'
import React from 'react'

import MobileNav from './MobileNav'
import Sidebar from './Sidebar'

const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <div className="min-h-screen flex">
        <Sidebar />

        {/* Content area */}
        <div className="flex-1 flex flex-col">
          {/* Mobile menu */}
          <header className="hidden">
            <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-neutral-200 shadow-sm flex">
              <button
                type="button"
                className="border-r border-neutral-200 px-4 text-neutral-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                onClick={() => {}}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </header>

          {/* Main content */}
          <div className="flex-1 flex items-stretch p-4">
            <main className="flex-1">
              {/* Primary column */}
              <section
                aria-labelledby="primary-heading"
                className="min-w-0 flex-1 h-full flex flex-col lg:order-last"
              >
                {children}
              </section>
            </main>
          </div>
        </div>
      </div>
      <MobileNav />
    </>
  )
}

export default AppLayout
