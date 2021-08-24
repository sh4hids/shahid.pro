---
slug: 'published-my-first-gatsby-theme'
title: 'Published My First Gatsby Theme'
isPublished: true
publishedAt: '2021-08-24'
tags:
  - 'gatsby'
  - 'theme'
  - 'portfolio'
---

Recently I was planning to redesign my portfolio. I planned to make it minimal and focus on showcasing my open-source works and writings. As I was using gatsby and I open-sourced my site, I decided to build it as a gatsby theme.

I had zero knowledge about developing a gatsby theme before starting the project. I started researching and found a great tutorial by Jason Lengstorf on [egghead.io](https://egghead.io/courses/gatsby-theme-authoring). I followed the tutorial and [documentation](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/building-themes/), and managed to build a minimal theme in a couple of days. It was so easy that I felt almost like developing a gatsby site.

I started by designing the theme in Figma with the [Atomic Design Pattern](https://bradfrost.com/blog/post/atomic-web-design/). I made a design system with color, typography, shadow, and some components so that I don't have to remember the color name, font size while designing the pages. You can find the design [here](https://www.figma.com/file/oHQ9wMCrJ8UqlHgLbGigCt/shahid.pro?node-id=0%3A1).

After completing the basic design, I started researching for a good name. My theme focuses on showcasing open-source projects. So, it would be great to have the word `open-source` in it. I remember developer [Ahmad Awais](https://github.com/ahmadawais) used to call him `OpenSourcerer`, and dev.to founder Ben Halpern also likes to call him [full-time open sourcerer](https://dev.to/ben/job-title-full-time-open-sourcerer-1eh1). I checked on GitHub and Gatsby Plugin Library if the name already exists. It was available. So, I named my theme [gatsby-theme-open-sourcerer](https://github.com/sh4hids/gatsby-theme-open-sourcerer).

Now let's have a look at the theme.

## Features

- minimal in design
- markdown support for writing post
- page contents in `YAML` format
- open-source project showcasing with GitHub star count
- fully customizable

## Installation

A site can be bootstrapped easily with the theme by using the starter kit. Just run the following command (you have to have `gatsby-cli` installed).

```bash
gatsby new my-site https://github.com/sh4hids/gatsby-starter-open-sourcerer
```

Now navigate to the project folder and run `gatsby develop` to see your project in development mode.

## Customization

You can customize each part of the theme either by customizing the configuration or by shadowing. You can find the detailed instructions on the [theme's readme](https://github.com/sh4hids/gatsby-theme-open-sourcerer#readme).

## Hard Lesson

> To shadow a theme, we have to skip the `src` folder in the shadow theme.
> <br> <br>- [issues/14134](https://github.com/gatsbyjs/gatsby/issues/14134#issuecomment-510310389)

Hope you'll find the theme useful. If you use and like the theme, please give a star and make a PR to add your site on [showcase section](https://github.com/sh4hids/gatsby-theme-open-sourcerer#sites-built-with-this-theme).
