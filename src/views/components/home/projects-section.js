import React from 'react';
import Grid from 'styled-components-grid';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import { Text } from '../../kits';
import { ProjectSummaryCard } from '../';

const data = [
  {
    title: 'Book Manager',
    info:
      'A simple personal library management app to save book info, notes, reading status etc.',
    url: 'https://github.com/bdTechies/book-manager',
  },
  {
    title: 'Rabbana Dua',
    info:
      'An web app built with React showing 40 duas from the Quran with reciatation and translation.',
    url: 'https://github.com/sh4hids/rabbana-dua',
  },
  {
    title: 'Tahir',
    info:
      'A Browser extension to avoid haram images & videos by blurring them with keyboard shortcuts.',
    url: 'https://github.com/fushatech/tahir',
  },
  {
    title: 'Bangla Number Utils',
    info:
      'Small utility library to help you to convert any numbers to Bengali number',
    url: 'https://github.com/sh4hids/bn-number-utils',
  },
];

const ProjectsSection = ({ intl }) => (
  <Grid>
    <Grid.Unit>
      <Text variant="h4" mt={8} mb={24} textAlign="center">
        {intl.formatMessage({ id: 'sectionTitle.projects' })}
      </Text>
    </Grid.Unit>
    {data.map((project, i) => (
      <Grid.Unit size={{ xs: 1, sm: 1 / 2 }} key={i}>
        <ProjectSummaryCard project={project} i={i} />
      </Grid.Unit>
    ))}
  </Grid>
);

export default injectIntl(ProjectsSection);
