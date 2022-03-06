import { Outlet, useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'

import Grid from '~/components/Grid'
import { TvShowDetails } from 'tmdb/dist/tvShow'
import { Tmdb } from 'tmdb'
import invariant from 'tiny-invariant'
import classNames from 'classnames'

type LoaderData = {
  details: TvShowDetails
}

export const loader: LoaderFunction = async ({
  params
}): Promise<LoaderData> => {
  invariant(params.tvId, 'expected params.tvId')
  const tmdb = new Tmdb({ apiKey: process.env.TMDB_API_KEY })

  const details = await tmdb.tvShow.getDetails(params.tvId)

  return { details }
}
export default function Index() {
  const { details } = useLoaderData<LoaderData>()

  return (
    <>
      <div className="p-6">
        <div className="grid grid-cols-4 gap-4">
          <img
            src={'https://image.tmdb.org/t/p/w400/' + details.poster_path}
            className={classNames(['w-full h-auto', 'border border-gray-700'])}
            alt={details.name}
          />

          <div className="col-span-3">
            <h1 className="mb-6 text-5xl font-extrabold">{details.name}</h1>

            <Grid
              title="Seasons"
              items={
                details.seasons?.map((season) => ({
                  src: season.poster_path,
                  title: season.name,
                  meta: String(new Date(season.air_date).getFullYear()),
                  to: `season/${season.season_number}`
                })) || []
              }
            />

            <Outlet />

            <Grid
              title="Cast"
              items={
                details.credits?.cast.map((cast) => ({
                  src: cast.profile_path,
                  title: cast.name,
                  meta: cast.character,
                  to: `/people/${cast.id}`
                })) || []
              }
            />

            <Grid
              title="Crew"
              items={
                details.credits?.crew.map((cast) => ({
                  src: cast.profile_path,
                  title: cast.name,
                  meta: cast.job,
                  to: `/people/${cast.id}`
                })) || []
              }
            />
          </div>
        </div>
      </div>

      <hr className="border-gray-700" />

      <div className="px-6 pt-4">
        <Grid
          title="Recommendations"
          items={
            details.recommendations?.results.map((tv) => ({
              src: tv.poster_path,
              title: tv.name,
              meta: String(new Date().getFullYear()),
              to: `/tv/${tv.id}`
            })) || []
          }
        />
      </div>
    </>
  )
}
