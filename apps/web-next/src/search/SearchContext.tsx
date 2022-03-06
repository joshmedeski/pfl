import axios from 'axios'
import { useRouter } from 'next/router'
import { MultiSearchResults } from 'pages/api/search/multi'
import React, { useContext, useEffect, useState } from 'react'

import { tmdb } from '@/tmdb'
import useLoading from '@/ui/useLoading'
import useKeyPress from '@/utils/useKeyPress'

type Context = {
  query: string
  setResults: (response: MultiSearchResults) => void
  search: (query: string) => void
  results: MultiSearchResults | undefined
}

const SearchContext = React.createContext<Context>({
  query: '',
  setResults: (_: MultiSearchResults) =>
    console.warn('Search provider missing'),
  search: (_: string) => console.warn('Search provider missing'),
  results: undefined
})

const useSearch = () => useContext(SearchContext)

const SearchProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useLoading()
  const [results, setResults] = useState<MultiSearchResults | undefined>()
  const forwardSlashPress: boolean = useKeyPress('/')
  const [query, setQuery] = useState<string>('')
  const router = useRouter()

  const getResults = async (query: string) => {
    setLoading(true)

    try {
      const { data } = await tmdb.get<MultiSearchResults>('/search/multi', {
        params: { query }
      })

      setResults(data)
    } catch (error: unknown) {
      if (process.env.NODE_ENV !== 'production') console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const search = async (query: string) => {
    if (query) router.replace(`/search?query=${query}`)
    router.replace(`/search`)
  }

  useEffect(() => {
    const { query: queryParam } = router.query
    if (queryParam) setQuery(queryParam as string)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  useEffect(() => {
    if (forwardSlashPress) search(query)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forwardSlashPress])

  useEffect(() => {
    if (query) getResults(query)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return (
    <SearchContext.Provider value={{ results, setResults, search, query }}>
      {children}
    </SearchContext.Provider>
  )
}

export { SearchContext, SearchProvider, useSearch }
