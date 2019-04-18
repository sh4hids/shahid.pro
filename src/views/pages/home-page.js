import React from 'react';
import { DefaultLayout } from '../layouts';
import { SEO, PostSummaryCard, TopRibbon } from '../components';
import { HeroSection, ProjectsSection } from '../components/home';
import { Text } from '../kits';

const HomePage = ({ siteTitle, posts }) => (
  <DefaultLayout
    topRibbon={<TopRibbon message="🛠 -- under construction -- 🛠" />}
  >
    <SEO
      title="Home"
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
    <Text variant="h4" mt={16} mb={24} textAlign="center">
      Recent posts
    </Text>
    {posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug;
      return <PostSummaryCard key={node.fields.slug} node={node} />;
    })}
  </DefaultLayout>
);

export default HomePage;
