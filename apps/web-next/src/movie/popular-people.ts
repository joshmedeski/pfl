import { Person } from 'tmdb-typescript-api'

import { tmdbApi } from '@/tmdb'

export const getPopularPeople = async (): Promise<Person[]> => {
  try {
    const res = await tmdbApi.get<{
      page: number
      results: Person[]
      dates: {
        maximum: Date
        minimum: Date
      }
      total_pages: number
      total_results: number
    }>(`/person/popular`)

    return res.data.results
  } catch (err) {
    console.error(err)
    throw err
  }
}
