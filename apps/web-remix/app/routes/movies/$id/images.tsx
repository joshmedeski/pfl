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
  const images = await db.movie.getImages(id)
  return { images }
}

export default function MovieImagesPage() {
  const { images } = useInferredRouteData<typeof loader>()

  return (
    <div className="grid grid-cols-2 gap-4">
      {images.backdrops.map(({ file_path }) => {
        const src = `https://image.tmdb.org/t/p/original/${file_path}`
        return (
          <a href={src} target="_blank" rel="noopener noreferrer">
            <img src={src} alt={file_path} />
          </a>
        )
      })}
    </div>
  )
}
