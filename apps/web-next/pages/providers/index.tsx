import type { NextPage } from 'next'
import Head from 'next/head'

import { H1 } from '@/ui'
import ThemeSwitcher from '@/ui/ThemeSwitcher'
import WatchProvider, { WatchProviderName } from '@/ui/providers/WatchProvider'

const SettingsPage: NextPage = () => {
  const defaultProps = {
    logo_path: '',
    provider_id: 0,
    display_priority: 0
  }

  return (
    <div className="p-4">
      <Head>
        <title>Watch Providers</title>
      </Head>

      <div className="mb-4">
        <H1>Watch Providers</H1>
      </div>

      <div className="grid grid-cols-4 gap-4 place-items-start">
        <WatchProvider
          {...defaultProps}
          provider_name={WatchProviderName.HboMax}
        />
        <WatchProvider
          {...defaultProps}
          provider_name={WatchProviderName.Netflix}
        />
        <WatchProvider
          {...defaultProps}
          provider_name={WatchProviderName.DisneyPlus}
        />
        <WatchProvider
          {...defaultProps}
          provider_name={WatchProviderName.Hulu}
        />
      </div>
    </div>
  )
}

export default SettingsPage
