/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Box,
  Container,
  Text,
  SocialLinks,
  Image,
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
            <Text fontSize="h6" fontWeight="bold" lineHeight="heading">
              {footer.title}
            </Text>
            <Text variant="raw" html={footer.description} />
            <Text>
              Like anything in my site and want to buy me a coffee? please
              follow the link 👇
            </Text>
            <a
              href="https://www.buymeacoffee.com/sh4hids"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png"
                alt="Buy Me A Coffee"
                height="3rem"
                width="auto"
              />
            </a>
          </Box>
          <Box width={[1, 1, 1 / 2]} p={3}>
            <Text fontSize="h6" fontWeight="bold" lineHeight="heading">
              Social Links
            </Text>
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
