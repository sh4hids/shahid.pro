import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { color, space } from 'styled-system';

const DefaultLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary || inherit};
  ${color};
  ${space};
`;

const GatsbyLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary || inherit};
  ${color};
  ${space};
`;

const URL = ({ variant, to, children, ...props }) => {
  switch (variant) {
    case 'gatsby':
      return (
        <GatsbyLink to={to} {...props}>
          {children}
        </GatsbyLink>
      );
    default:
      return (
        <DefaultLink href={to} {...props}>
          {children}
        </DefaultLink>
      );
  }
};

export default URL;
