import React from 'react';
import styled, { withTheme } from 'styled-components';
import { color } from 'styled-system';

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  line-height: ${({ theme }) => theme.typography.h1.lineHeight};
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  ${color};
`;
const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  line-height: ${({ theme }) => theme.typography.h2.lineHeight};
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  ${color};
`;
const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  line-height: ${({ theme }) => theme.typography.h3.lineHeight};
  font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
  ${color};
`;
const H4 = styled.h4`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  line-height: ${({ theme }) => theme.typography.h4.lineHeight};
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
  ${color};
`;
const H5 = styled.h5`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  line-height: ${({ theme }) => theme.typography.h5.lineHeight};
  font-weight: ${({ theme }) => theme.typography.h5.fontWeight};
  ${color};
`;

const H6 = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  line-height: ${({ theme }) => theme.typography.h6.lineHeight};
  font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
  ${color};
`;

const P = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  line-height: ${({ theme }) => theme.typography.body.lineHeight};
  font-weight: ${({ theme }) => theme.typography.body.fontWeight};
  ${color};
`;

const Caption = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  line-height: ${({ theme }) => theme.typography.caption.lineHeight};
  font-weight: ${({ theme }) => theme.typography.caption.fontWeight};
  ${color};
`;

const Text = ({ variant, color, theme, children }) => {
  switch (variant) {
    case 'h1':
      return <H1 color={color}>{children}</H1>;
    case 'h2':
      return <H2 color={color}>{children}</H2>;
    case 'h3':
      return <H3 color={color}>{children}</H3>;
    case 'h4':
      return <H4 color={color}>{children}</H4>;
    case 'h5':
      return <H5 color={color}>{children}</H5>;
    case 'h6':
      return <H6 color={color}>{children}</H6>;
    case 'caption':
      return <Caption color={color}>{children}</Caption>;
    default:
      return (
        <P color={color} theme={theme}>
          {children}
        </P>
      );
  }
};

export default withTheme(Text);
