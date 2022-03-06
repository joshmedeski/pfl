import Nprogress from 'nprogress'
import { useEffect, useState } from 'react'

const useLoading = () => {
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    loading ? Nprogress.start() : Nprogress.done()
  }, [loading])

  return [loading, setLoading] as const
}

export default useLoading
