import type { NextPage } from 'next'
import React from 'react'

import { useSearch } from '@/search/SearchContext'
import SearchForm from '@/search/SearchForm'
import SearchResult from '@/search/SearchResult'

const SearchPage: NextPage = () => {
  const { results } = useSearch()

  return (
    <>
      <div className="max-w-screen-sm w-full mx-auto lg:mt-20">
        <SearchForm />
      </div>

      {!!results?.results.length && (
        <div className="my-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 place-items-start gap-4">
          {results.results.length &&
            results.results.map((result) => (
              <SearchResult result={result} key={result.id} />
            ))}
        </div>
      )}
    </>
  )
}

export default SearchPage
