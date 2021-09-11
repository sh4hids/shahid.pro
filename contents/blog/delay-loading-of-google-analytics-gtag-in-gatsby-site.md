---
slug: 'delay-loading-of-google-analytics-gtag-in-gatsby-site'
title: 'Delay Loading Of Google Analytics (gtag) In Gatsby Site'
isPublished: true
publishedAt: '2021-09-11'
tags:
  - 'gatsby'
  - 'google analytics'
  - 'github actions'
---

Working with the gatsby.js site and google analytics is a little bit tricky if you consider performance. With the latest lighthouse version (v6 and above), performance reduces a lot if you have Google Tag Manager (especially if you install `gatsby-plugin-google-analytics`). A few months back, I even removed analytics from one of my sites as I was obsessed with performance.

But I didn't want to remove analytics from my newly built site and didn't want to reduce the performance too. So, I started researching for a solution and found a way to delay loading the analytics script [here](https://github.com/gatsbyjs/gatsby/issues/24332#issuecomment-752373784). I modified the script to match the new gtag script setup. It injects the gtag script after a certain period or if a user starts interacting with the site.

## Setting up gtag

We need to add the following script in our `gatsby-browser.js` file. Here we are using an environment variable to hide our google analytics tracking id. You should add a `.env` file and provide the value for `GATSBY_GA_TRACKING_ID` there. You can adjust the script loading delay in the `onreadystatechange` method (I got the best result for 3500 ms).

```javascript
function initGTM() {
  if (window.isGTMLoaded) {
    return false;
  }

  window.isGTMLoaded = true;

  const script = document.createElement('script');

  script.type = 'text/javascript';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_GA_TRACKING_ID}`;

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', `${process.env.GATSBY_GA_TRACKING_ID}`);
  };

  document.head.appendChild(script);
}

function loadGTM(event) {
  initGTM();
  event.currentTarget.removeEventListener(event.type, loadGTM);
}

exports.onClientEntry = () => {
  document.onreadystatechange = () => {
    if (document.readyState !== 'loading') {
      setTimeout(initGTM, 3500);
    }
  };

  document.addEventListener('scroll', loadGTM);
  document.addEventListener('mousemove', loadGTM);
  document.addEventListener('touchstart', loadGTM);
};
```

## Add tracking ID on GitHub Action env

I am using GitHub Action to automate the deployment of my site. So, I have to read the environment variable from the deployment server. We can provide a `.env` file in our project, but this will not be secure. We can use GitHub's project secret to hide our credentials/secrets. Navigate to your project's settings page and go to the `Secrets` page from the menu. Now, add a repository secret named `GATSBY_GA_TRACKING_ID` and provide your tracking id as a value.

In your workflow configuration file add a section called `env`. In the `env` section add the environment variable like shown below. You should keep in mind that, `env` section should come before the `jobs` section in your workflow configuration.

```yaml
name: GitHub Pages

on:
  push:
    branches:
      - main

env:
  GATSBY_GA_TRACKING_ID: ${{secrets.GATSBY_GA_TRACKING_ID}}

jobs:
  deploy:
  ......
  ......
```

## Hard Lesson

> If you want to access the environment variable in the BROWSER in a Gatsby site, prefix your variable name with `GATSBY_`.

Thanks a lot for reading the post, and please share if you find it useful.
