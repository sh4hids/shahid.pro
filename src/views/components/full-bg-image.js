import React from 'react';
import styled from 'styled-components';
import { height, space } from 'styled-system';

const FullBackgroungImage = styled.div`
  background-image: url(${({ imgSrc }) => imgSrc});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${({ theme }) => theme.colors.light};
  ${height};
  ${space};
`;

export default FullBackgroungImage;
