import React from 'react';
import { Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import GlobalStyle from '../styles';
import { MainHeader } from '../components';
import { Container } from '../kits';

const DefaultLayout = ({ children, topRibbon }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <GlobalStyle />
      {topRibbon}
      <MainHeader top={topRibbon ? 40 : 0} />
      <Container main mt={topRibbon ? 116 : 76}>
        {children}
      </Container>
    </Container>
  </ThemeProvider>
);

export default DefaultLayout;
