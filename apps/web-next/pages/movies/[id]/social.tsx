import type { GetServerSideProps } from 'next'
import React from 'react'

import { GenreTags } from '@/genre/GenreTag'
import { NextPageWithLayout } from '@/layout'
import SocialLayout from '@/layout/SocialLayout'
import {
  MoviePoster,
  TmdbMovieCredits,
  TmdbMovieDetails,
  getMovieCredits,
  getMovieDetails
} from '@/movie'
import { CastMember } from '@/people/Person'
import { H1 } from '@/ui'
import { RuntimeDetail } from '@/ui/Detail'
import { Grid } from '@/ui/grid'

type ServerSideProps = {
  movie: TmdbMovieDetails
  credits: TmdbMovieCredits
}

const MovieSocialPage: NextPageWithLayout<ServerSideProps> = ({
  movie,
  credits
}) => {
  return (
    <section className="p-10 scale-105">
      <section className="flex items-center justify-center">
        <div className="w-3/12">
          <MoviePoster movie={{ id: movie.id, src: movie.poster_path }} />
        </div>

        <div className="w-7/12 ml-10">
          <div className="mt-4 space-y-10">
            <div>
              <H1>{movie.title}</H1>
              {!!movie.tagline && <em className="">{movie.tagline}</em>}
            </div>

            <div className="flex space-x-10 items-center">
              <RuntimeDetail runtime={movie.runtime} />
              <GenreTags genres={movie.genres} />
            </div>

            <Grid>
              {credits.cast.map((member, index) => {
                if (index < 5) {
                  return <CastMember key={member.id + index} member={member} />
                }
              })}
            </Grid>
          </div>
        </div>
      </section>
    </section>
  )
}

MovieSocialPage.getLayout = (page) => <SocialLayout>{page}</SocialLayout>

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

export default MovieSocialPage
