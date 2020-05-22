import React from "react";
// import styled from "styled-components";
import TitleItem from "../TitleItem/TitleItem";

const Education = ({ title, graduations }) => {
  return (
    <>
      <TitleItem title={title} />
      {graduations.map((grad, id) => (
        <p key={id}>{grad.name}</p>
      ))}
    </>
  );
};

export default Education;
