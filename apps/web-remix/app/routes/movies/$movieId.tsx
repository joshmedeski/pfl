import { DataFunctionArgs as LoaderArgs } from '@remix-run/server-runtime'
import classNames from 'classnames'
import invariant from 'tiny-invariant'

import Crew from '~/components/Crew'
import Grid, { Row } from '~/components/Grid'
import { useInferredRouteData } from '~/remix-extended'
import { Tmdb } from 'tmdb'
import { PosterImg } from '~/ui/Img'

import styles from 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'

export const links = () => [{ rel: 'stylesheet', href: styles }]

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.movieId, 'expected params.movieId')
  const tmdb = new Tmdb({ apiKey: process.env.TMDB_API_KEY })
  const details = await tmdb.movie.getDetails(Number(params.movieId))
  const credits = await tmdb.movie.getCredits(Number(params.movieId))
  // TODO add release dates (which includes certs, R, PG, etc...)
  //const releaseDates = await tmdb.movie.getReleaseDates(Number(params.movieId))
  const recommendations = await tmdb.movie.getRecommendations(
    Number(params.movieId)
  )
  return { details, credits, recommendations }
}

export default function MoviePage() {
  const { details, credits, recommendations } =
    useInferredRouteData<typeof loader>()

  return (
    <>
      <div className="">
        <div className="grid lg:grid-cols-4">
          <div className="md:border-r border-gray-700 relative mt-1">
            <div className="p-4">
              <PosterImg
                src={details.poster_path}
                alt={details.title}
                size="w500"
                innerZoom
              />
            </div>
          </div>

          <div className={classNames(['md:col-span-3'])}>
            <div className="p-4 border-b border-gray-700 ">
              <h1 className="text-5xl font-extrabold">{details.title}</h1>
              {details.tagline && (
                <p className="mt-1 text-xl">{details.tagline}</p>
              )}
            </div>

            <div className="p-4">
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
