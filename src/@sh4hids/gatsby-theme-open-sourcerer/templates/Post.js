/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import urljoin from 'url-join';
import { Disqus } from 'gatsby-plugin-disqus';

import {
  Box,
  Text,
  SocialShareLinks,
  PostTags,
} from '@sh4hids/gatsby-theme-open-sourcerer/src/components';
import { DefaultLayout } from '@sh4hids/gatsby-theme-open-sourcerer/src/layouts';

const Post = ({ pageContext, data }) => {
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  const author = data.site.siteMetadata.author.fullName;
  const { siteUrl, blogPath } = data.site.siteMetadata;
  const disqusConfig = {
    url: urljoin(siteUrl, blogPath, pageContext.slug),
    identifier: `${blogPath}${pageContext.slug}`,
    title: post.title,
  };

  return (
    <DefaultLayout
      title={post.title}
      url={`/${blogPath}${pageContext.slug}`}
      postMeta={{
        author,
        timeToRead: postNode.timeToRead,
        publishedAt: post.publishedAt,
      }}
      description={postNode.excerpt}
    >
      <Text variant="raw" html={postNode.html} className="post-body" />
      <PostTags tags={post.tags || {}} blogPath={blogPath} />
      <SocialShareLinks
        title={post.title}
        link={urljoin(siteUrl, blogPath, pageContext.slug)}
      />
      <Box p={4} pb={3} bg="var(--color-bg-1)" borderRadius={8}>
        <Disqus config={disqusConfig} />
      </Box>
    </DefaultLayout>
  );
};

export const pageQuery = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        blogPath
        author {
          fullName
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        publishedAt
        tags
        slug
      }
      fields {
        slug
      }
    }
  }
`;

export default Post;
