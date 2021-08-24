import React from 'react';
import styled from 'styled-components';
import { Image } from '@sh4hids/gatsby-theme-open-sourcerer/src/components';

import logo from '../../../assets/images/logo.svg';

const BrandLogoWrapper = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text1};
  font-size: ${({ theme }) => theme.fontSizes.h5}px;
  position: relative;
  top: -2px;

  img {
    width: 30px;
    height: auto;
    position: relative;
    top: 6px;
    left: -4px;
  }

  .brand-text-left,
  .brand-text-right {
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }

  .brand-text-left {
    font-size: 1.3rem;
    position: relative;
    top: -2px;
  }

  .brand-text-right {
    position: relative;
    left: -8px;
  }
`;

const BrandLogo = () => {
  return (
    <BrandLogoWrapper href="/">
      <span className="brand-text-left">@</span>
      <Image src={logo} alt="s" />
      <span className="brand-text-right">h4hids</span>
    </BrandLogoWrapper>
  );
};

export default BrandLogo;
