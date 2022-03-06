import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Person as TmdbPerson } from 'tmdb-typescript-api'

import { getPopularPeople } from '@/movie/popular-people'
import { Person } from '@/people/Person'
import { H1 } from '@/ui'
import { Grid } from '@/ui/grid'

type ServerSideProps = {
  people: TmdbPerson[]
}

const PeoplePage: NextPage<ServerSideProps> = ({ people }) => {
  return (
    <div className="p-4">
      <Head>
        <title>People | Personal Film Library</title>
        <meta name="description" content="Your place for movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mb-2">
        <H1>Popular People</H1>
      </div>

      <Grid>
        {people.map((person, index) => (
          <Person
            key={person.id + index}
            id={person.id}
            src={person.profile_path}
            name={person.name}
            detail={''}
          />
        ))}
      </Grid>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<
  ServerSideProps
> = async () => {
  const people = await getPopularPeople()
  return { props: { people } }
}

export default PeoplePage
