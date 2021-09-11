const config = require('./src/config');

module.exports = {
  plugins: [
    {
      resolve: '@sh4hids/gatsby-theme-open-sourcerer',
      options: {
        ...config,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'gallery',
        path: `${__dirname}/contents/gallery`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `galleryImages`,
        path: `${__dirname}/contents/gallery/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-google-fonts-with-attributes`,
      options: {
        fonts: [
          `Fira Sans:400,400i,500,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
        attributes: {
          rel: 'stylesheet preload prefetch',
          onLoad: "this.onload=null;this.rel='stylesheet'",
          as: 'style',
        },
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `shahid-pro`,
      },
    },
  ],
};
