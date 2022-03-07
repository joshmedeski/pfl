import { useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'

import Grid from '~/components/Grid'
import { Tmdb } from 'tmdb'
import { PopularMovies } from 'tmdb/src/movie/popular'
import { PopularTvShows } from 'tmdb/src/tv/popular'

type LoaderData = {
  popularMovies: PopularMovies
  popularTv: PopularTvShows
}

export const loader: LoaderFunction = async (): Promise<LoaderData> => {
  const tmdb = new Tmdb({ apiKey: process.env.TMDB_API_KEY })

  const popularMovies = await tmdb.movies.getPopular()
  const popularTv = await tmdb.tvShows.getPopular()

  return {
    popularMovies,
    popularTv
  }
}

const Homepage: React.FC = () => {
  const { popularMovies, popularTv } = useLoaderData<LoaderData>()

  return (
    <>
      <div className="p-4">
        <Grid
          title="Popular Movies"
          items={popularMovies.results.map((result) => ({
            img: {
              src: result.poster_path,
              size: 'w300'
            },
            title: result.title,
            meta: String(new Date(result.release_date).getFullYear()),
            to: `/movies/${result.id}`
          }))}
        />

        <Grid
          title="Popular TV"
          items={popularTv.results.map((result) => ({
            img: {
              src: result.poster_path,
              size: 'w300'
            },
            title: result.name,
            meta: String(new Date(result.first_air_date).getFullYear()),
            to: `/tv/${result.id}`
          }))}
        />
      </div>
    </>
  )
}

export default Homepage
