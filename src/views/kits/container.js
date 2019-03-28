import styled, { css } from 'styled-components';
import { color, width, height, space } from 'styled-system';

const Container = styled.div`
  height: 100%;
  ${({ main }) =>
    main &&
    css`
      max-width: 740px;
      margin: 0 auto;
      padding: 0 16px;
    `};
  ${({ card }) =>
    card &&
    css`
      padding: 24px;
      background-color: ${({ theme }) => theme.colors.lighter};
      margin-bottom: 16px;
      border-radius: 4px;
      border: 1px solid ${({ theme }) => theme.colors.light};
    `};

  ${color};
  ${width};
  ${height};
  ${space};
`;

export default Container;
