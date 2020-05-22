import React from "react";
// import styled from "styled-components";
import TitleItem from "../TitleItem/TitleItem";

const Education = ({ title, professionalData }) => {
  return (
    <>
      <TitleItem title={title} />
      {professionalData.map((prof, idx) => (
        <div id={idx}>
          {prof.graduations.map((grad, id) => (
            <p id={id}>{grad.name}</p>
          ))}
        </div>
      ))}
    </>
  );
};

export default Education;
