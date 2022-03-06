import { Movie } from 'tmdb-typescript-api'

import { tmdbApi } from '@/tmdb'

type TmdbMovieRecommendations = {
  page: number
  results: Movie[]
}

export const getTmdbMovieRecommendations = async (
  id: number
): Promise<Movie[]> => {
  const { data: recommendations } = await tmdbApi.get<TmdbMovieRecommendations>(
    `/movie/${id}/recommendations`
  )

  console.log('recommendations: ', recommendations)

  return recommendations.results
}
