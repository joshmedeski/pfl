import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import { Movie } from '@/movie'
import { MovieNowPlaying, getMoviesNowPlaying } from '@/movie/now-playing'
import { H2 } from '@/ui'
import { Grid } from '@/ui/grid'

type ServerSideProps = {
  now_playing: MovieNowPlaying[]
}

const HomePage: NextPage<ServerSideProps> = ({ now_playing }) => {
  return (
    <div className="p-4">
      <Head>
        <title>Personal Film Library</title>
        <meta name="description" content="Your place for movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mb-2">
        <H2>Now Playing</H2>
      </div>

      <Grid>
        {now_playing.map((credit, index) => (
          <Movie
            key={credit.id + index}
            movie={{
              id: credit.id,
              src: credit.poster_path || '',
              name: credit.title
            }}
          />
        ))}
      </Grid>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<
  ServerSideProps
> = async () => {
  try {
    const now_playing = await getMoviesNowPlaying()
    return { props: { now_playing } }
  } catch (err) {
    console.error(err)
    return { notFound: true }
  }
}

export default HomePage
