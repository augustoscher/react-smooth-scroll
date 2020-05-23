import React from 'react';
import styled from 'styled-components';

const Content = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: var(--darken);
  margin-bottom: 1rem;
`;

const Where = ({ location }) => <Content>{location}</Content>;

export default Where;
