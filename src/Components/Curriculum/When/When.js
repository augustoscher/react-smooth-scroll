import React from 'react';
import styled from 'styled-components';

const Date = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: rgba(0,0,0,.6);
  color: var(--secondary);
`;

const When = ({ date }) => <Date>{date}</Date>;

export default When;
