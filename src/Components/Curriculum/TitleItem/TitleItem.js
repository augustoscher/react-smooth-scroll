import React from 'react';
import styled from 'styled-components';

const Content = styled.h1`
  color: var(--primary);
`;

const TitleItem = ({ title }) => <Content>{title}</Content>;

export default TitleItem;
