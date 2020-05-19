import React from "react";
// import styled from "styled-components";
import InterestCard from './InterestCard/InterestCard';

// const Content = styled.div`
  // padding: 30px;
// `;

const Interest = ({ title }) => (
  <>
    <h1>{title}</h1>
    {/* <p>Tenho interesse, principalmente em stacks como:</p> */}
    <div className="row mb-2">
      <InterestCard title="Node.js" />
      <InterestCard title="Golang" />
      <InterestCard title="Python" />
      <InterestCard title="React.js" />
      <InterestCard title="Data Science" />
      <InterestCard title="Fullstack" />
    </div>
  </>
);

export default Interest;
