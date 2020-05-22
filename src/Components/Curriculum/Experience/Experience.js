import React from "react";
// import styled from "styled-components";
import TitleItem from "../TitleItem/TitleItem";

const Experience = ({ title, experiences }) => {
  return (
    <>
      <TitleItem title={title} />
      {experiences.map((grad, id) => (
        <p key={id}>{grad.name}</p>
      ))}
    </>
  );
};

export default Experience;
