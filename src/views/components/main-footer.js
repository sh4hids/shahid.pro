import React from 'react';
import Grid from 'styled-components-grid';
import { SocialLink } from '.';
import { Container, Footer, Image, Text, URL } from '../kits';

const socialProfiles = [
  {
    name: 'GitHub',
    url: 'https://github.com/sh4hids',
  },
  {
    name: 'LinkedIn',
    url: 'https://bd.linkedin.com/in/sh4hids',
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/sh4hids',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/sh4hids',
  },
];

const MainFooter = () => (
  <Footer>
    <Container main pt={16} pb={16} className="footer-container">
      <Grid>
        <Grid.Unit size={{ xs: 1, sm: 1 / 2 }}>
          <Container p={16}>
            <Text variant="h6" mb={16}>
              About
            </Text>
            <Text variant="caption">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              suscipit, nemo accusantium laboriosam quasi, mollitia. Placeat
              recusandae minima excepturi, officia, voluptas illum, nostrum
              voluptatem, at non nemo culpa sapiente enim!
            </Text>
          </Container>
        </Grid.Unit>
        <Grid.Unit size={{ xs: 1, sm: 1 / 2 }}>
          <Container p={16}>
            <Text variant="h6" mb={16}>
              Keep connected
            </Text>
            {socialProfiles.map((profile, i) => (
              <SocialLink key={i} profile={profile} />
            ))}
          </Container>
        </Grid.Unit>
      </Grid>
    </Container>
  </Footer>
);

export default MainFooter;
