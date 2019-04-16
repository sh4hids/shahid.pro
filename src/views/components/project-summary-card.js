import React from 'react';
import styled from 'styled-components';
import { Container, Text, URL } from '../kits';

const ProjectSummaryCardContainer = styled(Container)`
  @media only screen and (max-width: 576px) {
    margin: 0 0 16px 0;
  }
`;

const ProjectSummaryCard = ({ project, i }) => (
  <ProjectSummaryCardContainer
    p={24}
    mb={16}
    bg="secondary"
    card
    align="verticalSpace"
    height={200}
    mr={i % 2 === 0 ? 16 : '0'}
  >
    <Text variant="h5" color="lighter">
      {project.title}
    </Text>
    <Text color="lighter">{project.info}</Text>
    <URL
      href={project.url}
      color="lighter"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Text variant="h6" color="lighter">
        📎 &nbsp;{project.url.split('com/')[1]}
      </Text>
    </URL>
  </ProjectSummaryCardContainer>
);

export default ProjectSummaryCard;
