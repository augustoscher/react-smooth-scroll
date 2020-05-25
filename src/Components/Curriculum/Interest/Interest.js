import React from "react";
import styled from "styled-components";
import InterestCard from "./InterestCard/InterestCard";
import TitleItem from "../Base/TitleItem/TitleItem";

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem !important;
  margin-right: 5px !important;
`;

const interests = [
  "Node.js",
  "Golang",
  "Python",
  "React.js",
  "Data Science",
  "IoT",
  "Fullstack",
  "Serverless",
  "AWS Services"
];

const Interest = ({ title, message }) => (
  <>
    <TitleItem title={title} />
    <p>{message}</p>
    <Content className="row mb-2">
      {interests.map((interest, id) => <InterestCard key={id} title={interest} />)}
    </Content>
  </>
);

export default Interest;
