import axios from 'axios'
import { NextApiResponse } from 'next'

import TmdbImg from './TmdbImg'

export type TmdbApiResponse<T> = NextApiResponse<T | { errorMsg: string }>

console.log(
  'process.env.NEXT_PUBLIC_VERCEL_URL: ',
  process.env.NEXT_PUBLIC_VERCEL_URL
)

export const tmdb = axios.create({
  baseURL: process.env.NEXT_PUBLIC_VERCEL_URL + '/api/tmdb'
})

export { tmdb as tmdbApi }
export { TmdbImg }
