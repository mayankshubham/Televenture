import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 0 auto auto;
  width: 100%;
  flex-grow: 1;
  position: relative;
  overflow: hidden;
  top: 82px;
`;

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
