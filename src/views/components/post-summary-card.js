import React from 'react';
import { Container, Text, URL } from '../kits';

const PostSummaryCard = ({ node }) => (
  <Container card>
    <Text variant="h4">
      <URL variant="gatsby" to={node.fields.slug}>
        {node.frontmatter.title || node.fields.slug}
      </URL>
    </Text>
    <Text variant="body">{node.excerpt}</Text>
    <Text variant="caption">{node.frontmatter.date}</Text>
  </Container>
);

export default PostSummaryCard;
