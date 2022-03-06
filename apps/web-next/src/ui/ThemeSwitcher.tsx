import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [themeColor, setThemeColor] = useState<string>()
  const [mounted, setMounted] = useState(false)

  const iconClasses = 'text-blue-300 group-hover:text-white h-6 w-6'

  const toggleTheme = () => {
    setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  useEffect(() => {
    setThemeColor(() => {
      switch (theme) {
        case 'light':
          return '#ffffff'
        case 'dark':
        default:
          return '#171717'
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])

  return (
    <>
      <Head>
        <meta name="msapplication-TileColor" content={themeColor} />
        <meta name="theme-color" content={themeColor} />
      </Head>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle Dark Mode"
        className="group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium text-blue-100 hover:bg-blue-800 hover:text-white"
      >
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
          <MoonIcon className={iconClasses} />
        ) : (
          <SunIcon className={iconClasses} />
        )}

        <span className="mt-2">Theme</span>
      </button>
    </>
  )
}

export default ThemeSwitcher
