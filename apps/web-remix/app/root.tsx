import classNames from 'classnames'
import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch
} from 'remix'
import type { MetaFunction } from 'remix'

import tailwindCss from '~/tailwind.css'

import RootHeader from './components/RootHeader'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: tailwindCss }]
}

export const meta: MetaFunction = () => {
  return { title: 'Personal Film Library' }
}

const RootLayout: React.FC = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body
        className={classNames([
          'bg-white-100 text-black',
          'dark:bg-gray-900 dark:text-white'
        ])}
      >
        <RootHeader />

        <div className="pt-[53px]">
          {children}
          <Outlet />
        </div>

        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

export default function App() {
  return <RootLayout />
}

export function CatchBoundary() {
  const caught = useCatch()

  return (
    <RootLayout>
      <h1>
        {caught.status} {caught.statusText}
      </h1>
    </RootLayout>
  )
}
