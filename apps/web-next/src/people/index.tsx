import { PersonDetails } from 'tmdb-typescript-api'

import { tmdb } from '@/tmdb'

import HeadShot from './HeadShot'
import { CastMember, CrewMember } from './Person'

export const getPersonDetails = async (id: number): Promise<PersonDetails> => {
  try {
    const res = await tmdb.get<PersonDetails>(`/person/${id}`)
    return res.data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export function isTvCredit(credit: any): credit is TmdbPersonTvCastCredit {
  return credit.name
}

export type TmdbPersonTvCastCredit = {
  name: string
  vote_average: number
  id: number
  first_air_date: Date
  vote_count: number
  backdrop_path: string
  poster_path: string
  genre_ids: number[]
  overview: string
  original_language: string
  original_name: string
  origin_country: string[]
  popularity: number
  character: string
  credit_id: string
  episode_count: 16
  media_type: string
}

export type TmdbPersonCastCredit =
  | TmdbPersonMovieCastCredit
  | TmdbPersonTvCastCredit

export type TmdbPersonCrewCredit =
  | TmdbPersonMovieCrewCredit
  | TmdbPersonTvCrewCredit

export function isPersonMovieCastCredit(
  credit: TmdbPersonCastCredit
): credit is TmdbPersonMovieCastCredit {
  return 'title' in credit
}

export function isPersonTvCastCredit(
  credit: TmdbPersonCastCredit
): credit is TmdbPersonTvCastCredit {
  return 'name' in credit
}

export type TmdbPersonMovieCastCredit = {
  character: string
  credit_id: string
  release_date: string
  vote_count: number
  video: boolean
  adult: boolean
  vote_average: number
  title: string
  genre_ids: number[]
  original_language: string
  original_title: string
  popularity: number
  id: number
  backdrop_path: string
  overview: string
  poster_path: string
}

type TmdbPersonTvCrewCredit = {
  media_type: 'tv'
  id: number
  name: string[]
  job: string

  backdrop_path: string
  credit_id: string
  department: string
  episode_count: 5
  first_air_date: Date
  genre_ids: number[]
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

export function isPersonTvCrewCredit(
  credit: TmdbPersonCrewCredit
): credit is TmdbPersonTvCrewCredit {
  return credit.media_type === 'tv'
}

type TmdbPersonMovieCrewCredit = {
  media_type: 'movie'
  id: number
  title: string
  job: string

  adult: boolean
  backdrop_path: string
  credit_id: string
  department: string
  genre_ids: number[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: Date
  video: boolean
  vote_average: number
  vote_count: number
}

export function isPersonMovieCrewCredit(
  credit: TmdbPersonCrewCredit
): credit is TmdbPersonMovieCrewCredit {
  return credit.media_type === 'movie'
}

type TmdbPersonCombinedCredits = {
  id: string
  cast: TmdbPersonCastCredit[]
  crew: TmdbPersonCrewCredit[]
}

export const getPersonCombinedCredits = async (
  id: number
): Promise<TmdbPersonCombinedCredits> => {
  try {
    const res = await tmdb.get<TmdbPersonCombinedCredits>(
      `/person/${id}/combined_credits`
    )
    return res.data
  } catch (error: unknown) {
    if (process.env.NODE_ENV !== 'production') console.error(error)
    throw error
  }
}

export type { TmdbPersonCombinedCredits, PersonDetails as TmdbPersonDetails }
export { HeadShot, CastMember, CrewMember }
