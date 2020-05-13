import React from "react";
// import styled from "styled-components";

import componentRelations from "../componentsRelations";


const SectionCurriculum = ({ id, colored }) => {
  const Component = componentRelations[id];
  return (
    <div className={"section" + (colored ? " section-colored" : "")}>
      <div id={id}>
        <Component />
      </div>
    </div>
  );
};

export default SectionCurriculum;
