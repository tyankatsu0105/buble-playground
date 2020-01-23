import React, { useState } from 'react';
import styled from '@emotion/styled';

import { Header } from './Header';
import { Input } from './Input';
import { Output } from './Output';
import { Footer } from './Footer';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ccc;
`;

const ItemWrap = styled.div`
  position: relative;
  width: calc(50%);
  height: calc(100vh - (50px + 50px));
`;

const Item = styled.div`
  padding-top: 40px;
  height: 100%;
`;

const SubHeading = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ccc;
  color: #333;
  z-index: 1;
  padding: 4px 12px;
`;

const Main = () => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <>
      <Header />
      <Container>
        <ItemWrap>
          <SubHeading>Input</SubHeading>
          <Item>
            <Input value={value} setValue={setValue} />
          </Item>
        </ItemWrap>
        <ItemWrap>
          <SubHeading>Output</SubHeading>
          <Item>
            <Output value={value} setErrorMessage={setErrorMessage} />
          </Item>
        </ItemWrap>
      </Container>
      <Footer errorMessage={errorMessage} />
    </>
  );
};

export default Main;
