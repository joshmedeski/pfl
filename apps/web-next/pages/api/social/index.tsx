import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { GenreTags } from '@/genre/GenreTag'
import {
  MoviePoster,
  TmdbMovieCredits,
  TmdbMovieDetails,
  getMovieCredits,
  getMovieDetails
} from '@/movie'
import { CastMember, CrewMember } from '@/people/Person'
import { H1, H2 } from '@/ui'
import { Details, RuntimeDetail } from '@/ui/Detail'
import { Grid } from '@/ui/grid'

type ServerSideProps = {
  movie: TmdbMovieDetails
  credits: TmdbMovieCredits
}

const MoviePage: NextPage<ServerSideProps> = ({ movie, credits }) => {
  const socialImg = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/social/movie?id=${movie.id}`

  return (
    <section className="grid grid-cols-1 sm:grid-cols-4 gap-6">
      <Head>
        <meta property="og:image" content={socialImg} />
        <meta property="og:title" content={movie.title} />
        <meta property="og:description" content={movie.tagline} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={movie.title} />
        <meta name="twitter:description" content={movie.tagline} />
        <meta name="twitter:image" content={socialImg} />
      </Head>
      <div>
        <div className="w-64 sm:w-full max-w-full mx-auto">
          <MoviePoster movie={{ id: movie.id, src: movie.poster_path }} />
        </div>

        <div className="mt-4 space-y-2 sm:space-y-4 md:space-y-6">
          <div>
            <H1>{movie.title}</H1>
            {!!movie.tagline && <em className="">{movie.tagline}</em>}
          </div>

          <Details>
            <RuntimeDetail runtime={movie.runtime} />
          </Details>
          <GenreTags genres={movie.genres} />
          <p>{movie.overview}</p>
        </div>
      </div>

      <div className="sm:col-span-3">
        <div className="mb-2">
          <H2>Cast</H2>
        </div>

        <Grid>
          {credits.cast.map((member, index) => (
            <CastMember key={member.id + index} member={member} />
          ))}
        </Grid>

        <hr className="border-2 border-neutral-200 dark:border-neutral-800 my-8 sm:my-16 rounded-full" />

        <div className="mt-4 mb-2">
          <H2>Crew</H2>
        </div>

        <Grid>
          {credits.crew.map((member, index) => (
            <CrewMember key={member.id + index} member={member} />
          ))}
        </Grid>
      </div>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async ({
  params
}) => {
  try {
    const id = Number(params!.id)
    const movie = await getMovieDetails(id)
    const credits = await getMovieCredits(id)

    if (!movie) return { notFound: true }
    return { props: { movie, credits } }
  } catch (err) {
    console.error(err)
    return { notFound: true }
  }
}

export default MoviePage
