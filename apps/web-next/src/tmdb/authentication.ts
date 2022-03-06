import { tmdb } from '.'

const createGuestSession = async () => {
  const { data } = await tmdb.get<{
    success: boolean
    guest_session_id: string
    expires_at: string
  }>('/authentication/guest_session/new')
  return data
}

const createRequestToken = async () => {
  const { data } = await tmdb.get<{
    success: boolean
    expires_at: string
    request_token: string
  }>('/authentication/token/new')
  return data
}

const getForwardReqUrl = (request_token: string) => {
  return (
    'https://www.themoviedb.org/authenticate/' +
    request_token +
    '?redirect_to=' +
    process.env.NEXT_PUBLIC_VERCEL_URL +
    '/approved'
  )
}

export const getAuthRedirect = async () => {
  const { request_token } = await createRequestToken()
  return getForwardReqUrl(request_token)
}

const getSessionId = async (request_token: string) => {
  const { data } = await tmdb.post<{ success: boolean; session_id: string }>(
    '/authentication/session/new',
    { request_token }
  )
  return data
}
