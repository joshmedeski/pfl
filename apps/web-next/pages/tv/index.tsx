import type { GetServerSideProps, NextPage } from 'next'
import React from 'react'

import { H1 } from '@/ui'

type ServerSideProps = {
  movies: unknown
}

export const getServerSideProps: GetServerSideProps<
  ServerSideProps
> = async () => {
  return { props: { movies: [] } }
}

const TvHomePage: NextPage<ServerSideProps> = ({ movies }) => {
  return <H1>TV</H1>
}

export default TvHomePage
