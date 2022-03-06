import Link from 'next/link'
import React from 'react'

import HeadShot from './HeadShot'

export const Person: React.FC<{
  id: number
  src: string
  name: any
  detail: string
}> = ({ id, src, name, detail }) => {
  return (
    <Link href={`/people/${id}`} passHref>
      <a>
        <HeadShot src={src} />

        <div className="p-2">
          <h3 className="font-semibold text-xl leading-none mb-2">{name}</h3>
          <p className="font-lg text-neutral-500 leading-none">{detail}</p>
        </div>
      </a>
    </Link>
  )
}

const CastMember: React.FC<{
  member: {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
    cast_id: number
    character: string
    credit_id: string
    order: number
  }
}> = ({ member }) => {
  return (
    <Person
      id={member.id}
      src={member.profile_path}
      name={member.name}
      detail={member.character}
    />
  )
}

const CrewMember: React.FC<{
  member: {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
    credit_id: string
    department: string
    job: string
  }
}> = ({ member }) => {
  return (
    <Person
      id={member.id}
      src={member.profile_path}
      name={member.name}
      detail={member.job}
    />
  )
}

export { CastMember, CrewMember }
