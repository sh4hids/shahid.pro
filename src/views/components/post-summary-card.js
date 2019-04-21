import React from 'react';
import { Container, Text, URL } from '../kits';

const PostSummaryCard = ({ node, isLastPost }) => (
  <Container card mb={isLastPost ? '' : 16}>
    <Text variant="h4" mb={8}>
      <URL variant="gatsby" to={node.fields.slug}>
        {node.frontmatter.title || node.fields.slug}
      </URL>
    </Text>
    <Text variant="body">{node.excerpt}</Text>
    <Text variant="caption">{node.frontmatter.date}</Text>
  </Container>
);

export default PostSummaryCard;
