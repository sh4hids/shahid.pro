import React from 'react';
import { DefaultLayout } from '../../layouts';
import { SEO, PostSummaryCard } from '../../components';
import { HeroSection } from './components';

const HomePage = ({ siteTitle, posts }) => (
  <DefaultLayout>
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
    {posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug;
      return <PostSummaryCard key={node.fields.slug} node={node} />;
    })}
  </DefaultLayout>
);

export default HomePage;
