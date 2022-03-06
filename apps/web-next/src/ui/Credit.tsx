import Link from 'next/link'
import React from 'react'

import TmdbImage from '@/tmdb/TmdbImg'

import { MovieIcon, PersonIcon, TvIcon } from './Icon'

export type CreditProps = {
  type: 'movie' | 'tv' | 'person'
  id: number
  imgSrc: string
  name: any
  detail: string
}

const Credit: React.FC<{ credit: CreditProps }> = ({ credit }) => {
  const { type, id, imgSrc, name, detail } = credit

  function getHref() {
    switch (type) {
      case 'movie':
        return `/movies/${id}`
      case 'tv':
        return `/tv/${id}`
      case 'person':
        return `/people/${id}`
      default:
        throw 'Credit href failed'
    }
  }

  function getIcon() {
    switch (type) {
      case 'movie':
        return <MovieIcon />
      case 'tv':
        return <TvIcon />
      case 'person':
        return <PersonIcon />
      default:
        throw 'Credit href failed'
    }
  }

  return (
    <Link href={getHref()} passHref>
      <a data-cy={name}>
        <section className="relative">
          <TmdbImage src={imgSrc} />

          <div className="absolute bottom-3 left-2">
            <div className="flex gap-1">{getIcon()}</div>
          </div>
        </section>

        <div className="p-2">
          <h3 className="font-semibold text-xl leading-none mb-2">{name}</h3>
          <p className="font-lg text-neutral-500 leading-none">{detail}</p>
        </div>
      </a>
    </Link>
  )
}

export default Credit
