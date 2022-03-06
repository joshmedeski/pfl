import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Movie } from 'tmdb-typescript-api'

import { H2 } from '@/ui'
import Credit from '@/ui/Credit'
import { Grid } from '@/ui/grid'

const MovieRecommendations: React.FC<{ id: number }> = ({ id }) => {
  const [recommendations, setRecommendations] = useState<Movie[]>([])

  const getRecommendations = async (id: number) => {
    const { data } = await axios.get<{ results: Movie[] }>(
      `/api/tmdb/movie/${id}/recommendations`
    )
    setRecommendations(data.results)
  }

  useEffect(() => {
    getRecommendations(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid>
      {recommendations.map((r) => (
        <Credit
          key={r.id}
          credit={{
            type: 'movie',
            id: r.id,
            imgSrc: r.poster_path,
            name: r.title,
            detail: ''
          }}
        />
      ))}
    </Grid>
  )
}

export default MovieRecommendations
