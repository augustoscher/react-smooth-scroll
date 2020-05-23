import React from 'react';
import styled from 'styled-components';

const Content = styled.h1`
  color: var(--primary);
  margin-bottom: 30px;
`;

const TitleItem = ({ title }) => <Content>{title}</Content>;

export default TitleItem;
