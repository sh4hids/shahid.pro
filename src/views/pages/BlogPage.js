import React from 'react';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import Grid from 'styled-components-grid';
import { DefaultLayout } from '../layouts';
import { SEO, PostSummaryCard, TopRibbon } from '../components';
import { HeroSection, ProjectsSection } from '../components/home';
import { Text } from '../kits';

const BlogPage = ({ siteTitle, posts, intl }) => (
  <DefaultLayout>
    <SEO
      title={intl.formatMessage({ id: 'mainMenu.blog' })}
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
    <Grid>
      <Grid.Unit>
        <Text variant="h4" mt={8} mb={24} textAlign="center">
          {posts.length
            ? intl.formatMessage({ id: 'sectionTitle.recentPost' })
            : intl.formatMessage({ id: 'sectionTitle.noPostYet' })}
        </Text>
      </Grid.Unit>
      {posts.map(({ node }, i) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <Grid.Unit>
            <PostSummaryCard
              key={node.fields.slug}
              node={node}
              isLastPost={i === posts.length - 1}
            />
          </Grid.Unit>
        );
      })}
    </Grid>
  </DefaultLayout>
);

export default injectIntl(BlogPage);
