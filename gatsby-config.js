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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
  ],
};
