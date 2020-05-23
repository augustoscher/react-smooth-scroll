import React from 'react';
import styled from 'styled-components';

const Content = styled.h2`
  color: var(--darken);
  font-weight: 700;
`;

const Name = ({ text }) => <Content>{text}</Content>;

export default Name;
