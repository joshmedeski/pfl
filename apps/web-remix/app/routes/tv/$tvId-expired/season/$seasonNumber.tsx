import MoviesTmdb from 'moviestmdb'
import { Outlet, useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'

import Grid from '~/components/Grid'

type LoaderData = {
  details: any
}

export const loader: LoaderFunction = async ({
  params
}): Promise<LoaderData> => {
  const tmdb = new MoviesTmdb(process.env.TMDB_API as string)

  const details = await tmdb.getTvSeason(
    Number(params.tvId),
    Number(params.seasonNumber)
  )

  console.log('details: ', details)

  return { details }
}
export default function Index() {
  const { details } = useLoaderData<LoaderData>()

  console.log('details: ', details)

  return (
    <>
      <Grid
        title={`${details?.name} Episodes`}
        items={
          details.episodes?.map((episode) => ({
            src: episode?.still_path,
            title: episode.name,
            meta: `Episode ${episode.episode_number} (${String(
              new Date(episode.air_date).getFullYear()
            )})`,
            to: `episode/${episode.episode_number}`
          })) || []
        }
      />
    </>
  )
}
