import React from "react";
import TitleItem from "../TitleItem/TitleItem";
import EducationItem from './EducationItem/EducationItem';

const Education = ({ title, graduations }) => {
  return (
    <>
      <TitleItem title={title} />
      {graduations.map((grad, id) => (
        <EducationItem key={id} education={grad} />
      ))}
    </>
  );
};

export default Education;
