import React from 'react';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import Grid from 'styled-components-grid';
import { DefaultLayout } from '../layouts';
import { SEO, PostSummaryCard, TopRibbon } from '../components';
import { HeroSection, ProjectsSection } from '../components/home';
import { Text, Container } from '../kits';

const AboutPage = ({ siteTitle, posts, intl }) => (
  <DefaultLayout>
    <SEO
      title={intl.formatMessage({ id: 'mainMenu.about' })}
      keywords={[
        `blog`,
        `sh4hids`,
        `javascript`,
        `react`,
        `developer`,
        `software engineer`,
        `bangladeshi`,
      ]}
    />
    <Container p={{ xs: 16, sm: 0 }}>
      <Grid>
        <Grid.Unit>
          <Text variant="h4" mt={24} mb={16}>
            {intl.formatMessage({ id: 'about.title' })}
          </Text>
        </Grid.Unit>
        <Grid.Unit>
          <Text>
            I am a fullstack JavaScript Developer from Dhaka, Bangladesh. I love
            to work with NodeJS, React, MongoDB and all other related
            technologies. When I am not coding, I like to read books and spend
            time with friends and brothers.
          </Text>
        </Grid.Unit>
      </Grid>
    </Container>
  </DefaultLayout>
);

export default injectIntl(AboutPage);
