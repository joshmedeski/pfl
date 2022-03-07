import { DataFunctionArgs as LoaderArgs } from '@remix-run/server-runtime'
import classNames from 'classnames'
import invariant from 'tiny-invariant'

import { Row } from '~/components/Grid'
import { useInferredRouteData } from '~/remix-extended'
import { PosterImg } from '~/ui/Img'

import styles from 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import { Db } from '~/utils/db'
import { NavLink, Outlet } from 'remix'

type MovieMenuItem = {
  to: string
  name: string
}

export const links = () => [{ rel: 'stylesheet', href: styles }]

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.id, 'expected params.movieId')
  const db = new Db()
  const id = Number(params.id)
  const details = db.movie.getDetails(id)
  const recommendations = db.movie.getRecommendations(id)
  return await Promise.all([details, recommendations])
}

export default function MoviePage() {
  const menuItems: MovieMenuItem[] = [
    { to: '', name: 'Details' },
    { to: 'cast', name: 'Cast and Crew' },
    { to: 'images', name: 'Images' }
  ]

  const [details, recommendations] = useInferredRouteData<typeof loader>()

  return (
    <>
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
              <p className="mt-1 text-xl italic">{details.tagline}</p>
            )}
          </div>

          <div className="flex border-b border-gray-700">
            {menuItems.map(({ to, name }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  classNames(['px-4 py-2 block', { underline: !isActive }])
                }
              >
                {name}
              </NavLink>
            ))}
          </div>

          <div className="p-4">
            <Outlet />
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
