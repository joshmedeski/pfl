import type { NextApiRequest, NextApiResponse } from 'next'

import { takeScreenshot } from '@/utils/chromium'
import { getImage, uploadImage } from '@/utils/file-storage'

/**
 * Social movie image
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string | Buffer | { error: string }>
) {
  try {
    const id = req?.query?.id
    const rebuild = req?.query?.rebuild
    res.setHeader('Content-Type', 'image/jpg')
    const path = `social/movies/${id}.jpg`
    const image = await getImage(path)

    if (image && !rebuild) {
      return res.status(200).send(image)
    } else {
      const screenshot = await takeScreenshot(`/movies/${id}/social`)
      await uploadImage(path, screenshot)
      return res.status(200).send(screenshot)
    }
  } catch (error: unknown) {
    console.log('error: ', error)
    return res.status(500).json({ error: 'Failed to get social movie image' })
  }
}
