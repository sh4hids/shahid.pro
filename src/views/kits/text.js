import React from 'react';
import styled from 'styled-components';
import { color, textAlign } from 'styled-system';
import { isDefined } from '../../utils/object-utils';

const dark = 'rgba(0, 0, 0, .8)';

const H1 = styled.h1`
  color: ${({ theme }) =>
    isDefined(theme, 'colors.dark') ? theme.colors.dark : dark};
  font-size: ${({ theme }) =>
    isDefined(theme, 'typography.h1')
      ? theme.typography.h1.fontSize
      : '3.052em'};
  line-height: ${({ theme }) =>
    isDefined(theme, 'typography.h1') ? theme.typography.h1.lineHeight : 1.15};
  font-weight: ${({ theme }) =>
    isDefined(theme, 'typography.h1') ? theme.typography.h1.fontWeight : 700};
  ${color};
  ${textAlign};
`;
const H2 = styled.h2`
  color: ${({ theme }) =>
    isDefined(theme, 'colors.dark') ? theme.colors.dark : dark};
  font-size: ${({ theme }) =>
    isDefined(theme, 'typography.h2')
      ? theme.typography.h2.fontSize
      : '2.441em'};
  line-height: ${({ theme }) =>
    isDefined(theme, 'typography.h2') ? theme.typography.h2.lineHeight : 1.15};
  font-weight: ${({ theme }) =>
    isDefined(theme, 'typography.h2') ? theme.typography.h2.fontWeight : 700};
  ${color};
  ${textAlign};
`;
const H3 = styled.h3`
  color: ${({ theme }) =>
    isDefined(theme, 'colors.dark') ? theme.colors.dark : dark};
  font-size: ${({ theme }) =>
    isDefined(theme, 'typography.h3')
      ? theme.typography.h3.fontSize
      : '1.953em'};
  line-height: ${({ theme }) =>
    isDefined(theme, 'typography.h3') ? theme.typography.h3.lineHeight : 1.15};
  font-weight: ${({ theme }) =>
    isDefined(theme, 'typography.h3') ? theme.typography.h3.fontWeight : 700};
  ${color};
  ${textAlign};
`;
const H4 = styled.h4`
  color: ${({ theme }) =>
    isDefined(theme, 'colors.dark') ? theme.colors.dark : dark};
  font-size: ${({ theme }) =>
    isDefined(theme, 'typography.h4')
      ? theme.typography.h4.fontSize
      : '1.563em'};
  line-height: ${({ theme }) =>
    isDefined(theme, 'typography.h4') ? theme.typography.h4.lineHeight : 1.15};
  font-weight: ${({ theme }) =>
    isDefined(theme, 'typography.h4') ? theme.typography.h4.fontWeight : 700};
  ${color};
  ${textAlign};
`;
const H5 = styled.h5`
  color: ${({ theme }) =>
    isDefined(theme, 'colors.dark') ? theme.colors.dark : dark};
  font-size: ${({ theme }) =>
    isDefined(theme, 'typography.h5')
      ? theme.typography.h5.fontSize
      : '1.25em'};
  line-height: ${({ theme }) =>
    isDefined(theme, 'typography.h5') ? theme.typography.h5.lineHeight : 1.15};
  font-weight: ${({ theme }) =>
    isDefined(theme, 'typography.h5') ? theme.typography.h5.fontWeight : 700};
  ${color};
  ${textAlign};
`;

const H6 = styled.h6`
  color: ${({ theme }) =>
    isDefined(theme, 'colors.dark') ? theme.colors.dark : dark};
  font-size: ${({ theme }) =>
    isDefined(theme, 'typography.h6') ? theme.typography.h6.fontSize : '1em'};
  line-height: ${({ theme }) =>
    isDefined(theme, 'typography.h6') ? theme.typography.h6.lineHeight : 1.15};
  font-weight: ${({ theme }) =>
    isDefined(theme, 'typography.h6') ? theme.typography.h6.fontWeight : 700};
  ${color};
  ${textAlign};
`;

const P = styled.p`
  color: ${({ theme }) =>
    isDefined(theme, 'colors.dark') ? theme.colors.dark : dark};
  font-size: ${({ theme }) =>
    isDefined(theme, 'typography.body')
      ? theme.typography.body.fontSize
      : '1em'};
  line-height: ${({ theme }) =>
    isDefined(theme, 'typography.body')
      ? theme.typography.body.lineHeight
      : 1.45};
  font-weight: ${({ theme }) =>
    isDefined(theme, 'typography.body')
      ? theme.typography.body.fontWeight
      : 400};
  ${color};
  ${textAlign};
`;

const Caption = styled.p`
  color: ${({ theme }) =>
    isDefined(theme, 'colors.dark') ? theme.colors.dark : dark};
  font-size: ${({ theme }) =>
    isDefined(theme, 'typography.caption')
      ? theme.typography.caption.fontSize
      : '0.8em'};
  line-height: ${({ theme }) =>
    isDefined(theme, 'typography.caption')
      ? theme.typography.caption.lineHeight
      : 1.45};
  font-weight: ${({ theme }) =>
    isDefined(theme, 'typography.caption')
      ? theme.typography.caption.fontWeight
      : 400};
  ${color};
  ${textAlign};
`;

const RawHTML = styled.div`
  p {
    line-height: 1.45;
    font-size: 1em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: 1.15;
  }

  h1 {
    font-size: 3.052em;
  }
  h2 {
    font-size: 2.441em;
  }
  h3 {
    font-size: 1.953em;
  }
  h4 {
    font-size: 1.563em;
  }
  h5 {
    font-size: 1.25em;
  }
  h6 {
    font-size: 1em;
  }
`;

const Text = ({ variant, children, html, ...props }) => {
  switch (variant) {
    case 'h1':
      return <H1 {...props}>{children}</H1>;
    case 'h2':
      return <H2 {...props}>{children}</H2>;
    case 'h3':
      return <H3 {...props}>{children}</H3>;
    case 'h4':
      return <H4 {...props}>{children}</H4>;
    case 'h5':
      return <H5 {...props}>{children}</H5>;
    case 'h6':
      return <H6 {...props}>{children}</H6>;
    case 'caption':
      return <Caption {...props}>{children}</Caption>;
    case 'raw':
      return <RawHTML dangerouslySetInnerHTML={{ __html: html }} />;
    default:
      return <P {...props}>{children}</P>;
  }
};

export default Text;
