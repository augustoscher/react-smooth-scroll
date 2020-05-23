import React from 'react';
import styled from "styled-components";
import icon from "../../../../Assets/Icons/icon-education.svg";
import Name from '../../Name/Name';
import When from '../../When/When';
import Where from '../../Where/Where';

const DivImg = styled.div`
  display: flex !important;
  width: 60px;
  height: 60px;
  background: var(--tertiary);
  margin-bottom: 10px;
  border-radius: 50%;

  &:hover {
    background: var(--dark);
  }
`;

const Img = styled.img`
  color: #000aff;
  width: 24px;
  vertical-align: middle;
  border-style: none;
`;

const Content = styled.div`
  margin-bottom: 30px;
`;

const EducationItem = ({ education }) => {
  const { name, location, when } = education;
  return (
    <Content className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
      <DivImg className="icon d-flex align-items-center justify-content-center">
        <Img src={icon} />
      </DivImg>
      <div className="text pl-3">
        <When date={when} />
        <Name text={name} />
        <Where location={location} />
        <p>Falar um pouco sobre o curso.</p>
      </div>
    </Content>
  );
}

export default EducationItem;
