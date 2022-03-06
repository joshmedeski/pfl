import axios from 'axios'
import React, { useEffect, useState } from 'react'

import WatchProvider, { WatchProviderType } from '@/ui/providers/WatchProvider'

export type WatchProviders = {
  id: string
  results: {
    [key: string]: {
      buy: WatchProviderType[]
      flatrate: WatchProviderType[]
      link: string
    }
  }
}

const MovieWatchProviders: React.FC<{ id: number }> = ({ id }) => {
  const [showMore, setShowMore] = useState<boolean>(false)
  const [watchProviders, setWatchProviders] = useState<WatchProviders>()

  const getWatchProviders = async (movie_id: number) => {
    const { data } = await axios.get<WatchProviders>(
      `/api/tmdb/movie/${movie_id}/watch/providers`
    )

    setWatchProviders(data)
  }

  useEffect(() => {
    getWatchProviders(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (watchProviders?.results?.['US']?.flatrate) {
    return (
      <section>
        {watchProviders?.results?.['US']?.flatrate.map((provider, index) => {
          if (!showMore && index > 0) {
            return <React.Fragment />
          } else {
            return (
              <WatchProvider
                key={'provider-' + provider.provider_id}
                {...provider}
              />
            )
          }
        })}

        {watchProviders?.results?.['US']?.flatrate.length &&
          watchProviders?.results?.['US']?.flatrate.length > 1 && (
            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="block text-sm text-primary-600 dark:text-primary-400 ml-1 mt-1"
            >
              {showMore ? 'Show Less' : 'Show More'}
            </button>
          )}
      </section>
    )
  } else {
    return <React.Fragment />
  }
}

export default MovieWatchProviders
