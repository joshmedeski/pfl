import { DataFunctionArgs as LoaderArgs } from '@remix-run/server-runtime'
import classNames from 'classnames'
import invariant from 'tiny-invariant'

import Crew from '~/components/Crew'
import Grid, { Row } from '~/components/Grid'
import { useInferredRouteData } from '~/remix-extended'
import { PosterImg } from '~/ui/Img'

import styles from 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import { Db } from '~/utils/db'
import { Outlet } from 'remix'

export const links = () => [{ rel: 'stylesheet', href: styles }]

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.id, 'expected params.id')
  const db = new Db()
  const id = Number(params.id)
  const credits = await db.movie.getCredits(id)
  return { credits }
}

export default function MoviePage() {
  const { credits } = useInferredRouteData<typeof loader>()

  return (
    <>
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
    </>
  )
}
