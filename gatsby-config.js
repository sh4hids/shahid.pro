const config = require('./src/config');

module.exports = {
  plugins: [
    {
      resolve: '@sh4hids/gatsby-theme-open-sourcerer',
      options: {
        ...config,
      },
    },
  ],
};
