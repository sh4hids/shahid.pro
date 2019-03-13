import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

const DefaultLayout = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default DefaultLayout;
