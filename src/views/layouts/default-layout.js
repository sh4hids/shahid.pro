import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import GlobalStyle from '../styles';
import { MainHeader } from '../components';
import { Container } from '../kits';

const DefaultLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <GlobalStyle />
      <MainHeader />
      <Container main>{children}</Container>
    </Container>
  </ThemeProvider>
);

export default DefaultLayout;
