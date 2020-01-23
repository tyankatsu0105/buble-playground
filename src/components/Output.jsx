import React from 'react';
import styled from '@emotion/styled';
import * as buble from 'buble';

const Div = styled.div`
  height: 100%;
  padding: 12px;
  position: relative;

  &:before {
    position: absolute;
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background-color: #242424;
    left: 0;
    top: 0;
  }
`;

const getTransformedCode = (value, setErrorMessage) => {
  try {
    const { code } = buble.transform(value);
    setErrorMessage('');
    return code;
  } catch (error) {
    setErrorMessage(error.message);
    return value;
  }
};

export const Output = (props) => (
  <Div>
    <pre>
      <code>{getTransformedCode(props.value, props.setErrorMessage)}</code>
    </pre>
  </Div>
);
