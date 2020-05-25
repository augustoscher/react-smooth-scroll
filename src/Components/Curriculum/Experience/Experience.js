import React from "react";
import TitleItem from "../Base/TitleItem/TitleItem";
import ExperienceItem from "./ExperienceItem/ExperienceItem";

const Experience = ({ title, experiences }) => {
  return (
    <>
      <TitleItem title={title} />
      {experiences.map((exp, id) => (
        <ExperienceItem key={id} experience={exp} />
      ))}
    </>
  );
};

export default Experience;
