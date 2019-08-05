import React from 'react';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import { DefaultLayout } from '../layouts';
import { SEO, PostSummaryCard, TopRibbon } from '../components';
import { ProjectsSection } from '../components/home';
import { Text } from '../kits';

const ProjectPage = ({ siteTitle, posts, intl }) => (
  <DefaultLayout>
    <SEO
      title={intl.formatMessage({ id: 'mainMenu.projects' })}
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

export default injectIntl(ProjectPage);
