import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: import.meta.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: import.meta.env.AWS_SECRET_ACCESS_KEY,
  region: import.meta.env.AWS_REGION
});

export async function checkImageExists(key: string): Promise<boolean> {
  try {
    console.log('Checking if image exists:', key);
    await s3.headObject({
      Bucket: import.meta.env.S3_BUCKET_NAME,
      Key: key
    }).promise();
    console.log('Image exists:', key);
    return true;
  } catch (error) {
    if ((error as AWS.AWSError).code === 'NotFound') {
      console.log('Image does not exist:', key);
      return false;
    }
    console.error('Error checking image existence:', error);
    throw error;
  }
}

export async function getImageUrl(key: string): Promise<string> {
  console.log('Getting signed URL for:', key);
  return s3.getSignedUrl('getObject', {
    Bucket: import.meta.env.S3_BUCKET_NAME,
    Key: key,
    Expires: 604800 // 1 week
  });
}

export async function saveToStorage(imageUrl: string, hintId: string): Promise<{ url: string; key: string }> {
  const filename = `hints/${hintId}.png`;
  console.log('Saving image for hint:', hintId);

  // Check if image already exists
  const exists = await checkImageExists(filename);
  if (exists) {
    console.log('Image already exists, returning signed URL');
    const signedUrl = await getImageUrl(filename);
    return {
      url: signedUrl,
      key: filename
    };
  }

  console.log('Generating new image for:', hintId);
  
  try {
    // Download the image
    console.log('Downloading image from:', imageUrl);
    const response = await fetch(imageUrl);
    const buffer = Buffer.from(await response.arrayBuffer());
    
    // Upload to S3
    console.log('Uploading to S3:', filename);
    await s3.upload({
      Bucket: import.meta.env.S3_BUCKET_NAME,
      Key: filename,
      Body: buffer,
      ContentType: 'image/png'
    }).promise();

    // Generate a pre-signed URL
    const signedUrl = await getImageUrl(filename);
    console.log('Generated signed URL:', signedUrl);

    return {
      url: signedUrl,
      key: filename
    };
  } catch (error) {
    console.error('Error saving image:', error);
    throw error;
  }
} 