import React from 'react'

import {
  TmdbPersonCastCredit,
  TmdbPersonCrewCredit,
  isPersonMovieCastCredit,
  isPersonMovieCrewCredit,
  isPersonTvCastCredit,
  isPersonTvCrewCredit
} from '@/people'

import Credit from './Credit'

const CastCredit: React.FC<{
  credit: TmdbPersonCrewCredit
}> = ({ credit }) => {
  if (isPersonMovieCrewCredit(credit)) {
    let name = credit.title

    if (credit.release_date) {
      name += ` (${new Date(credit.release_date).getUTCFullYear()})`
    }

    return (
      <Credit
        credit={{
          type: 'movie',
          id: credit.id,
          imgSrc: credit.poster_path,
          name,
          detail: credit.job
        }}
      />
    )
  }

  if (isPersonTvCrewCredit(credit)) {
    return (
      <Credit
        credit={{
          type: 'tv',
          id: credit.id,
          imgSrc: credit.poster_path,
          name: credit.name,
          detail: credit.job
        }}
      />
    )
  }

  return <React.Fragment />
}

export default CastCredit
