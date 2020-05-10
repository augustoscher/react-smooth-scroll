import React from 'react';
import styled from 'styled-components';
import './Section.css';
import SECTION_TYPES from '../../Constants/SectionType';

import Hello from '../Hello/Hello';
import About from '../About/About';
import Curriculum from '../Curriculum/Curriculum';
import Contact from '../Contact/Contact'

const componentRelations = {
  [SECTION_TYPES.HELLO]: Hello,
  [SECTION_TYPES.ABOUT]: About,
  [SECTION_TYPES.CURRICULUM]: Curriculum,
  [SECTION_TYPES.CONTACT]: Contact,
};

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
