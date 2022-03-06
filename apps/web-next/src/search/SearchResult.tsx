import {
  isMovieSearchResult,
  isPersonSearchResult,
  isTvShowSearchResult
} from 'pages/api/search/multi'
import React from 'react'
import { Movie, Person, TvShow } from 'tmdb-typescript-api'

import Credit from '@/ui/Credit'

const SearchResult: React.FC<{ result: TvShow | Person | Movie }> = ({
  result
}) => {
  if (isMovieSearchResult(result)) {
    return (
      <Credit
        credit={{
          type: 'movie',
          id: result.id,
          imgSrc: result.poster_path,
          name: result.title,
          detail: ''
        }}
      />
    )
  }

  if (isTvShowSearchResult(result)) {
    return (
      <Credit
        credit={{
          type: 'tv',
          id: result.id,
          imgSrc: result.poster_path,
          name: result.name,
          detail: ''
        }}
      />
    )
  }

  if (isPersonSearchResult(result)) {
    return (
      <Credit
        credit={{
          type: 'person',
          id: result.id,
          imgSrc: result.profile_path,
          name: result.name,
          detail: ''
        }}
      />
    )
  }

  return <React.Fragment />
}

export default SearchResult
