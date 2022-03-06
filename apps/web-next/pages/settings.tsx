import type { NextPage } from 'next'
import Head from 'next/head'

import ThemeSwitcher from '@/ui/ThemeSwitcher'

const SettingsPage: NextPage = () => {
  return (
    <div className="p-4">
      <Head>
        <title>Settings</title>
        <meta name="description" content="Your place for movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Settings</h1>

      <h2>Theme Switcher</h2>
      <ThemeSwitcher />

      <p>Coming Soon</p>
      <ul>
        <li>Force theme</li>
        <li>Clear forced theme value</li>
      </ul>
    </div>
  )
}

export default SettingsPage
