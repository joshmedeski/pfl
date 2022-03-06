import classNames from 'classnames'
import { Link } from 'remix'

export type CardProps = {
  title: string
  meta?: string
  to?: string
  img?: {
    src: string | undefined
    size: string
  }
  textCenter?: boolean
  forcedWidth?: string
}

const Card: React.FC<CardProps> = ({ img, title, meta, to, forcedWidth }) => {
  return (
    <Link
      to={to || '/'}
      className={classNames([
        { [String(forcedWidth)]: !!forcedWidth },
        'snap-start shrink-0',
        'bg-white dark:bg-black',
        'shadow-lg shadow-gray-300/20 hover:shadow-gray-300/40',
        'dark:shadow-gray-700/20 dark:hover:shadow-gray-700/40',
        'transition',
        'border border-1 border-gray-200',
        'dark:border-gray-700',
        { 'rounded-b-xl': !!img },
        { 'rounded-xl': !img },
        { 'row-span-4 col-span-1': !!img },
        { 'row-span-1 col-span-1': !img }
      ])}
    >
      {!!img && (
        <div className={classNames(['border-b border-gray-700'])}>
          <img
            src={`https://image.tmdb.org/t/p/w154/` + img.src}
            className={classNames(['w-full h-auto', 'border border-gray-700'])}
            alt={title}
          />
        </div>
      )}

      <div
        className={classNames([
          'p-2',
          { 'grid place-content-center h-full text-center': !img }
        ])}
      >
        <p
          className={classNames([
            'font-bold overflow-hidden mb-2',
            'whitespace-nowrap text-ellipsis',
            'leading-none'
          ])}
        >
          {title}
        </p>

        {!!meta && (
          <p className="text-gray-400 dark:text-gray-600 leading-none">
            {meta}
          </p>
        )}
      </div>
    </Link>
  )
}

export default Card
