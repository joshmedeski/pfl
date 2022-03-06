import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client
} from '@aws-sdk/client-s3'

const Bucket = 'mymovies-app'

class AwsS3Client extends S3Client {
  constructor() {
    super({
      region: 'us-east-2',
      credentials: {
        accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY
      }
    })
  }
}

export const getImage = async (path: string): Promise<any | undefined> => {
  try {
    const client = new AwsS3Client()
    const Key = path
    const command = new GetObjectCommand({ Bucket, Key })
    const response = await client.send(command)
    return response?.Body
  } catch (error: any) {
    if (error?.$metadata?.httpStatusCode === 404) return undefined
    console.error('getImage caught error: ', error)
    throw `Failed to get image from S3 Bucket: ${path}`
  }
}

export const uploadImage = async (
  path: string,
  buffer: Buffer
): Promise<void> => {
  try {
    const client = new AwsS3Client()
    const Key = path
    const Body = buffer
    const command = new PutObjectCommand({ Bucket, Key, Body })
    await client.send(command)
  } catch (error: unknown) {
    console.error('uploadImage caught error', error)
    throw `Failed to upload image to S3 bucket: ${path}`
  }
}
