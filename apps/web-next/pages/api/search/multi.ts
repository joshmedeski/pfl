import type { NextApiRequest, NextApiResponse } from 'next'
import { Movie, Person, SearchResult, TvShow } from 'tmdb-typescript-api'

import { tmdbApi } from '@/tmdb'

export type MultiSearchResults = SearchResult<Movie | TvShow | Person>

export function isMovieSearchResult(
  result: Movie | TvShow | Person
): result is Movie {
  return 'release_date' in result
}

export function isTvShowSearchResult(
  result: Movie | TvShow | Person
): result is TvShow {
  return 'first_air_date' in result
}

export function isPersonSearchResult(
  result: Movie | TvShow | Person
): result is Person {
  return 'known_for' in result
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MultiSearchResults | { error: string }>
) {
  try {
    const query = req.query['query']
    if (!query) return res.status(400).json({ error: 'Missing query' })

    const { data } = await tmdbApi.get<MultiSearchResults>('/search/multi', {
      params: { query }
    })

    return res.status(200).json(data)
  } catch (error: unknown) {
    if (process.env.NODE_ENV !== 'production') console.error(error)
    return res.status(500).json({ error: 'Failed to get search results' })
  }
}
