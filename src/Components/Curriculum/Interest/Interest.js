import React from "react";
import styled from "styled-components";
import InterestCard from './InterestCard/InterestCard';
import TitleItem from '../TitleItem/TitleItem';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: .5rem!important;
  margin-right: 5px!important;
`;

const Interest = ({ title, message }) => (
  <>
    <TitleItem title={title} />
    <p>{message}</p>
    <Content className="row mb-2">
      <InterestCard title="Node.js" />
      <InterestCard title="Golang" />
      <InterestCard title="Python" />
      <InterestCard title="React.js" />
      <InterestCard title="Data Science" />
      <InterestCard title="IoT" />
      <InterestCard title="Fullstack" />
      <InterestCard title="Serverless" />
    </Content>
  </>
);

export default Interest;
