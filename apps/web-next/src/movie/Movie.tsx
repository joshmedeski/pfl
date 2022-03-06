import Link from 'next/link'
import React from 'react'

import MoviePoster from './MoviePoster'

const Movie: React.FC<{
  movie: {
    id: number
    src: string
    name: any
    detail?: string
  }
}> = ({ movie }) => {
  return (
    <Link href={`/movies/${movie.id}`} passHref>
      <a data-cy={movie.name}>
        <MoviePoster movie={{ id: movie.id, src: movie.src }} />

        <div className="p-2">
          <h3 className="font-semibold text-xl leading-none mb-2">
            {movie.name}
          </h3>

          {movie?.detail && (
            <p className="font-lg text-neutral-500 leading-none">
              {movie.detail}
            </p>
          )}
        </div>
      </a>
    </Link>
  )
}

export default Movie
