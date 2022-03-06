import React, { useEffect, useState } from 'react'

import {
  JobsConfiguration,
  jobsByDepartment
} from 'tmdb/dist/configuration/jobs'
import { CrewMember } from 'tmdb/dist/movie/{movie_id}/credits'

import Grid from './Grid'

const Department: React.FC<{ department: string; crew: CrewMember[] }> = ({
  department,
  crew
}) => {
  return (
    <Grid
      title={department}
      items={crew.map((crewMember) => {
        const img = crewMember.profile_path
          ? {
              src: crewMember.profile_path,
              size: 'w300'
            }
          : undefined

        return {
          img,
          src: crewMember.profile_path,
          title: crewMember.name,
          meta: crewMember.job,
          to: `/people/${crewMember.id}`
        }
      })}
    />
  )
}

const Crew: React.FC<{ crew: CrewMember[] }> = ({ crew }) => {
  return (
    <>
      {jobsByDepartment.map(({ department, jobs }) => {
        const crewMembers = crew.filter((crewMember) =>
          jobs.includes(crewMember.job)
        )

        if (!crewMembers.length) return <React.Fragment />
        return <Department department={department} crew={crewMembers} />
      })}
    </>
  )
}

export default Crew
