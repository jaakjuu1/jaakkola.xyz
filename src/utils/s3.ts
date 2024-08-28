import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: import.meta.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: import.meta.env.AWS_SECRET_ACCESS_KEY,
  region: import.meta.env.AWS_REGION,
});

export function getSignedUrl(key: string) {
  const params = {
    Bucket: import.meta.env.S3_BUCKET_NAME,
    Key: key,
    Expires: 24 * 60 * 60, // 24 hours
  };

  return s3.getSignedUrl('getObject', params);
}