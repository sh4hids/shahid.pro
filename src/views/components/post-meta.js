import React from 'react';
import styled from 'styled-components';
import { Text } from '../kits';

const PostMetaContainer = styled.div`
  margin-top: 16px;

  p {
    display: inline;
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }
  }

  .meta-icon {
    margin-right: 8px;
  }
`;

const PostMeta = ({ post, readingTime }) => (
  <PostMetaContainer>
    <span className="meta-icon">🗓</span>
    <Text variant="caption">{post.frontmatter.date}</Text>{' '}
    <span className="meta-icon">☕️</span>
    <Text variant="caption">{readingTime.text}</Text>
  </PostMetaContainer>
);

export default PostMeta;
