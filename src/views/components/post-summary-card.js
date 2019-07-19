import React from 'react';
import { Container, Divider, Text, URL } from '../kits';

const PostSummaryCard = ({ node, isLastPost }) => (
  <Container card mb={isLastPost ? 8 : 16}>
    <Text variant="h4" mb={8}>
      <URL variant="gatsby" to={node.fields.slug}>
        {node.frontmatter.title || node.fields.slug}
      </URL>
    </Text>
    <Text variant="body">{node.excerpt}</Text>
    <Divider variant="dashed" />
    <Text variant="caption">{node.frontmatter.date}</Text>
  </Container>
);

export default PostSummaryCard;
