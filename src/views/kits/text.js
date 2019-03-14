import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { isDefined } from '../../utils/object-utils';

const dark = 'rgba(0, 0, 0, .8)';

const H1 = styled.h1`
  color: ${({ theme }) =>
    isDefined(theme, 'theme.colors.dark') ? theme.colors.dark : dark};
  font-size: ${({ theme }) =>
    isDefined(theme, 'theme.typography.h1')
      ? theme.typography.h1.fontSize
      : '3.052rem'};
  line-height: ${({ theme }) =>
    isDefined(theme, 'theme.typography.h1')
      ? theme.typography.h1.lineHeight
      : 1.15};
  font-weight: ${({ theme }) =>
    isDefined(theme, 'theme.typography.h1')
      ? theme.typography.h1.fontWeight
      : 700};
  ${color};
`;
const H2 = styled.h2`
  color: ${({ theme }) =>
    isDefined(theme, 'theme.colors.dark') ? theme.colors.dark : dark};
  font-size: ${({ theme }) =>
    isDefined(theme, 'theme.typography.h2')
      ? theme.typography.h2.fontSize
      : '2.441rem'};
  line-height: ${({ theme }) =>
    isDefined(theme, 'theme.typography.h2')
      ? theme.typography.h2.lineHeight
      : 1.15};
  font-weight: ${({ theme }) =>
    isDefined(theme, 'theme.typography.h2')
      ? theme.typography.h2.fontWeight
      : 700};
  ${color};
`;
const H3 = styled.h3`
  color: ${({ theme }) =>
    isDefined(theme, 'theme.colors.dark') ? theme.colors.dark : dark};
  font-size: ${({ theme }) =>
    isDefined(theme, 'theme.typography.h3')
      ? theme.typography.h3.fontSize
      : '1.953rem'};
  line-height: ${({ theme }) =>
    isDefined(theme, 'theme.typography.h3')
      ? theme.typography.h3.lineHeight
      : 1.15};
  font-weight: ${({ theme }) =>
    isDefined(theme, 'theme.typography.h3')
      ? theme.typography.h3.fontWeight
      : 700};
  ${color};
`;
const H4 = styled.h4`
  color: ${({ theme }) =>
    isDefined(theme, 'theme.colors.dark') ? theme.colors.dark : dark};
  font-size: ${({ theme }) =>
    isDefined(theme, 'theme.typography.h4')
      ? theme.typography.h4.fontSize
      : '1.563rem'};
  line-height: ${({ theme }) =>
    isDefined(theme, 'theme.typography.h4')
      ? theme.typography.h4.lineHeight
      : 1.15};
  font-weight: ${({ theme }) =>
    isDefined(theme, 'theme.typography.h4')
      ? theme.typography.h4.fontWeight
      : 700};
  ${color};
`;
const H5 = styled.h5`
  color: ${({ theme }) =>
    isDefined(theme, 'theme.colors.dark') ? theme.colors.dark : dark};
  font-size: ${({ theme }) =>
    isDefined(theme, 'theme.typography.h5')
      ? theme.typography.h5.fontSize
      : '1.25rem'};
  line-height: ${({ theme }) =>
    isDefined(theme, 'theme.typography.h5')
      ? theme.typography.h5.lineHeight
      : 1.15};
  font-weight: ${({ theme }) =>
    isDefined(theme, 'theme.typography.h5')
      ? theme.typography.h5.fontWeight
      : 700};
  ${color};
`;

const H6 = styled.h6`
  color: ${({ theme }) =>
    isDefined(theme, 'theme.colors.dark') ? theme.colors.dark : dark};
  font-size: ${({ theme }) =>
    isDefined(theme, 'theme.typography.h6')
      ? theme.typography.h6.fontSize
      : '1rem'};
  line-height: ${({ theme }) =>
    isDefined(theme, 'theme.typography.h6')
      ? theme.typography.h6.lineHeight
      : 1.15};
  font-weight: ${({ theme }) =>
    isDefined(theme, 'theme.typography.h6')
      ? theme.typography.h6.fontWeight
      : 700};
  ${color};
`;

const P = styled.p`
  color: ${({ theme }) =>
    isDefined(theme, 'theme.colors.dark') ? theme.colors.dark : dark};
  font-size: ${({ theme }) =>
    isDefined(theme, 'theme.typography.body')
      ? theme.typography.body.fontSize
      : '1rem'};
  line-height: ${({ theme }) =>
    isDefined(theme, 'theme.typography.body')
      ? theme.typography.body.lineHeight
      : 1.45};
  font-weight: ${({ theme }) =>
    isDefined(theme, 'theme.typography.body')
      ? theme.typography.body.fontWeight
      : 400};
  ${color};
`;

const Caption = styled.p`
  color: ${({ theme }) =>
    isDefined(theme, 'theme.colors.dark') ? theme.colors.dark : dark};
  font-size: ${({ theme }) =>
    isDefined(theme, 'theme.typography.caption')
      ? theme.typography.caption.fontSize
      : '0.8rem'};
  line-height: ${({ theme }) =>
    isDefined(theme, 'theme.typography.caption')
      ? theme.typography.caption.lineHeight
      : 1.45};
  font-weight: ${({ theme }) =>
    isDefined(theme, 'theme.typography.caption')
      ? theme.typography.caption.fontWeight
      : 400};
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

export default Text;
