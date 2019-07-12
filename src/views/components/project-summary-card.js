import React from 'react';
import styled from 'styled-components';
import { Container, Image, Text, URL } from '../kits';
import arrowIcon from '../../assets/icons/arrow.svg';

const ProjectSummaryCardContainer = styled(Container)`
  @media only screen and (max-width: 576px) {
    margin: 0 0 16px 0;
  }
`;

const ProjectSummaryCard = ({ project, i }) => (
  <ProjectSummaryCardContainer
    p={24}
    mb={16}
    bg="lighter"
    card
    align="verticalSpace"
    height={150}
    mr={i % 2 === 0 ? 16 : '0'}
  >
    <URL href={project.url} target="_blank" rel="noopener noreferrer">
      <Text variant="h5" color="secondary">
        {project.title}
      </Text>
    </URL>
    <Text>{project.info}</Text>
    <URL href={project.url} target="_blank" rel="noopener noreferrer">
      <Text variant="h6" color="secondary">
        <Image src={arrowIcon} alt="url-arrow" width={12} top={-1} /> &nbsp;
        {project.url.split('com/')[1]}
      </Text>
    </URL>
  </ProjectSummaryCardContainer>
);

export default ProjectSummaryCard;
