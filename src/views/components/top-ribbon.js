import React from 'react';
import styled from 'styled-components';
import { Container, Text } from '../kits';

const RibbonContainer = styled(Container)`
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  h6 {
    margin: 0;
    line-height: 40px;
  }
`;

const TopRibbon = ({ message }) => (
  <RibbonContainer bg="warning">
    <Text variant="h6" color="darker" textAlign="center">
      {message}
    </Text>
  </RibbonContainer>
);

export default TopRibbon;
