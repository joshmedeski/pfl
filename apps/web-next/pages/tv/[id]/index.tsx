import { InformationCircleIcon, UsersIcon } from '@heroicons/react/outline'
import { format, formatDistanceToNow } from 'date-fns'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { GenreTags } from '@/genre/GenreTag'
import { CastMember, CrewMember } from '@/people/Person'
import TmdbImage from '@/tmdb/TmdbImg'
import {
  TmdbTvShowCredits,
  TmdbTvShowDetails,
  getTvShowCredits,
  getTvShowDetails
} from '@/tv'
import { H1, H2 } from '@/ui'
import { Details, ReleaseDateDetail } from '@/ui/Detail'
import Tabs, { Tab } from '@/ui/Tabs'
import { Grid } from '@/ui/grid'

type ServerSideProps = {
  tvShow: TmdbTvShowDetails
  credits: TmdbTvShowCredits
}

const TvShowPage: NextPage<ServerSideProps> = ({ tvShow, credits }) => {
  const socialImg = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/social/tv?id=${tvShow.id}`

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
      content: () => <p className="text-xl">{tvShow.overview}</p>
    }
  ]

  return (
    <section className="grid grid-cols-1 sm:grid-cols-4 gap-6">
      <Head>
        <meta property="og:image" content={socialImg} />
        <meta property="og:title" content={tvShow.name} />
        <meta property="og:description" content={tvShow.overview} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={tvShow.name} />
        <meta name="twitter:description" content={tvShow.overview} />
        <meta name="twitter:image" content={socialImg} />
      </Head>
      <div>
        <div className="w-64 sm:w-full max-w-full mx-auto">
          <TmdbImage src={tvShow.poster_path} />
        </div>

        <div className="mt-4 space-y-2 sm:space-y-4 md:space-y-6">
          <Details>
            <div>
              <p className="font-semibold text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 leading-none">
                First Aired
              </p>
              <p className="font-semibold text-xl lg:text-2xl leading-none">
                {format(new Date(tvShow.first_air_date), 'EEE, LLL do, yyyy')}
              </p>
              <p className="emphasis lg:text-xl text-neutral-400 dark:text-neutral-500">
                {formatDistanceToNow(new Date(tvShow.first_air_date), {
                  addSuffix: true
                })}
              </p>
            </div>

            {!!tvShow.last_air_date && (
              <div>
                <p className="font-semibold text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 leading-none">
                  Last Aired
                </p>
                <p className="font-semibold text-xl lg:text-2xl leading-none">
                  {format(new Date(tvShow.last_air_date), 'EEE, LLL do, yyyy')}
                </p>
                <p className="emphasis lg:text-xl text-neutral-400 dark:text-neutral-500">
                  {formatDistanceToNow(new Date(tvShow.last_air_date), {
                    addSuffix: true
                  })}
                </p>
              </div>
            )}
          </Details>
          <GenreTags genres={tvShow.genres} />
        </div>
      </div>

      <div className="sm:col-span-3">
        <div className="mb-4">
          <H1>{tvShow.name}</H1>
        </div>

        <Tabs tabs={tabs} />
      </div>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async ({
  params
}) => {
  try {
    const id = Number(params!.id)
    const tvShow = await getTvShowDetails(id)
    const credits = await getTvShowCredits(id)
    if (!tvShow) return { notFound: true }
    return { props: { tvShow, credits } }
  } catch (err) {
    console.error(err)
    return { notFound: true }
  }
}

export default TvShowPage
