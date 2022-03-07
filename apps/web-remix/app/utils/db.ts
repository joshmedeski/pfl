import { Tmdb } from 'tmdb'
import { DataFunctionArgs as LoaderArgs } from '@remix-run/server-runtime'

export class Db extends Tmdb {
  constructor() {
    super({ apiKey: process.env.TMDB_API_KEY })
  }
}
