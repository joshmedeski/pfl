import classNames from 'classnames'
import { Link, Outlet, useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'
import { Tmdb } from 'tmdb'
import invariant from 'tiny-invariant'

type LoaderData = {
  details: any
}

export const loader: LoaderFunction = async ({
  params
}): Promise<LoaderData> => {
  invariant(params.tvId, 'expected params.tvId')
  const tmdb = new Tmdb({ apiKey: process.env.TMDB_API_KEY })

  const details = await tmdb.tvShow.season.getDetails(
    params.tvId,
    Number(params.seasonNumber)
  )

  return { details }
}
export default function Index() {
  const { details } = useLoaderData<LoaderData>()

  return (
    <>
      <div className="p-6">
        <div className="grid grid-cols-4 gap-6">
          <div className="row-span-2 col-span-1">
            <img
              src={'https://image.tmdb.org/t/p/w400/' + details.poster_path}
              className={classNames([
                'w-full h-auto',
                'border border-gray-700'
              ])}
              alt={details.name}
            />

            <div className="p-2 border-t border-gray-700">
              <p
                className={classNames([
                  'font-bold overflow-hidden mb-2',
                  'whitespace-nowrap text-ellipsis',
                  'text-center'
                ])}
              >
                {details.name}
              </p>
            </div>
          </div>

          {details.episodes?.map((episode) => (
            <Link
              to={episode.episode_number}
              className={classNames([
                'bg-white dark:bg-black',
                'shadow-lg shadow-gray-300/20 hover:shadow-gray-300/40',
                'dark:shadow-gray-700/20 dark:hover:shadow-gray-700/40',
                'transition',
                'border border-1 border-gray-200',
                'dark:border-gray-700',
                'rounded-b-xl'
              ])}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500` + episode?.still_path}
                alt={`Episode ${episode.episode_number} still`}
              />

              <div className="p-2 border-t border-gray-700">
                <p
                  className={classNames([
                    'font-bold overflow-hidden mb-2',
                    'whitespace-nowrap text-ellipsis'
                  ])}
                >
                  {episode.name}
                </p>

                <p className="text-gray-500 leading-none">
                  {`Episode ${episode.episode_number} (${String(
                    new Date(episode.air_date).getFullYear()
                  )})`}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
