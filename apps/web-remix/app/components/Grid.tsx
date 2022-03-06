import classNames from 'classnames'
import React from 'react'

import Card, { CardProps } from './Card'

type GridProps = {
  title?: string
  items: CardProps[]
}

export const Row: React.FC<GridProps> = ({ items, title }) => {
  return (
    <div className="mb-4">
      {!!title && <h2 className="font-bold text-3xl mb-2">{title}</h2>}

      <div
        className={classNames([
          'relative w-full flex gap-2 snap-x snap-mandatory overflow-x-auto pb-4',
          'place-content-stretch',
          'place-items-stretch'
        ])}
      >
        {items.map((item) => (
          <Card {...item} forcedWidth="w-[200px]" />
        ))}
      </div>
    </div>
  )
}

const Grid: React.FC<GridProps> = ({ title, items }) => {
  // TODO merge similar items (ex: movie crew)
  const itemsWithSrc = items.filter((item) => !!item?.img)
  const itemsWithoutSrc = items.filter((item) => !item?.img)

  return (
    <div className="mb-4">
      {!!title && <h2 className="font-bold text-3xl mb-2">{title}</h2>}

      <div
        className={classNames([
          'grid gap-2',
          'grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7'
        ])}
      >
        {itemsWithSrc.map((item) => (
          <Card {...item} />
        ))}
        {itemsWithoutSrc.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </div>
  )
}

export default Grid
