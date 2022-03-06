import { MovieDetails } from 'tmdb-typescript-api'

import { tmdbApi } from '@/tmdb'

import Movie from './Movie'
import MoviePoster from './MoviePoster'

export const getMovieDetails = async (id: number): Promise<MovieDetails> => {
  try {
    const res = await tmdbApi.get<MovieDetails>(`/movie/${id}`)
    return res.data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export type TmdbMovieCreditCrew = {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  credit_id: string
  department: string
  job: string
}

export type TmdbMovieCredits = {
  id: number
  cast: {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
    cast_id: number
    character: string
    credit_id: string
    order: number
  }[]
  crew: TmdbMovieCreditCrew[]
}

export const getMovieCredits = async (
  id: number
): Promise<TmdbMovieCredits> => {
  try {
    const res = await tmdbApi.get<TmdbMovieCredits>(`/movie/${id}/credits`)
    return res.data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export { MovieDetails as TmdbMovieDetails, MoviePoster, Movie }
