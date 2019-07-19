import styled from 'styled-components';

const Divider = styled.div`
  margin: 0.5rem 0;
  height: 1px;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid rgba(219, 84, 97, 0.3);
  border-bottom-style: ${({ variant = 'solid' }) => variant};
`;

export default Divider;
