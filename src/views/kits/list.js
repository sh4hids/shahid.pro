import React from 'react';
import styled from 'styled-components';

const UL = styled.ul`
  margin: 0;
  padding: 0;
`;

const OL = styled.ol`
  margin: 0;
  padding: 0;
`;

const List = ({ variant, ...props }) => {
  switch (variant) {
    case 'ordered':
      return <OL {...props} />;
    default:
      return <UL {...props} />;
  }
};

export default List;
