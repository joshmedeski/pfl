declare namespace NodeJS {
  interface ProcessEnv {
    AWS_S3_ACCESS_KEY_ID: string
    AWS_S3_SECRET_ACCESS_KEY: string
    NEXT_PUBLIC_VERCEL_URL: string
    SESSION_PASSWORD: string
    TMDB_API: string
    TMDB_REDIRECT_URL: string
  }
}

declare module 'http' {
  interface IncomingMessage {
    session: {
      id: string
    } & IronSession
  }
}
