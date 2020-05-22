import React from 'react';
import styled from "styled-components";
import icon from "../../../../Assets/Icons/icon-education.svg";

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
        <span className="date">{when}</span>
        <h2>{name}</h2>
        <span className="position">{location}</span>
        <p>Falar um pouco sobre o curso.</p>
      </div>
    </Content>
  );
}

export default EducationItem;
