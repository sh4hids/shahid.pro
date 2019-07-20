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
              About Me
            </Text>
            <Text variant="caption">
            I am a fullstack JavaScript Developer from Dhaka, Bangladesh. I love to
            work with NodeJS, React, MongoDB and all other related technologies. When
            I am not coding, I like to read books and spend time with friends and
            brothers.
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
