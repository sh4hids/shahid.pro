import styled, { css } from 'styled-components';
import { color, width, height, space } from 'styled-system';

const Container = styled.div`
  height: auto;

  &.main-container {
    padding-bottom: 228px;
  }

  @media only screen and (max-width: 576px) {
    &.main-container {
      padding-bottom: 364px;
    }
  }

  ${({ main }) =>
    main &&
    css`
      max-width: 740px;
      margin: 0 auto;
      padding: 0 16px;

      @media only screen and (max-width: 576px) {
        padding: 0;
        margin-top: 60px;

        &.footer-container {
          margin-top: 0;
        }
      }
    `};

  ${({ card }) =>
    card &&
    css`
      padding: 24px;
      background-color: ${({ theme }) => theme.colors.lighter};
      border-radius: 4px;
      border: 1px solid ${({ theme }) => theme.colors.light};

      @media only screen and (max-width: 576px) {
        border-radius: 0;
      }
    `};

  ${({ align }) => {
    switch (align) {
      case 'verticalSpace':
        return css`
          display: flex;
          flex-direction: column;
          align-content: space-between;
          justify-content: space-between;
        `;
      default:
        return '';
    }
  }}

  ${color};
  ${width};
  ${height};
  ${space};
`;

export default Container;
