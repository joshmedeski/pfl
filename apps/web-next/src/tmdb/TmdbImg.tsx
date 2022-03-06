import Image from 'next/image'
import React from 'react'

import blank from '../../public/blank.jpg'

const TmdbImage: typeof Image = (props) => {
  const src = props.src ? 'https://image.tmdb.org/t/p/w500' + props.src : blank

  return (
    <Image
      {...props}
      width={props.width || 500}
      height={props.height || 750}
      src={src}
      className="rounded-2xl shadow-md"
      alt={props.alt || 'image from tmdb'}
    />
  )
}

export const TmdbOriginalImage: typeof Image = (props) => {
  const src: string | StaticImageData = props.src
    ? 'https://image.tmdb.org/t/p/original' + props.src
    : blank.src

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} src={src} alt={props.alt || 'image from tmdb'} />
  )
}

export default TmdbImage
