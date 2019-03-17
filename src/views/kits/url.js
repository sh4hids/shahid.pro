import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';

const DefaultLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary || inherit};
  ${space};
`;

const GatsbyLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary || inherit};
  ${space};
`;

const URL = ({ variant, to, children }) => {
  switch (variant) {
    case 'gatsby':
      return <GatsbyLink to={to}>{children}</GatsbyLink>;
    default:
      return <DefaultLink href={to}>{children}</DefaultLink>;
  }
};

export default URL;
