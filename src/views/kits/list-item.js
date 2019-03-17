import styled, { css } from 'styled-components';
import { space } from 'styled-system';

const ListItem = styled.li`
  margin: 0;
  padding: 0;
  ${({ display }) =>
    display === 'inline' &&
    css`
      display: inline;
    `};
  ${space};
`;

export default ListItem;
