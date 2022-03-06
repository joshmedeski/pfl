import { determineFullUrl } from '.'

describe('determineFullUrl', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules() // Most important - it clears the cache
    process.env = { ...OLD_ENV } // Make a copy
  })

  afterAll(() => {
    process.env = OLD_ENV // Restore old environment
  })

  test('test', () => {
    expect(true).toBe(false)
  })

  test('localhost', () => {
    process.env.NEXT_PUBLIC_VERCEL_URL = 'localhost:3000'

    expect(determineFullUrl('/social/movies/123')).toBe(
      'http://localhost:3000/social/movies/123'
    )
  })

  test('vercel url', () => {
    process.env.NEXT_PUBLIC_VERCEL_URL = 'personalfilmlibrary.com'

    expect(determineFullUrl('/social/movies/123')).toBe(
      'https://personalfilmlibray.com/social/movies/123'
    )
  })
})
