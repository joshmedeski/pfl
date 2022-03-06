import {
  CollectionIcon,
  InformationCircleIcon,
  UsersIcon
} from '@heroicons/react/outline'
import classNames from 'classnames'
import type { GetStaticProps, NextPage } from 'next'
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
import MovieRecommendations from '@/movie/MovieRecommendations'
import MovieWatchProviders from '@/movie/MovieWatchProviders'
import { getMoviesNowPlaying } from '@/movie/now-playing'
import { getMovieReleaseDates } from '@/movie/release-date'
import { CastMember, CrewMember } from '@/people/Person'
import { TmdbOriginalImage } from '@/tmdb/TmdbImg'
import { TmdbMovieReleaseDate } from '@/tmdb/movie/release_dates'
import { H1, H2 } from '@/ui'
import { Details, ReleaseDateDetail, RuntimeDetail } from '@/ui/Detail'
import Tabs, { Tab } from '@/ui/Tabs'
import { Grid } from '@/ui/grid'

type StaticProps = {
  movie: TmdbMovieDetails
  credits: TmdbMovieCredits
  releaseDates: TmdbMovieReleaseDate[]
}

const MoviePage: NextPage<StaticProps> = ({ movie, credits, releaseDates }) => {
  const socialImg = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/social/movie?id=${movie.id}`

  const tabs: Tab[] = [
    {
      name: 'Cast',
      icon: UsersIcon,
      content: () => (
        <Grid>
          {credits.cast.map((member, index) => (
            <CastMember key={member.id + index} member={member} />
          ))}
        </Grid>
      )
    },
    {
      name: 'Crew',
      icon: UsersIcon,
      content: () => (
        <>
          <div>
            <div className="mt-4 mb-2">
              <H2>Directors</H2>
            </div>

            <Grid>
              {credits.crew
                .filter((i) => i.job.includes('Director'))
                .sort((a, b) => a.job.length - b.job.length)
                .map((member, index) => (
                  <CrewMember key={member.id + index} member={member} />
                ))}
            </Grid>
          </div>

          <div>
            <div className="mt-4 mb-2">
              <H2>Producers</H2>
            </div>

            <Grid>
              {credits.crew
                .filter((i) => i.job.includes('Producer'))
                .sort((a, b) => a.job.length - b.job.length)
                .map((member, index) => (
                  <CrewMember key={member.id + index} member={member} />
                ))}
            </Grid>
          </div>

          <div>
            <div className="mt-4 mb-2">
              <H2>Additional Crew</H2>
            </div>

            <Grid>
              {credits.crew
                .filter((i) => !i.job.includes('Director'))
                .filter((i) => !i.job.includes('Producer'))
                .map((member, index) => (
                  <CrewMember key={member.id + index} member={member} />
                ))}
            </Grid>
          </div>
        </>
      )
    },
    {
      name: 'About',
      icon: InformationCircleIcon,
      content: () => <p className="text-xl">{movie.overview}</p>
    },
    {
      name: 'Recommendations',
      icon: CollectionIcon,
      content: () => <MovieRecommendations id={movie.id} />
    }
  ]

  return (
    <section className="grid grid-cols-1 sm:grid-cols-12 gap-6">
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

      <div className="sm:col-span-3">
        <div className="w-64 sm:w-full max-w-full mx-auto">
          <MoviePoster movie={{ id: movie.id, src: movie.poster_path }} />
        </div>

        <div className="mt-4 space-y-2 sm:space-y-4 md:space-y-6">
          <Details>
            <div className="flex items-center">
              <div
                className={classNames([
                  'rounded-2xl',
                  'bg-black dark:bg-white',
                  'dark:text-black text-white',
                  'px-3 py-1 mr-4',
                  'font-extrabold text-2xl lg:text-3xl leading-none'
                ])}
              >
                {releaseDates?.[0].certification}
              </div>

              <RuntimeDetail runtime={movie.runtime} />
            </div>

            {movie.production_companies?.[0] && (
              <div>
                <strong className="sr-only">Produced by</strong>

                {movie.production_companies?.[0].logo_path ? (
                  <div className="bg-white rounded-xl p-2">
                    <TmdbOriginalImage
                      src={movie.production_companies?.[0].logo_path}
                      className="w-full h-auto"
                    />
                  </div>
                ) : (
                  <p>{movie.production_companies?.[0].name}</p>
                )}
              </div>
            )}

            <GenreTags genres={movie.genres} />

            <MovieWatchProviders id={movie.id} />

            {releaseDates.map((releaseDate) => (
              <ReleaseDateDetail
                key={releaseDate.release_date}
                releaseDate={releaseDate}
              />
            ))}
          </Details>
        </div>
      </div>

      <div className="sm:col-span-9">
        <div className="mb-4">
          <H1>{movie.title}</H1>
          {!!movie.tagline && <em className="">{movie.tagline}</em>}
        </div>

        <Tabs tabs={tabs} />
      </div>
    </section>
  )
}

export const getStaticProps: GetStaticProps<StaticProps> = async ({
  params,
  locale
}) => {
  try {
    const id = Number(params!.id)
    const movie = await getMovieDetails(id)
    const credits = await getMovieCredits(id)
    const releaseDates = await getMovieReleaseDates(id, locale)

    if (!movie) return { notFound: true }
    return { props: { movie, credits, releaseDates }, revalidate: 60 }
  } catch (error: unknown) {
    if (process.env.NODE_ENV !== 'production') console.error(error)
    return { notFound: true }
  }
}

export async function getStaticPaths() {
  const movies = await getMoviesNowPlaying()
  const paths = movies.map(({ id }) => ({
    params: { id: String(id) }
  }))

  return { paths, fallback: 'blocking' }
}
export default MoviePage
