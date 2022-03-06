import axios from 'axios'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const ApprovedPage: NextPage = () => {
  const router = useRouter()

  const getSessionId = async (request_token: string): Promise<boolean> => {
    const { data } = await axios.post<{ approved: boolean }>('/api/login', {
      request_token
    })
    return data.approved
  }

  useEffect(() => {
    if (!router) return
    const request_token = router.query['request_token'] as string
    if (request_token) getSessionId(request_token)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  return (
    <div className="min-w-full flex items-center">
      <h1>Approved</h1>
    </div>
  )
}

export default ApprovedPage
