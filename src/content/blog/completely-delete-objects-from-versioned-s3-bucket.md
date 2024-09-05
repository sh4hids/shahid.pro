---
title: 'Completely Delete Objects From Versioned S3 Bucket'
slug: '2024/01/07/completely-delete-objects-from-versioned-s3-bucket'
isPublished: true
tags:
    - 'aws'
    - 'aws s3'
publishedAt: '2024-01-07T03:45:29.958Z'
metaInfo:
    description: 'Guide to completely deleting objects from versioned S3 bucket'
---

Recently, I was working on a feature where we needed to delete some files from S3. I followed some instructions from AWS SDK documentation and completed the feature. While testing the feature, I got a successful response. But when I checked the S3 bucket, deleted file was still there.

So I did a little digging and found that our S3 bucket was a [versioning-enabled](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html) bucket. In this type of S3 bucket [object does not get deleted on a simple delete request](https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeletingObjectVersions.html#delete-request-use-cases). S3 adds a `Delete` marker in the bucket, and that marker becomes the current version of the object with a new ID. When someone tries to get the object, it will return 404, but it is still there.

To delete a version-enabled file, first of all we have to fetch all the versions . Then we need to delete each version of the file by providing the version ID with the file key in the delete request. To complete the process, finally we have to delete the file with no version id.

Let's check how we can do this using AWS TypeScript SDK.

## AWS SDK v2

```ts
import aws from 'aws-sdk';
const s3 = new aws.S3();

export const deleteObject = async (bucket: string, fileKey: string) => {
    const params = { Bucket: bucket, Prefix: fileKey };
    const response = await s3.listObjectVersions(params).promise();

    if (response.Versions?.length) {
        for (const version of response.Versions) {
            await s3
                .deleteObject({
                    Bucket: bucket,
                    Key: fileKey,
                    VersionId: version.VersionId,
                })
                .promise();
        }
    }

    return await s3
        .deleteObject({
            Bucket: bucket,
            Key: fileKey,
            VersionId: 'null',
        })
        .promise();
};
```

## AWS SDK v3

```ts
const client = new S3Client({ region: process.env.AWS_REGION });

export const deleteObject = async (bucket: string, fileKey: string) => {
    const deleteParams = {
        Bucket: bucket,
        Key: fileKey,
    };

    const listVersionsCommand = new ListObjectVersionsCommand({
        Bucket: bucket,
        Prefix: fileKey,
    });

    const response = await client.send(listVersionsCommand);

    if (response?.Versions?.length) {
        for (const version of response.Versions) {
            const deleteVersionCommand = new DeleteObjectCommand({
                ...deleteParams,
                VersionId: version.VersionId,
            });

            await client.send(deleteVersionCommand);
        }
    }

    const deleteCommand = new DeleteObjectCommand({
        ...deleteParams,
        VersionId: 'null',
    });

    return await client.send(deleteCommand);
};
```

Thanks for reading the post. I hope this was helpful to you.
