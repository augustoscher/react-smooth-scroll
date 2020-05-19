import React from "react";
import styled from "styled-components";
import InterestCard from './InterestCard/InterestCard';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: .5rem!important;
  margin-right: 5px!important;
`;

const Title = styled.h1`
  color: var(--primary);
`;

const Interest = ({ title }) => (
  <>
    <Title>{title}</Title>
    <p>Tenho interesse, principalmente em stacks como:</p>
    <Content className="row mb-2">
      <InterestCard title="Node.js" />
      <InterestCard title="Golang" />
      <InterestCard title="Python" />
      <InterestCard title="React.js" />
      <InterestCard title="Data Science" />
      <InterestCard title="Fullstack" />
    </Content>
  </>
);

export default Interest;
