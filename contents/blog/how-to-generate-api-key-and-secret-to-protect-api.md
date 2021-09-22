---
slug: 'how-to-generate-api-key-and-secret-to-protect-api'
title: 'How To Generate API Key And Secret To Protect API'
isPublished: true
publishedAt: '2021-09-22'
tags:
  - 'API'
  - 'javascript'
---

I have used a lot of third-party APIs for the last four years. Most of them provided keys and secrets (API key/Client ID, API/Client secret) to access the API. I was also planning to develop some services where I would provide APIs. So, I was wondering how to generate API keys and API secrets for my services.

I started researching and read a lot of articles and StackOverflow questions regarding this topic. I found out that there are some common rules. I will try to summarize what I have learned about generating API keys and secrets in this post.

## API Key or Client ID

An API key or Client ID is a unique key to identify a user. Like a username or email, it must be unique. It should be unguessable too. We don't have to encrypt it. We can generate an API key by using the `crypto` package from Node.js. You can use the following code to generate an API key.

```javascript
const { randomBytes } = require('crypto');

function generateKey(size = 32, format = 'base64') {
  const buffer = crypto.randomBytes(size);
  return buffer.toString(format);
}

console.log(generateKey());
// will generate somethinh like:
// 0NY4IrzHgLnRZUCWpxSnXLpn+Qjb1YfEj0UmnQaJiTw=
```

## API Secret or Client Secret

An API/Client secret is a secure key to provide secure access to an API. It must be unique and unguessable. We must store it in hashed form because it's just like a password. It is a good practice to use different secret keys for different scopes in APIs. For example, we can use a key to `Create` and `Update` articles and another key to `Read` user list and details.

We can generate a random unique key using our previous `generateKey` method and hash the result using `scryptSync` from the `crypto` package. We will send the unhashed key to users and asked them to store the key safely. One of the shortcomings of this approach is that the user won't see the key again if the user forgets the key. You can use the following code to generate a hashed version of the key.

```javascript
const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

function generateSecretHash(key) {
  const salt = randomBytes(8).toString('hex');
  const buffer = scryptSync(key, salt, 64) as Buffer;
  return `${buffer.toString('hex')}.${salt}`;
}

// used the previous function
const key = generateKey(); // send to user: Jj0fmQUis7xKJ6oge4r1fN4em7xJ+hILrgubKlG6PLA=
const secretHash = generateSecretHash(key); // save in db: c10c7e79fc496144ee245d9dcbe52d9d3910c2a514af1cfe8afda9ea655815efed5bd2a793b31bf923fe47d212bab7896cd527c720849678077e34cdd6fec0a2.2f717b397644fdcc
```

We can use the following code to compare and validate an API secret.

```javascript
function compareKeys(storedKey, suppliedKey) {
  const [hashedPassword, salt] = storedKey.split('.');

  const buffer = scryptSync(suppliedKey, salt, 64) as Buffer;
  return timingSafeEqual(Buffer.from(hashedPassword, 'hex'), buffer);
}
```

I hope you've got a general guideline about generating API keys and secrets. To know more about this, you can follow the following links:

Resources:

- [https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/](https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/)
- [https://stackoverflow.com/questions/62908969/password-hashing-in-nodejs-using-built-in-crypto](https://stackoverflow.com/questions/62908969/password-hashing-in-nodejs-using-built-in-crypto)
- [https://stackoverflow.com/questions/55009503/how-services-generate-and-use-public-and-secret-api-keys](https://stackoverflow.com/questions/55009503/how-services-generate-and-use-public-and-secret-api-keys)
- [https://stackoverflow.com/questions/14412132/whats-the-best-approach-for-generating-a-new-api-key](https://stackoverflow.com/questions/14412132/whats-the-best-approach-for-generating-a-new-api-key)
- [https://security.stackexchange.com/questions/180345/do-i-need-to-hash-or-encrypt-api-keys-before-storing-them-in-a-database](https://security.stackexchange.com/questions/180345/do-i-need-to-hash-or-encrypt-api-keys-before-storing-them-in-a-database)
- [https://security.stackexchange.com/questions/180367/need-advices-on-api-key-secret-generation](https://security.stackexchange.com/questions/180367/need-advices-on-api-key-secret-generation)
- [https://www.freecodecamp.org/news/best-practices-for-building-api-keys-97c26eabfea9/](https://www.freecodecamp.org/news/best-practices-for-building-api-keys-97c26eabfea9/)
- [https://nodejs.org/api/crypto.html](https://nodejs.org/api/crypto.html)
