import {
  differenceInYears,
  format,
  formatDistanceToNow,
  minutesToHours
} from 'date-fns'
import React from 'react'

import {
  MovieReleaseDateType,
  TmdbMovieReleaseDate
} from '@/tmdb/movie/release_dates'

export const Details: React.FC = ({ children }) => {
  return <div className="space-y-4">{children}</div>
}

export const Detail: React.FC<{ meta?: string }> = ({ children, meta }) => {
  return (
    <div>
      <p className="font-semibold text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400">
        {children}
      </p>
      {!!meta && (
        <p className="emphasis lg:text-xl text-neutral-400 dark:text-neutral-500">
          {meta}
        </p>
      )}
    </div>
  )
}

export const ReleaseDateDetail: React.FC<{
  releaseDate: TmdbMovieReleaseDate
}> = ({ releaseDate }) => {
  const releaseType = (type: MovieReleaseDateType): string => {
    switch (type) {
      case MovieReleaseDateType.Premiere:
        return 'Premeire'
      case MovieReleaseDateType.TheatricalLimited:
        return 'Limited theatrical release'
      case MovieReleaseDateType.Theatrical:
        return 'Theatrical release'
      case MovieReleaseDateType.Digital:
        return 'Digital release'
      case MovieReleaseDateType.Physical:
        return 'Physical release'
      case MovieReleaseDateType.TV:
        return 'TV release'
      default:
        return ''
    }
  }

  return (
    <div>
      <p className="font-semibold text-lg lg:text-xl text-neutral-600 dark:text-neutral-400">
        {releaseType(releaseDate.type)}
      </p>
      <p className="font-semibold text-xl lg:text-2xl leading-none">
        {format(new Date(releaseDate.release_date), 'EEE, LLL do, yyyy')}
      </p>
      <p className="emphasis lg:text-xl text-neutral-400 dark:text-neutral-500">
        {formatDistanceToNow(new Date(releaseDate.release_date), {
          addSuffix: true
        })}
      </p>
    </div>
  )
}

export const RuntimeDetail: React.FC<{ runtime: number }> = ({ runtime }) => {
  const formatMovieRunTime = (runtime: number): string => {
    const hours = minutesToHours(runtime)
    const remainingMinutes = runtime - hours * 60
    return `${hours} hrs ${remainingMinutes} mins`
  }

  return (
    <p className="text-2xl lg:text-3xl leading-none">
      {formatMovieRunTime(runtime)}
    </p>
  )
}

export const BirthdayDetail: React.FC<{
  birthday: string | Date
  deathday: string | Date | undefined
}> = ({ birthday, deathday }) => {
  const sign = (date: string | Date) => {
    const days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22]
    const signDate = new Date(date)
    let month = signDate.getMonth()
    let day = signDate.getDate()

    const signs = [
      'Aquarius',
      'Pisces',
      'Aries',
      'Taurus',
      'Gemini',
      'Cancer',
      'Leo',
      'Virgo',
      'Libra',
      'Scorpio',
      'Sagittarius',
      'Capricorn'
    ]

    if (month == 0 && day <= 20) {
      month = 11
    } else if (day < days[month]) {
      month--
    }

    return signs[month]
  }
  return (
    <Detail
      meta={`${differenceInYears(
        deathday ? new Date(deathday) : new Date(),
        new Date(birthday)
      )} years old (${sign(birthday)})`}
    >
      Born {format(new Date(birthday), 'EEE, LLL do, yyyy')}
      {deathday && (
        <>{` - Died ${format(new Date(deathday), 'EEE, LLL do, yyyy')}`}</>
      )}
    </Detail>
  )
}

export const GenderDetail: React.FC<{ gender: number }> = ({ gender }) => {
  const genderName = (gender: number): string => {
    switch (gender) {
      case 1:
        return 'Female'
      case 2:
        return 'Male'
      default:
        return 'Not specified'
    }
  }

  const pronouns = (gender: number): string => {
    switch (gender) {
      case 1:
        return 'she/her'
      case 2:
        return 'he/him'
      default:
        return 'Not specified'
    }
  }

  return <Detail meta={pronouns(gender)}>{genderName(gender)}</Detail>
}
