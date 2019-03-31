import React from 'react';
import styled from 'styled-components';
import { URL } from '../kits';

const PrevNextContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

const PrevNext = ({ previous, next }) => (
  <PrevNextContainer>
    <li>
      {previous && (
        <URL to={previous.fields.slug} rel="prev">
          ← {previous.frontmatter.title}
        </URL>
      )}
    </li>
    <li>
      {next && (
        <URL to={next.fields.slug} rel="next">
          {next.frontmatter.title} →
        </URL>
      )}
    </li>
  </PrevNextContainer>
);

export default PrevNext;
