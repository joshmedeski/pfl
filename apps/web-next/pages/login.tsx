import type { GetServerSideProps, NextPage } from 'next'

import { getAuthRedirect } from '@/tmdb/authentication'

const LoginPage: NextPage = () => {
  return <h1>Logging in...</h1>
}

export const getServerSideProps: GetServerSideProps = async () => {
  const destination = await getAuthRedirect()
  return { redirect: { destination, permanent: false } }
}

export default LoginPage
