import { FilmIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import React from 'react'

import Logo from '@/ui/Logo'

const SocialLayout: React.FC = ({ children }) => {
  return (
    <div className="dark">
      <section
        className={classNames([
          'aspect-video',
          'flex flex-col justify-between',
          'bg-white dark:bg-neutral-900 dark:text-white'
        ])}
      >
        <header />

        <div>
          {children}
          <footer className="flex justify-center items-center">
            <Logo />
          </footer>
        </div>

        <footer />
      </section>
    </div>
  )
}

export default SocialLayout
