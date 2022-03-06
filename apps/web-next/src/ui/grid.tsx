import classNames from 'classnames'

export const Grid: React.FC = ({ children }) => {
  return (
    <section
      className={classNames([
        'grid place-items-start gap-4',
        'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
      ])}
    >
      {children}
    </section>
  )
}

export const GridFullRow: React.FC = ({ children }) => {
  return (
    <section className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5">
      {children}
    </section>
  )
}
