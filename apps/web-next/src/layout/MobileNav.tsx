import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

import { MovieIcon, PeopleIcon, SearchIcon, TvIcon } from '@/ui/Icon'

type MenuItem = {
  icon: any
  current: boolean
  name: string
  href: string
}

const MobileNav: React.FC = () => {
  const nav: MenuItem[] = [
    { name: 'Search', href: '/search', icon: SearchIcon, current: false },
    { name: 'Movies', href: '/movies', icon: MovieIcon, current: false },
    {
      name: 'Television',
      href: '/tv',
      icon: TvIcon,
      current: false
    },
    { name: 'People', href: '/people', icon: PeopleIcon, current: false }
  ]

  return (
    <nav className="sm:hidden w-full fixed bottom-0 bg-neutral-100 dark:bg-neutral-900 p-2 bg-opacity-80 dark:bg-opacity-80 backdrop-filter backdrop-blur-md">
      <div className="flex justify-between gap-2">
        {nav.map((item) => (
          <Link href={item.href} key={`mobile-nav-${item.name}`}>
            <a
              className={classNames(
                item.current
                  ? 'bg-blue-200 dark:bg-primary-800 text-primary-900 dark:text-white'
                  : 'text-blue-500 dark:text-primary-100 hover:bg-primary-200 dark:hover:bg-primary-800 hover:text-primary-600',
                'group w-full p-1 rounded-md flex flex-col items-center text-xs font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? 'text-primary-800 dark:text-white'
                    : 'text-primary-400 dark:text-primary-300 group-hover:text-primary-600 dark:group-hover:text-primary-200',
                  'h-6 w-6'
                )}
                aria-hidden="true"
              />
              <span className="text-sm mt-2">{item.name}</span>
            </a>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default MobileNav
