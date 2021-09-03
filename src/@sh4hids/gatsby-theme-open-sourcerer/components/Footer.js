/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Box,
  Container,
  Text,
  SocialLinks,
} from '@sh4hids/gatsby-theme-open-sourcerer/src/components';

const formatLinks = (links = {}) => {
  const formattedLinks = [];

  Object.keys(links).forEach((key) => {
    formattedLinks.push({
      site: key,
      url: links[key],
    });
  });

  return formattedLinks;
};

const Wrapper = styled(Box)`
  background-color: var(--color-bg-1);
  box-shadow: ${({ theme }) => theme.elevations[0]};
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            bio
            fullName
            links {
              facebook
              github
              instagram
              linkedin
              twitter
            }
          }
          footer {
            title
            description
            copyright
          }
        }
      }
    }
  `);

  const author = data.site.siteMetadata.author || {};
  const footer = data.site.siteMetadata.footer || {};
  const socialLinks = formatLinks(author.links);

  return (
    <Wrapper>
      <Container py={[3, 3, 5]}>
        <Box display="flex" flexWrap="wrap">
          <Box width={[1, 1, 1 / 2]} p={3}>
            <Text variant="h6">{footer.title}</Text>
            <Text variant="raw" html={footer.description} />
          </Box>
          <Box width={[1, 1, 1 / 2]} p={3}>
            <Text variant="h6">Social Links</Text>
            <SocialLinks links={socialLinks} />
          </Box>
          <Box width={1} p={3}>
            <Text>{footer.copyright}</Text>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Footer;
