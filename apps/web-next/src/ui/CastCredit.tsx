import React from 'react'

import {
  TmdbPersonCastCredit,
  isPersonMovieCastCredit,
  isPersonTvCastCredit
} from '@/people'

import Credit from './Credit'

const CastCredit: React.FC<{
  credit: TmdbPersonCastCredit
}> = ({ credit }) => {
  if (isPersonMovieCastCredit(credit)) {
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
          detail: credit.character
        }}
      />
    )
  }

  if (isPersonTvCastCredit(credit)) {
    return (
      <Credit
        credit={{
          type: 'tv',
          id: credit.id,
          imgSrc: credit.poster_path,
          name: credit.name,
          detail: credit.character
        }}
      />
    )
  }

  return <React.Fragment />
}

export default CastCredit
