import Head from 'next/head'
import React from 'react'

export const H1: React.FC = ({ children }) => {
  return (
    <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-none break-words">
      <Head>
        <title>{children} | Personal Film Library</title>
      </Head>
      {children}
    </h1>
  )
}

export const H2: React.FC = ({ children }) => {
  return (
    <h2 className="font-bold text-xl md:text-xl lg:text-4xl">{children}</h2>
  )
}
