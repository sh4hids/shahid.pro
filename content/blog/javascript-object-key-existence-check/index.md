---
title: JavaScript Object Key Existence Check (on any level)
date: '2019-07-18T10:16:14.794Z'
---

In our day to day life of coding (specially in JavaScript) sometimes we need to check whether a key of an object exists or not. It can be on any level. For example, let's imagine we have an API response where we can get the details of a blog post.

```json
{
  "title": "This is a blog post",
  "author": {
    "name": "John Doe",
    "twitter": "@johndoe"
  },
  "details": "Details blog post"
}
```

And we are showing the response on our blog details page like this:

```html
<h2>{res.title}</h2>
<h4>Author: {res.author.name || 'Anonymous'}</h4>
```

Everything will work fine if the `author` key has values. For some (wired) reason if the `author` key has `null` value, then our code will break. We might get an error like:

```
Uncaught TypeError: Cannot read property xyz of undefined.
```

To avoid this kind of situation we can create a helper function to check whether a key of an object (on any level) exists or not. Here's how I implemented the function:

```javascript
//object-helper.js
export const isDefined = (ref, path) => {
  let name;
  let keys = path.split('.');

  //check if the reference object exists or not
  if (!ref || typeof ref !== 'object') return false;

  while ((name = keys.shift())) {
    if (!ref.hasOwnProperty(name)) return false;
    ref = ref[name];
  }
  return true;
};
```

That's it! Now we can use to check the existence of a key of an object like this:

```javascript
import { isDefined } from '../helper/path/object-helper';

<h2>{res.title}</h2>
<h4>Author: {isDefined(res, 'author.name') ? res.author.name : 'Anonymous'}</h4>
```

Thanks for reading this tiny post. If you have any better solution, please let me know on my twitter [@sh4hids](https://twitter.com/sh4hids).
