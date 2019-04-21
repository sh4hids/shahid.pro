import styled from 'styled-components';

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lighter};
`;

export default Footer;
