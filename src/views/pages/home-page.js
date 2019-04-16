import React from 'react';
import { DefaultLayout } from '../layouts';
import Grid from 'styled-components-grid';
import {
  SEO,
  PostSummaryCard,
  ProjectSummaryCard,
  TopRibbon,
} from '../components';
import { HeroSection } from '../components/home';

const data = [
  {
    title: 'Book Manager',
    info:
      'A simple personal library management app built with react and electron. User can save book info, notes, back-up restore data.',
    url: 'https://github.com/bdTechies/book-manager',
  },
  {
    title: 'Rabbana Dua',
    info:
      "It's an web app built with React and fullpage.js. There are total 40 duas from the Quran with reciatation and Bangla translation.",
    url: 'https://github.com/sh4hids/rabbana-dua',
  },
  {
    title: 'Tahir',
    info:
      'Browser extension to avoid haram images & videos on the Internet. A user can easily blur any images or videos by some keyboard shortcuts.',
    url: 'https://github.com/fushatech/tahir',
  },
  {
    title: 'Bangla Number Utils',
    info:
      'Small utility library to help you to convert any numbers to Bengali number',
    url: 'https://github.com/sh4hids/bn-number-utils',
  },
];

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
    <Grid>
      {data.map((project, i) => (
        <Grid.Unit size={{ xs: 1, sm: 1 / 2 }} key={i}>
          <ProjectSummaryCard project={project} i={i} />
        </Grid.Unit>
      ))}
    </Grid>
    {posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug;
      return <PostSummaryCard key={node.fields.slug} node={node} />;
    })}
  </DefaultLayout>
);

export default HomePage;
