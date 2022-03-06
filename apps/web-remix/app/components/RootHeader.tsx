import { SearchIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import { Link, Links, Meta, Scripts, useCatch } from 'remix'

import Logo from './Logo'

const RootHeader: React.FC = () => {
  const nav: { href: string; text: string }[] = [
    { href: '/people', text: 'People' },
    { href: '/movies', text: 'Movies' },
    { href: '/tv', text: 'TV Shows' },
    { href: '/popular', text: 'Popular' },
    { href: '/search', text: 'Search' }
  ]

  return (
    <header
      className={classNames([
        'z-50 fixed bg-white dark:bg-gray-900 w-full',
        'border-b border-gray-300 dark:border-gray-700'
      ])}
    >
      <section className="flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <Logo />

          <nav className="hidden md:block border-l border-gray-300 dark:border-gray-700 ml-2 pl-2">
            <ul className="flex">
              {nav.map(({ text, href }) => (
                <li key={`${text} header nav`}>
                  <Link to={href} className={classNames(['px-3 py-2'])}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center">
          <SearchIcon className="w-6 h-6 text-gray-500" />
          <div className="mr-4">Login</div>
        </div>
      </section>
    </header>
  )
}

export default RootHeader
