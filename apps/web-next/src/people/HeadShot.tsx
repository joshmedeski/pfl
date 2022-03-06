import React from 'react'

import TmdbImage from '@/tmdb/TmdbImg'
import { PersonIcon } from '@/ui/Icon'

const HeadShot: React.FC<{ src: string }> = ({ src }) => {
  return (
    <section className="relative h-auto">
      <TmdbImage src={src} />
      <div className="absolute bottom-3 left-2">
        <div className="flex gap-1">
          <PersonIcon />
        </div>
      </div>
    </section>
  )
}

export default HeadShot
