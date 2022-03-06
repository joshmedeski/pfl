import {
  ClockIcon,
  CreditCardIcon,
  InformationCircleIcon,
  OfficeBuildingIcon,
  UserIcon,
  UsersIcon
} from '@heroicons/react/outline'
import classNames from 'classnames'
import React, { SVGProps, useState } from 'react'

export type Tab = {
  name: string
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
  content: React.FC
}

const Tabs: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <div className="">
      <nav className="-mb-px flex space-x-2" aria-label="Tabs">
        {tabs.map((tab, index) => {
          const isActive: boolean = index === activeTab

          return (
            <button
              key={tab.name + index}
              onClick={() => setActiveTab(index)}
              className={classNames(
                { 'bg-white dark:bg-black rounded-t-xl': isActive },
                'group inline-flex items-center px-3 py-2 text-lg font-semibold'
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              <div
                className={classNames([
                  'flex items-center',
                  'p-2 rounded-full mr-2',
                  'flex flex-col justify-around',
                  { 'bg-white dark:bg-black': !isActive },
                  { 'bg-black dark:bg-white': isActive }
                ])}
              >
                <tab.icon
                  className={classNames([
                    'h-6 w-6',
                    { 'text-white dark:text-black': isActive },
                    { 'text-primary-300 dark:text-primary-700': isActive },
                    { 'text-gray-600 dark:text-gray-400': !isActive },
                    { 'text-primary-300 dark:text-primary-700': isActive }
                  ])}
                  aria-hidden="true"
                />
              </div>
              <span>{tab.name}</span>
            </button>
          )
        })}
      </nav>

      {tabs.map((tab, index) => {
        if (index === activeTab) {
          return (
            <section
              key={tab.name + '-content'}
              className={classNames([
                'mb-4 p-4 bg-white dark:bg-black',
                'rounded-b-2xl rounded-tr-2xl',
                { 'rounded-tl-2xl': activeTab !== 0 }
              ])}
            >
              <tab.content />
            </section>
          )
        } else {
          return <React.Fragment />
        }
      })}
    </div>
  )
}

export default Tabs
