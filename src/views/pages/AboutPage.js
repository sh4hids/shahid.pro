import React from 'react';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import { DefaultLayout } from '../layouts';
import { SEO, PostSummaryCard, TopRibbon } from '../components';
import { HeroSection, ProjectsSection } from '../components/home';
import { Text, Container } from '../kits';

const AboutPage = ({ siteTitle, posts, intl }) => (
  <DefaultLayout>
    <SEO
      title="About"
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
      <Text variant="h4" mb={16}>
        {intl.formatMessage({ id: 'about.title' })}
      </Text>
      <Text>
        I am a fullstack JavaScript Developer from Dhaka, Bangladesh. I love to
        work with NodeJS, React, MongoDB and all other related technologies.
        When I am not coding, I like to read books and spend time with friends
        and brothers.
      </Text>
    </Container>
  </DefaultLayout>
);

export default injectIntl(AboutPage);
