import React from 'react'

import TmdbImage from '@/tmdb/TmdbImg'
import { MovieIcon } from '@/ui/Icon'

const MoviePoster: React.FC<{ movie: { id: number; src: string } }> = ({
  movie
}) => {
  return <TmdbImage src={movie.src} />
}

export default MoviePoster
