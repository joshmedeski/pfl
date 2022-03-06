import { LoadOptions, load, trackPageview } from 'fathom-client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

/**
 * React hook for Fathom Analytics router event tracking
 * cspell:disable:Pageview
 */
const useFathomAnalytics = () => {
  const { events } = useRouter()
  const nodeEnv = process.env.NODE_ENV
  const eventType = 'routeChangeComplete'
  const siteId = process.env.NEXT_PUBLIC_FATHOM_SITE_ID
  const excludedDomains = process.env.NEXT_PUBLIC_FATHOM_EXCLUDED_DOMAINS
  const includedDomains = process.env.NEXT_PUBLIC_FATHOM_INCLUDED_DOMAINS

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return
    let loadOptions: LoadOptions = {
      includedDomains: [],
      excludedDomains: []
    }

    // cspell:disable-next for Site ID
    load('KROSXINJ', loadOptions)

    events.on(eventType, trackPageview)

    return () => events.off(eventType, trackPageview)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {}
}

export default useFathomAnalytics
