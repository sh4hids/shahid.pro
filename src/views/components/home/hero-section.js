import React from 'react';
import Grid from 'styled-components-grid';
import { Container, Text } from '../../kits';
import { FullBackgroungImage } from '../';

import bgImage from '../../../assets/images/bg.svg';

const HeroSection = () => (
  <Container>
    <FullBackgroungImage imgSrc={bgImage} height={420}>
      <Grid>
        <Grid.Unit size={{ xs: 1, sm: 1 / 2, md: 1 / 2, lg: 1 / 2 }}>
          <Container p={24} pt={60}>
            <Text variant="h4">Hi, I'm Shahid...</Text>
            <Text>
              I am a fullstack JavaScript Developer from Dhaka, Bangladesh. I
              love to work with NodeJS, React, MongoDB and all other related
              technologies. When I am not coding, I like to read books and spend
              time with friends and brothers.
            </Text>
          </Container>
        </Grid.Unit>
      </Grid>
    </FullBackgroungImage>
  </Container>
);

export default HeroSection;
