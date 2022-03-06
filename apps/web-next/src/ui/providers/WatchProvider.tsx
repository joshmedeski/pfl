import classNames from 'classnames'
import Image from 'next/image'
import React, { FunctionComponent, ReactElement } from 'react'

import JustWatch from '../../../public/brands/JustWatch-logo-large.png'

export enum WatchProviderName {
  DisneyPlus = 'Disney Plus',
  HboMax = 'HBO Max',
  Hulu = 'Hulu',
  Netflix = 'Netflix',
  AmazonPrimeVideo = 'Amazon Prime Video'
}

export type WatchProviderType = {
  display_priority: number
  logo_path: string
  provider_id: number
  provider_name: WatchProviderName
}

const Provider: React.FC<{
  provider: WatchProviderType
  config?: {
    logoSrc?: string
    bgSrc?: string
  }
}> = ({ provider, config }) => {
  return (
    <section
      key={provider.provider_name}
      data-cy={provider.provider_name}
      className={classNames([
        'grid grid-cols-4 place-content-between',
        'p-4 pt-8 rounded-xl',
        'bg-cover mb-4'
      ])}
      style={{
        backgroundImage: `url(${config?.bgSrc || '/brands/disney-plus-bg.jpg'})`
      }}
    >
      <div className="col-span-4 row-span-2 mb-4 place-self-stretch place-self-center">
        {config?.logoSrc ? (
          <img
            src={config.logoSrc}
            alt={provider.provider_name}
            className="w-full h-auto"
          />
        ) : (
          <div className="font-extrabold text-5xl text-center">
            {provider.provider_name}
          </div>
        )}
      </div>

      <div className="col-start-2 col-span-2 mx-auto mt-3 place-items-end">
        <Image src={JustWatch} alt="JustWatch" />
      </div>
    </section>
  )
}

const WatchProvider: React.FC<WatchProviderType> = (provider) => {
  switch (provider.provider_name) {
    case WatchProviderName.AmazonPrimeVideo:
      return (
        <Provider
          provider={provider}
          config={{
            logoSrc: '/brands/amazon-prime-video-logo.png'
          }}
        />
      )
    case WatchProviderName.DisneyPlus:
      return (
        <Provider
          provider={provider}
          config={{
            logoSrc: '/brands/disney-plus-logo.svg',
            bgSrc: '/brands/disney-plus-bg.jpg'
          }}
        />
      )
    case WatchProviderName.HboMax:
      return (
        <Provider
          provider={provider}
          config={{
            logoSrc: '/brands/hbo-max-logo.svg',
            bgSrc: '/brands/hbo-max-bg.jpg'
          }}
        />
      )
    case WatchProviderName.Hulu:
      return (
        <Provider
          provider={provider}
          config={{
            logoSrc: '/brands/hulu-logo.svg',
            bgSrc: '/brands/hulu-bg.jpg'
          }}
        />
      )
    case WatchProviderName.Netflix:
      return (
        <Provider
          provider={provider}
          config={{
            logoSrc: '/brands/netflix-logo.svg',
            bgSrc: '/brands/netflix-bg.jpg'
          }}
        />
      )
    default:
      return <Provider provider={provider} />
  }
}

export default WatchProvider
