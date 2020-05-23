import React from 'react';
import styled from "styled-components";
import icon from "../../../../Assets/Icons/icon-experience.svg";
import Name from '../../Base/Name/Name';
import When from '../../Base/When/When';
import Where from '../../Base/Where/Where';
import ImgContent from '../../Base/ImgContent/ImgContent';

const Content = styled.div`
  margin-bottom: 30px;
`;

const ExperienceItem = ({ experience }) => {
  const { name, location, when } = experience;
  return (
    <Content className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
      <ImgContent icon={icon} />
      <div className="text pl-3">
        <When date={when} />
        <Name text={name} />
        <Where location={location} />
        <p>Falar um pouco da experiencia.</p>
      </div>
    </Content>
  );
}

export default ExperienceItem;
