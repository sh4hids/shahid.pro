import React from 'react';
import { DefaultLayout } from '../layouts';
import { SEO, PostSummaryCard, TopRibbon } from '../components';
import { HeroSection, ProjectsSection } from '../components/home';
import { Text } from '../kits';

const AboutPage = ({ siteTitle, posts }) => (
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
    <Text variant="h4" mb={16}>
      Hi, I'm Shahid...
    </Text>
    <Text>
      I am a fullstack JavaScript Developer from Dhaka, Bangladesh. I love to
      work with NodeJS, React, MongoDB and all other related technologies. When
      I am not coding, I like to read books and spend time with friends and
      brothers.
    </Text>
  </DefaultLayout>
);

export default AboutPage;
