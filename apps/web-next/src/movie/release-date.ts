import isFuture from 'date-fns/isFuture'
import isPast from 'date-fns/isPast'

import {
  MovieReleaseDateType,
  TmdbMovieReleaseDate,
  getTmdbMovieReleaseDates
} from '@/tmdb/movie/release_dates'

export const getMovieReleaseDates = async (
  id: number,
  locale?: string
): Promise<TmdbMovieReleaseDate[]> => {
  const releaseDates = await getTmdbMovieReleaseDates(id)

  const releaseDatesByLocale = releaseDates.results
    .filter((releaseDate) => releaseDate.iso_3166_1 === 'US')?.[0]
    .release_dates.sort((a, b) => b.type - a.type)

  if (!releaseDatesByLocale) throw 'Release date for locale not found'

  return releaseDatesByLocale
}
