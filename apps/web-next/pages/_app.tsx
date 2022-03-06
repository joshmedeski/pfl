import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

import { NextPageWithLayout } from '@/layout'
import AppLayout from '@/layout/AppLayout'
import { SearchProvider } from '@/search/SearchContext'
import useFathomAnalytics from '@/utils/useFathomAnalytics'
import useNProgress from '@/utils/useNProgress'

import '../styles/globals.css'
import '../styles/nprogress.css'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout<any>
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  useNProgress()
  useFathomAnalytics()

  const getLayout =
    Component.getLayout ?? ((page) => <AppLayout>{page}</AppLayout>)

  return (
    <ThemeProvider attribute="class">
      <SearchProvider>
        <Head>
          <title>Personal Film Library</title>
          <meta name="description" content="Your place for movies" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {getLayout(<Component {...pageProps} />)}
      </SearchProvider>
    </ThemeProvider>
  )
}

export default App
