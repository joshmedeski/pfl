import { SearchIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'

import { useSearch } from './SearchContext'

const SearchForm: React.FC<{}> = () => {
  const { search, query: queryParam } = useSearch()
  const ref = React.useRef<HTMLInputElement>(null)

  const formik = useFormik<{ query: string }>({
    onSubmit: ({ query }) => search(query),
    initialValues: { query: queryParam }
  })

  useEffect(() => {
    if (ref.current) ref.current.focus()
  }, [])

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        formik.handleSubmit(e)
      }}
    >
      <label htmlFor="search-input" className="sr-only">
        Search
      </label>

      <div className="mt-1 flex rounded-md shadow-sm relative w-full">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon
              className="h-5 w-5 text-neutral-400"
              aria-hidden="true"
            />
          </div>

          <input
            type="text"
            name="query"
            id="search-input"
            className={classNames([
              'focus:ring-primary-600 dark:focus:ring-primary-400 focus:border-primary-500',
              'block w-full rounded-md pl-10 sm:text-sm',
              'border-neutral-300',
              'dark:border-neutral-800 dark:bg-black'
            ])}
            placeholder="Enter Search"
            ref={ref}
            onChange={formik.handleChange}
            value={formik.values.query}
          />
        </div>
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd
            className={classNames([
              'inline-flex items-center',
              'border border-neutral-200 dark:border-neutral-800',
              'rounded px-2 text-sm font-sans font-medium',
              'text-neutral-400 dark:text-white',
              'bg-neutral-200 dark:bg-neutral-900'
            ])}
          >
            /
          </kbd>
        </div>
      </div>
    </form>
  )
}

export default SearchForm
