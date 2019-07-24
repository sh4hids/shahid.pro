import React from 'react';
import styled from 'styled-components';
import { top } from 'styled-system';
import Grid from 'styled-components-grid';
import { injectIntl, Link, FormattedMessage } from 'gatsby-plugin-intl';
import { List, ListItem, URL, Container, Image, Text } from '../kits';
import myLogo from '../../assets/images/shahid.svg';

const HeaderContainer = styled.header`
  height: 60px;
  line-height: 60px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lighter};
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  margin-bottom: 16px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  ${top};

  .brand-title {
    font-weight: bold;
    text-transform: uppercase;
    position: relative;
    top: 2px;
  }

  ul {
    text-align: right;

    li {
      a {
        display: inline-block;
        height: 100%;
        padding: 0 16px;
        font-weight: 500;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    > div {
      padding: 0 16px;
      margin-top: 0;
    }

    ul {
      li {
        a {
          padding: 0 8px;
        }
      }
    }

    .brand-title {
      display: none;
    }
  }
`;

const MainHeader = props => (
  <HeaderContainer {...props}>
    <Container main bg="lighter">
      <Grid halign="justify">
        <Grid.Unit size={{ xs: 1 / 4, sm: 1 / 2, md: 1 / 2, lg: 1 / 2 }}>
          <URL
            variant="gatsby"
            to={props.intl.formatMessage({ id: 'baseUrl' })}
          >
            <span className="brand-title"> @</span>
            <Image src={myLogo} alt="shahid-logo" width={24} top={8} />
            <span className="brand-title">h4hids</span>
          </URL>
        </Grid.Unit>
        <Grid.Unit size={{ xs: 3 / 4, sm: 1 / 2, md: 1 / 2, lg: 1 / 2 }}>
          <List>
            <ListItem display="inline">
              <URL variant="gatsby" to="/about">
                {props.intl.formatMessage({ id: 'mainMenu.about' })}
              </URL>
            </ListItem>
            <ListItem display="inline">
              <URL variant="gatsby" to="/blog">
                {props.intl.formatMessage({ id: 'mainMenu.blog' })}
              </URL>
            </ListItem>
            <ListItem display="inline">
              <URL variant="gatsby" to="/projects">
                {props.intl.formatMessage({ id: 'mainMenu.projects' })}
              </URL>
            </ListItem>
          </List>
        </Grid.Unit>
      </Grid>
    </Container>
  </HeaderContainer>
);

export default injectIntl(MainHeader);
