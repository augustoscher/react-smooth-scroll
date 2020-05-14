import React from "react";
import styled from "styled-components";

import componentRelations from "../componentsRelations";

const Content = styled.div`
  // max-width: 1000px;
  margin: 10px;
  // padding: 30px 20px;
`;

const SectionCurriculum = ({ id, colored }) => {
  const Component = componentRelations[id];
  return (
    <div className={"section" + (colored ? " section-colored" : "")}>
      <Content id={id}>
        <Component />
      </Content>
    </div>
  );
};

export default SectionCurriculum;
