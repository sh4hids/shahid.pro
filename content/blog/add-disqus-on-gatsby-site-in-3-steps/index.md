---
title: Add Disqus Commenting on Gatsby Site in 3 Steps
date: '2019-07-20T14:27:34.226Z'
published: true
language: 'en'
---

It's great to have a comment section on any blog site. People can easily express their opinion regarding a blog post. It creates an opportunity for knowledge sharing. In this tiny post, I'll try to go through the easiest steps of adding `Disqus` commenting on any `Gatsby.js` site. So, let's start...

###### Step 1: Install `gatsby-plugin-disqus`

```bash
$ npm install -S gatsby-plugin-disqus
```

###### Step 2: Configure plugin

Add this code to your `gatsby-config.js` file's plugins section:

```javascript
plugins: [
  {
    resolve: `gatsby-plugin-disqus`,
    options: {
      shortname: `your-disqus-short-code`,
    },
  },
];
```

###### Step 3: Use `Disqus` component in your `blog-post` template file

Import the `Disqus` component from the library:

```javascript
import { Disqus } from 'gatsby-plugin-disqus';
```

Create configuration for each post in the `render` method:

```javascript
//change according to your data
const disqusConfig = {
  url: `${siteUrl}/${post.fields.slug}`,
  identifier: post.fields.slug,
  title: post.frontmatter.title,
};
```

Finally add the `Disqus` component where ever you want:

```javascript
<Disqus config={disqusConfig} />
```

**N.B. You can get the shortname of your site on Disqus's general settings page.**

That's it! If you follow the steps correctly your site will have a comment section just like below. Let me know if the tutorial works or not, or any other queries you like to know.
