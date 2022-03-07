import {
  DataFunctionArgs as LoaderArgs,
  ActionFunction,
  redirect
} from '@remix-run/server-runtime'
import { useSubmit, Form, Link } from 'remix'
import classNames from 'classnames'
import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import {
  ChevronRightIcon,
  LibraryIcon,
  SearchIcon
} from '@heroicons/react/outline'
import { useDebouncedCallback } from 'use-debounce'

import { useInferredRouteData } from '~/remix-extended'
import { Db } from '~/utils/db'
import { PosterImg } from '~/ui/Img'
import { MovieSearchResult } from 'tmdb/dist/search'

function isMovieSearchResult(result: any): result is MovieSearchResult {
  return !!result?.title
}

export const loader = async ({ request }: LoaderArgs) => {
  let query = new URL(request.url).searchParams.get('query')
  if (!query) return { results: [], query: '' }
  const db = new Db()
  const { results } = await db.search.searchMovies(query)
  return { results, query }
}

export const action: ActionFunction = async ({ request }) => {
  console.log('action')
  const formData = await request.formData()
  console.log('formData: ', formData)
  const query = formData.get('query') as string
  return redirect(`?query=${query}`)
}

export default function MoviePage() {
  const submit = useSubmit()
  const { results, query } = useInferredRouteData<typeof loader>()
  const [selectedResult, setSelectedResult] = useState<
    MovieSearchResult | undefined
  >(results[0] ?? undefined)

  const debouncedSearch = useDebouncedCallback((target) => {
    submit(target)
  }, 500)

  return (
    <div className="p-4 max-w-screen-md mx-auto mt-20">
      <Combobox
        as="div"
        className={classNames([
          'transform',
          'divide-y divide-gray-100',
          'overflow-hidden rounded-xl shadow-2xl',
          'bg-white dark:bg-black',
          'ring-1 ring-black ring-opacity-5 transition-all'
        ])}
        value={selectedResult}
        onChange={(selectedResult) => {
          if (isMovieSearchResult(selectedResult)) {
            window.location.href = `/movies/${selectedResult.id}`
          }
        }}
      >
        {({ activeOption }) => (
          <>
            <div className="relative">
              <SearchIcon
                className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
              />
              <Form
                method="get"
                onChange={(event) => debouncedSearch(event.currentTarget)}
              >
                <Combobox.Input
                  autoFocus
                  type="text"
                  name="query"
                  onChange={() => {}}
                  placeholder="Search..."
                  defaultValue={query}
                  className={classNames([
                    'h-12 w-full border-0 bg-transparent pl-11 pr-4',
                    'text-gray-800 dark:text-gray-200',
                    'placeholder-gray-400 dark:text-gray-600',
                    'focus:ring-0 sm:text-em',
                    'focus:ring-primary-500'
                  ])}
                />
              </Form>
            </div>

            {!!results.length && (
              <Combobox.Options
                as="div"
                static
                hold
                className="flex divide-x divide-gray-100 dark:divide-gray-900"
              >
                <div
                  className={classNames(
                    'min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4'
                  )}
                >
                  <div className="-mx-2 text-sm text-gray-700 dark:text-gray-300">
                    {results.map((result) => (
                      <Combobox.Option
                        as="div"
                        key={result.id}
                        value={result}
                        className={({ active }) =>
                          classNames(
                            'flex cursor-default select-none items-center rounded-md p-2',
                            active && 'bg-primary-100 dark:bg-primary-900',
                            active && 'text-primary-900 dark:text-primary-100'
                          )
                        }
                      >
                        {({ active }) => (
                          <>
                            <div className="w-8 flex-none rounded-full">
                              <PosterImg
                                src={result.poster_path}
                                alt={result.title}
                                size="w92"
                              />
                            </div>

                            <div className="ml-3 flex-auto truncate">
                              <span className="text-xl">{result.title}</span>

                              <div className="text-gray-500">
                                {!!result.release_date ? (
                                  <>
                                    {new Date(
                                      result.release_date
                                    ).getFullYear()}
                                  </>
                                ) : (
                                  <>TBD</>
                                )}
                              </div>
                            </div>

                            {active && (
                              <ChevronRightIcon
                                className="ml-3 h-5 w-5 flex-none text-primary-900 dark:text-primary-100"
                                aria-hidden="true"
                              />
                            )}
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  </div>
                </div>

                {isMovieSearchResult(activeOption) && (
                  <div className="w-1/2 flex-none flex-col divide-y divide-gray-100 overflow-y-auto sm:flex">
                    <div className="flex-none p-6 text-center">
                      <div className="flex justify-center">
                        <PosterImg
                          src={activeOption.poster_path}
                          alt={activeOption.title}
                          size="w342"
                        />
                      </div>

                      <h2 className="mt-3 font-semibold text-gray-900 dark:text-gray-100">
                        {activeOption.title}
                      </h2>

                      <p className="text-sm leading-6 text-gray-500">
                        {new Date(activeOption.release_date).getFullYear()}
                      </p>
                    </div>
                  </div>
                )}
              </Combobox.Options>
            )}

            {!results.length && (
              <div className="py-14 px-6 text-center text-sm sm:px-14">
                <LibraryIcon
                  className="mx-auto h-20 w-20 text-gray-600 dark:text-gray-400"
                  aria-hidden="true"
                />
                <p className="mt-4 text-2xl font-semibold text-gray-700 dark:text-gray-300">
                  {!query
                    ? 'Search Personal Film Library'
                    : `No results found for "${query}"`}
                </p>
                <p className="mt-2 text-gray-500">
                  {!query
                    ? 'Enter your search term to search.'
                    : `We couldn’t find anything with that term. Please try again.`}
                </p>
              </div>
            )}
          </>
        )}
      </Combobox>
    </div>
  )
}
