export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const determineFullUrl = (uri: string): string => {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  const protocol = baseUrl.startsWith('localhost') ? `http://` : `https://`
  return protocol + baseUrl + uri
}
