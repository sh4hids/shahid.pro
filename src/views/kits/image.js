import styled from 'styled-components';
import { width, height, top, space } from 'styled-system';

const Image = styled.img`
  width: 100%;
  height: auto;
  position: relative;
  ${width};
  ${height};
  ${top};
  ${space};
`;

export default Image;
