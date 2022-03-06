import { TvShowDetails as TmdbTvShowDetails } from 'tmdb-typescript-api'

import { tmdb } from '@/tmdb'

export type TmdbTvShowCredits = {
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
  crew: {
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
  }[]
}

export const getTvShowDetails = async (
  id: number
): Promise<TmdbTvShowDetails> => {
  try {
    const res = await tmdb.get<TmdbTvShowDetails>(`/tv/${id}`)
    return res.data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const getTvShowCredits = async (
  id: number
): Promise<TmdbTvShowCredits> => {
  try {
    const res = await tmdb.get<any>(`/tv/${id}/credits`)
    return res.data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export { TmdbTvShowDetails }
