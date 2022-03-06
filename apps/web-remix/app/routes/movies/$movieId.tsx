import { DataFunctionArgs as LoaderArgs } from '@remix-run/server-runtime'
import classNames from 'classnames'
import invariant from 'tiny-invariant'

import Crew from '~/components/Crew'
import Grid, { Row } from '~/components/Grid'
import { useInferredRouteData } from '~/remix-extended'
import { Tmdb } from 'tmdb'

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.movieId, 'expected params.movieId')
  const tmdb = new Tmdb({ apiKey: process.env.TMDB_API_KEY })
  const details = await tmdb.movie.getDetails(Number(params.movieId))
  const credits = await tmdb.movie.getCredits(Number(params.movieId))
  const recommendations = await tmdb.movie.getRecommendations(
    Number(params.movieId)
  )
  return { details, credits, recommendations }
}

export default function Index() {
  const { details, credits, recommendations } =
    useInferredRouteData<typeof loader>()

  return (
    <>
      <div className="">
        <div className="grid lg:grid-cols-4">
          <div className="md:border-r border-gray-700 relative mt-1">
            <div className="p-4">
              <img
                src={'https://image.tmdb.org/t/p/w400/' + details.poster_path}
                className={classNames(['w-full h-auto'])}
                alt={details.title}
              />
            </div>
          </div>

          <div className={classNames(['md:col-span-3 p-4'])}>
            <h1 className="text-5xl mb-6 font-extrabold">{details.title}</h1>

            <Grid
              title="Cast"
              items={credits.cast.map((cast) => {
                const img = cast.profile_path
                  ? {
                      src: cast.profile_path,
                      size: 'w300'
                    }
                  : undefined

                return {
                  img,
                  title: cast.name,
                  meta: cast.character,
                  to: `/people/${cast.id}`
                }
              })}
            />

            <Crew crew={credits.crew} />
          </div>
        </div>
      </div>

      <hr className="border-gray-700" />

      <div className="px-6 pt-4">
        <Row
          title="Recommendations"
          items={recommendations.results.map((movie) => ({
            img: {
              src: movie.poster_path,
              size: 'w300'
            },
            title: movie.title,
            meta: String(new Date(movie.release_date).getFullYear()),
            to: `/movies/${movie.id}`
          }))}
        />
      </div>
    </>
  )
}
