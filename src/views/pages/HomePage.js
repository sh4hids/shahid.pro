import React from 'react';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import { DefaultLayout } from '../layouts';
import { SEO, PostSummaryCard, TopRibbon } from '../components';
import { HeroSection, ProjectsSection } from '../components/home';
import { Text } from '../kits';

const HomePage = ({ siteTitle, posts, intl }) => (
  <DefaultLayout>
    <SEO
      title={intl.formatMessage({ id: 'mainMenu.home' })}
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
    <HeroSection />
    <ProjectsSection />
    <Text variant="h4" mb={24} textAlign="center">
      {posts.length
        ? intl.formatMessage({ id: 'sectionTitle.recentPost' })
        : intl.formatMessage({ id: 'sectionTitle.noPostYet' })}
    </Text>
    {posts.map(({ node }, i) => {
      const title = node.frontmatter.title || node.fields.slug;
      return (
        <PostSummaryCard
          key={node.fields.slug}
          node={node}
          isLastPost={i === posts.length - 1}
        />
      );
    })}
  </DefaultLayout>
);

export default injectIntl(HomePage);
