import React from 'react';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
  background-color: #fff;
  padding: 12px;
  font-weight: bold;
  height: 50px;
`;

export const Header = () => {
  return <StyledHeader>Buble Playground</StyledHeader>;
};
