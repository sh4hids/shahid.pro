import React from 'react';
import { DefaultLayout } from '../layouts';
import { SEO, PostSummaryCard, TopRibbon } from '../components';
import { ProjectsSection } from '../components/home';
import { Text } from '../kits';

const ProjectPage = ({ siteTitle, posts }) => (
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
    <ProjectsSection />
  </DefaultLayout>
);

export default ProjectPage;
