---
slug: 'authorize-api-with-aws-api-gateway-authorizer'
title: 'Authorize API With AWS API Gateway Authorizer'
isPublished: false
publishedAt: '2021-08-18'
tags:
  - 'aws'
  - 'aws api gateway'
  - 'aws lambda'
---

Recently I was working on a project where we were using microservices for our APIs. Our API authentication and authorization was seperated in a microservice. We were using token based authentication. Some of our APIs were protected and user has to be authenticated to use those APIs.

Moreover, there were different user roles. Some roles were restricted from accessing some APIs, some of them had write access and some of them had only read access.

Managing such a complex authorization process on each individual services would be a mess. So, we decided to use AWS gateway authorizer. For this, we used a lambda function. It verifies the request by using the `Authorization` token before sending any request through api gateway.

We are also sending some data from the JWT token payload. As a result, we don't have to varify or validate our `Authorization` token on each and every microservices.

### Lambda authorizer

```javascript
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

function generatePolicy(principalId, effect, resource, authData) {
  const authResponse = {};
  authResponse.principalId = principalId;

  if (effect && resource) {
    const policyDocument = {};
    policyDocument.Version = '2012-10-17';
    policyDocument.Statement = [];
    var statementOne = {};
    statementOne.Action = 'execute-api:Invoke';
    statementOne.Effect = effect;
    statementOne.Resource = resource;
    policyDocument.Statement[0] = statementOne;
    authResponse.policyDocument = policyDocument;
  }

  authResponse.context = {
    userid: authData.user.userId,
    useremail: authData.user.email,
    userrole: authData.user.role,
  };
  return authResponse;
}

function generateAllow(principalId, resource, authData) {
  return generatePolicy(principalId, 'Allow', resource, authData);
}

function generateDeny(principalId, resource) {
  return generatePolicy(principalId, 'Deny', resource);
}

exports.handler = function (event, context, callback) {
  try {
    const headers = event.headers;
    const tmp = event.methodArn.split(':');
    const apiGatewayArnTmp = tmp[5].split('/');
    const restApiId = apiGatewayArnTmp[0];
    const stage = apiGatewayArnTmp[1];
    const resource = event.resource;

    const token = headers.Authorization;

    if (headers.Authorization === '') {
      throw { status: 401, message: 'Authorization header not found' };
    }

    const payload = jwt.verify(token, jwtSecret);
    callback(
      null,
      generateAllow(
        `${payload.user.userId}|${payload.user.email}|${stage}`,
        event.methodArn,
        payload
      )
    );
  } catch (error) {
    callback('Unauthorized');
  }
};
```
