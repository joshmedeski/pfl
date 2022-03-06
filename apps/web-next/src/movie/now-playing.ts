import { tmdb } from '@/tmdb'

export type MovieNowPlaying = {
  poster_path: string | null
  adult: boolean
  overview: string
  release_date: Date
  genre_ids: number[]
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path: string | null
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}

export const getMoviesNowPlaying = async (): Promise<MovieNowPlaying[]> => {
  try {
    const res = await tmdb.get<{
      page: number
      results: MovieNowPlaying[]
      dates: {
        maximum: Date
        minimum: Date
      }
      total_pages: number
      total_results: number
    }>(`/movie/now_playing`)

    return res.data.results
  } catch (err) {
    console.error(err)
    throw err
  }
}
