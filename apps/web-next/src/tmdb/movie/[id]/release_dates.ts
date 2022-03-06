import { tmdbApi } from '@/tmdb'

export enum MovieReleaseDateType {
  Premiere = 1,
  TheatricalLimited = 2,
  Theatrical = 3,
  Digital = 4,
  Physical = 5,
  TV = 6
}

export type TmdbMovieReleaseDate = {
  certification: string
  release_date: string
  type: MovieReleaseDateType
  iso_639_1?: string
  note?: string
}

type TmdbMovieReleaseDates = {
  id: number
  results: {
    iso_3166_1: string
    release_dates: TmdbMovieReleaseDate[]
  }[]
}

export const getTmdbMovieReleaseDates = async (
  id: number
): Promise<TmdbMovieReleaseDates> => {
  const { data: releaseDates } = await tmdbApi.get<TmdbMovieReleaseDates>(
    `/movie/${id}/release_dates`
  )

  return releaseDates
}
