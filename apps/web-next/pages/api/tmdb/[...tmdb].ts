import axios, { AxiosRequestConfig } from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export type TmdbApiResponse<T> = NextApiResponse<T | { errorMsg: string }>

export default async function tmdbApiHandler(
  req: NextApiRequest,
  res: NextApiResponse<unknown | { error: string }>
) {
  try {
    const body = req.body
    const query = req.query

    const tmdbApi = axios.create({
      baseURL: `https://api.themoviedb.org/3`,
      params: { api_key: process.env.TMDB_API_KEY },
      timeout: 5000
    })

    const uri = req.url?.slice(9)
    if (!uri) throw 'Url not found'

    if (body) {
      const { data } = await tmdbApi.post(uri, { body, query })
      return res.status(200).json(data)
    } else {
      const { data } = await tmdbApi.get(uri, { params: query })
      return res.status(200).json(data)
    }
  } catch (error: unknown) {
    if (process.env.NODE_ENV !== 'production')
      console.error('something went wrong')
    //if (process.env.NODE_ENV !== 'production') console.error(error)
    return res.status(500).json({ error: 'Failed to make id' })
  }
}
