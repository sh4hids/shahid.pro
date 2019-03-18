import React from 'react';
import styled from 'styled-components';
import Grid from 'styled-components-grid';
import { List, ListItem, URL, Container, Image } from '../kits';
import myLogo from '../../assets/images/shahid.svg';

const HeaderContainer = styled.header`
  height: 60px;
  line-height: 60px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lighter};
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  margin-bottom: 16px;

  .menu-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
`;

const MainHeader = () => (
  <HeaderContainer>
    <Container main bg="lighter">
      <Grid halign="justify">
        <Grid.Unit size={1 / 2}>
          <URL variant="gatsby" to="/">
            <Image src={myLogo} width={30} top={12} />
          </URL>
        </Grid.Unit>
        <Grid.Unit size={1 / 2}>
          <List>
            <ListItem display="inline">
              <URL variant="gatsby" to="/about">
                About
              </URL>
            </ListItem>
            <ListItem display="inline">
              <URL variant="gatsby" to="/blog">
                Blog
              </URL>
            </ListItem>
            <ListItem display="inline">
              <URL variant="gatsby" to="/projects">
                Projects
              </URL>
            </ListItem>
          </List>
        </Grid.Unit>
      </Grid>
    </Container>
  </HeaderContainer>
);

export default MainHeader;
