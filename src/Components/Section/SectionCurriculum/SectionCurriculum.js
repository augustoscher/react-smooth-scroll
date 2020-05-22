import React from "react";
import styled from "styled-components";
import componentRelations from "../componentsRelations";

const Content = styled.div`
  margin: 10px 0px 10px 10px;
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
