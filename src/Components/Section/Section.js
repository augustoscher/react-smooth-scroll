import React from 'react';
import styled from 'styled-components';
import './Section.css';

import componentRelations from './componentsRelations';

const SectionContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Section = ({ id, colored }) => {
  const Component = componentRelations[id];
  return (
    <div className={"section" + (colored ? " section-colored" : "")}>
      <SectionContent id={id}>
        <Component />
      </SectionContent>
    </div>
  );
};

export default Section;
