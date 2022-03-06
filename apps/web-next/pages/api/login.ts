import { NextApiRequest, NextApiResponse } from 'next'

import { tmdb } from '@/tmdb'
import { withSessionRoute } from '@/utils/withSession'

export default withSessionRoute(async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const request_token = req.query['request_token']
  const { data } = await tmdb.post<{
    session_id: string
    success: boolean
  }>('/authentication/session/new', {
    request_token
  })

  req.session.id = { session_id: data.session_id }
  await req.session.save()
  res.send({ approved: true })
})
