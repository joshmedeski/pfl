import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { useEffect } from 'react'

const useNProgress = () => {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start())
    router.events.on('routeChangeComplete', () => NProgress.done())
    router.events.on('routeChangeError', () => NProgress.done())

    return () => {
      router.events.off('routeChangeStart', () => NProgress.done())
      router.events.off('routeChangeComplete', () => NProgress.done())
      router.events.off('routeChangeError', () => NProgress.done())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {}
}

export default useNProgress
