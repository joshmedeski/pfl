import chromium from 'chrome-aws-lambda'
import { Browser } from 'puppeteer-core'

import { determineFullUrl, sleep } from '@/utils'

const getBrowserInstance = async (): Promise<Browser> => {
  const executablePath = await chromium.executablePath

  return await chromium.puppeteer.launch({
    executablePath,
    args: chromium.args,
    ignoreHTTPSErrors: true,
    defaultViewport: { width: 1600, height: 900 },
    headless: executablePath ? chromium.headless : true
  })
}

export const takeScreenshot = async (uri: string): Promise<Buffer> => {
  const browser = await getBrowserInstance()
  const page = await browser.newPage()
  const url = determineFullUrl(uri)
  await page.goto(url)
  await page.setViewport({ width: 1600, height: 900 })
  await sleep(200)
  const screenshot = (await page.screenshot({ type: 'jpeg' })) as Buffer
  return screenshot
}
