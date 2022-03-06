import { InformationCircleIcon, UsersIcon } from '@heroicons/react/outline'
import type { GetServerSideProps, NextPage } from 'next'
import React from 'react'

import {
  HeadShot,
  TmdbPersonCombinedCredits,
  TmdbPersonDetails,
  getPersonCombinedCredits,
  getPersonDetails
} from '@/people'
import { H1 } from '@/ui'
import CastCredit from '@/ui/CastCredit'
import CrewCredit from '@/ui/CrewCredit'
import { BirthdayDetail, Details, GenderDetail } from '@/ui/Detail'
import Tabs, { Tab } from '@/ui/Tabs'
import { Grid } from '@/ui/grid'

type ServerSideProps = {
  person: TmdbPersonDetails
  credits: TmdbPersonCombinedCredits
}

const PersonPage: NextPage<ServerSideProps> = ({ person, credits }) => {
  const tabs: Tab[] = [
    {
      name: 'Cast',
      icon: UsersIcon,
      content: () => (
        <Grid>
          {credits.cast.map((credit, index) => (
            <CastCredit credit={credit} key={credit.id + index + 'cast'} />
          ))}
        </Grid>
      )
    },
    {
      name: 'Crew',
      icon: UsersIcon,
      content: () => (
        <Grid>
          {credits.crew.map((credit, index) => (
            <CrewCredit credit={credit} key={credit.id + index + 'crew'} />
          ))}
        </Grid>
      )
    },
    {
      name: 'About',
      icon: InformationCircleIcon,
      content: () => <p className="text-xl">{person.biography}</p>
    }
  ]

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <div>
          <div className="w-64 sm:w-full max-w-full mx-auto">
            <HeadShot src={person.profile_path} />
          </div>

          <div className="mt-4 space-y-2 sm:space-y-4 md:space-y-6">
            <Details>
              <BirthdayDetail
                birthday={person.birthday}
                deathday={person.deathday}
              />
              <GenderDetail gender={person.gender} />
            </Details>
          </div>
        </div>

        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
          <div className="mb-4">
            <H1>{person.name}</H1>
          </div>

          <Tabs tabs={tabs} />
        </div>
      </section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async ({
  params
}) => {
  try {
    const id = Number(params!.id)
    const person = await getPersonDetails(id)
    const creditsRes = await getPersonCombinedCredits(id)
    const credits = {
      ...creditsRes,
      cast: creditsRes.cast.sort((a, b) => a.popularity + b.popularity)
    }

    if (!person || !credits) return { notFound: true }
    return { props: { person, credits } }
  } catch (err) {
    console.error(err)
    return { notFound: true }
  }
}

export default PersonPage
