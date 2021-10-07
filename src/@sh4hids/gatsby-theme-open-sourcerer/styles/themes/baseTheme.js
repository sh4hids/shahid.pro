import theme from '@sh4hids/gatsby-theme-open-sourcerer/src/styles/themes/baseTheme';

const baseTheme = {
  name: 'light',
  ...theme,
  colors: {
    ...theme.colors,
    dark: ['#1E2029', '#2B2E3B', '#404454'],
  },
  elevations: [
    `0px 0px 1px rgba(39, 40, 63, 0.08), 0px 0.4px 2px rgba(83, 85, 110, 0.16)`,
    `0px 0px 1px rgba(39, 40, 63, 0.08), 0px 2px 4px rgba(25, 25, 36, 0.16)`,
    `0px 2px 8px rgba(39, 40, 63, 0.08), 0px 16px 32px rgba(25, 25, 36, 0.16)`,
  ],
};

export default baseTheme;
