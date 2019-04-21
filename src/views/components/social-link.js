import React from 'react';
import Grid from 'styled-components-grid';
import { Container, Image, Text, URL } from '../kits';
import arrowIcon from '../../assets/icons/arrow.svg';

const SocialLink = ({ profile }) => (
  <Container mb={8}>
    <Grid>
      <Grid.Unit size={{ xs: 1 / 3, sm: 1 / 3 }}>
        <Text variant="caption">
          <Image src={arrowIcon} alt="url-arrow" width={12} />
          &nbsp; {profile.name}
        </Text>
      </Grid.Unit>
      <Grid.Unit size={{ xs: 2 / 3, sm: 2 / 3 }}>
        <Text variant="caption">
          <URL to={profile.url} target="_blank" rel="noopener noreferrer">
            {profile.url.split('://')[1]}
          </URL>
        </Text>
      </Grid.Unit>
    </Grid>
  </Container>
);

export default SocialLink;
