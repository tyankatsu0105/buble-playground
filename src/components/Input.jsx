import React, { useCallback } from 'react';
import styled from '@emotion/styled';

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: inherit;
  padding: 12px;
  box-sizing: border-box;
  resize: none;
`;

export const Input = (props) => {
  const handleChangeValue = useCallback((e) => {
    const { value } = e.target;
    props.setValue(value);
  }, []);
  return <Textarea onChange={handleChangeValue}>{props.value}</Textarea>;
};
