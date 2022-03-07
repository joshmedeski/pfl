import classNames from 'classnames'
import { PosterSize, ProfileSize } from 'tmdb'
import InnerImageZoom from 'react-inner-image-zoom'

const Img: React.FC<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > & { size: string }
> = ({ src, alt, size }) => {
  return (
    <img
      alt={alt}
      src={`https://image.tmdb.org/t/p/${size}` + src}
      className={classNames(['max-w-full h-auto'])}
    />
  )
}

export const PosterImg: React.FC<{
  src: string | undefined
  alt: string
  size: PosterSize
  innerZoom?: boolean
}> = ({ alt, src, size = 'w185', innerZoom = false }) => {
  if (innerZoom) {
    return (
      <InnerImageZoom
        src={`https://image.tmdb.org/t/p/${size}` + src}
        zoomSrc={`https://image.tmdb.org/t/p/original` + src}
        hideHint={true}
      />
    )
  } else {
    return <Img alt={alt} src={src} size={size} />
  }
}

export const ProfileImg: React.FC<{
  src: string | undefined
  alt: string
  size: ProfileSize
}> = ({ alt, src, size = 'w185' }) => {
  return <Img alt={alt} src={src} size={size} />
}
