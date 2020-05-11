import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 100px;
`;

const Title = ({ title }) => (
  <Content>
    <h1>{title}</h1>
  </Content>
);

export default Title;
