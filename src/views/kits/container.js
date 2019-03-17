import styled, { css } from 'styled-components';
import { color, width, height, space } from 'styled-system';

const Container = styled.div`
  ${({ main }) =>
    main &&
    css`
      max-width: 740px;
      margin: 0 auto;
    `};
  background-color: ${({ theme }) => theme.colors.light};
  ${color};
  ${width};
  ${height};
  ${space};
`;

export default Container;
