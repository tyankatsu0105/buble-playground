import React from 'react';
import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  background-color: #fff;
  padding: 12px;
  font-weight: bold;
  height: 50px;
  color: red;
`;

export const Footer = (props) => {
  return <StyledFooter>{props.errorMessage}</StyledFooter>;
};
