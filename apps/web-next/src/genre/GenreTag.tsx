import classNames from 'classnames'
import React from 'react'

const GenreTags: React.FC<{ genres: { id: number; name: string }[] }> = ({
  genres
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {genres.map(({ id, name }, index) => (
        <GenreTag key={`${index}-${id}`} name={name} />
      ))}
    </div>
  )
}

const GenreTag: React.FC<{ name: string }> = ({ name }) => {
  return (
    <span
      className={classNames([
        'font-extrabold text-sm',
        'dark:bg-white bg-black',
        'dark:text-black text-white',
        'py-1 px-3 rounded-full shadow-sm'
      ])}
    >
      {name}
    </span>
  )
}

export { GenreTags, GenreTag }
