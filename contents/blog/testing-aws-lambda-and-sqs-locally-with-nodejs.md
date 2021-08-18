---
title: Testing AWS Lambda and SQS locally with Node.js
slug: testing-aws-lambda-and-sqs-locally-with-nodejs
publishedAt: 2019-11-15
isPublished: true
tags:
  - node
  - aws
  - aws lambda
  - aws sqs
---

I suppose both of your Lambda function and SQS messages are ready, and AWS Lambda and SQS in `localstack` are up and running. We need the SQS queue URL and you can find all of the URLs by running this command:

```bash
$ aws --endpoint-url=http://localhost:4576 sqs list-queues
```

If you haven't create any SQS queue yet, create one using the following command:

```bash
$ aws --endpoint-url=http://localhost:4576 sqs create-queue --queue-name test-sqs
```

Now create a directory and open it in a terminal window. We need to initialize this directory by running `npm init -y`. We need two npm packages to test our SQS and Lambda function locally: `lambda-local` and `sqs-consumer`. Install these packages by running the following command:

```bash
$ npm i -S lambda-local sqs-consumer
```

Create a file named `index.js` and paste the following code in it. You have to change the configuration according to your settings.

```javascript
const lambdaLocal = require('lambda-local');
const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: 'http://localhost:4576/queue/test-sqs',
  handleMessage: async (message) => {
    const body = JSON.parse(message.Body);

    const jsonPayload = {
      Records: [
        {
          body: message.Body,
          messageAttributes: {
            messageType: {
              stringValue: message.MessageAttributes.messageType.StringValue,
            },
          },
        },
      ],
    };

    lambdaLocal
      .execute({
        event: jsonPayload,
        lambdaPath: './my-lambda-function/index.js', //your lambda function path
        timeoutMs: 3000,
        envfile: './my-lambda-function/.env', //your lambda function env
      })
      .then(function (done) {
        console.log(done);
      })
      .catch(function (err) {
        console.error(err);
      });
  },
  messageAttributeNames: ['All'],
});

app.on('error', (err) => {
  console.error(err.message);
});

app.on('processing_error', (err) => {
  console.error(err.message);
});

app.start();
```

Finally, add a `start` script in your `package.json` and run `npm start` to start the SQS consumer. If you trigger your SQS send message call now, you will see that your lambda function has been executed. You can check a complete setup in [this git repo](https://github.com/sh4hids/test-sqs-and-lambda-locally).

Please let me know if you faced any problem or not. Thanks for reading this short tutorial.
