import React from 'react';
import styled from "styled-components";
import icon from "../../../../Assets/Icons/icon-education.svg";
import Name from '../../Base/Name/Name';
import When from '../../Base/When/When';
import Where from '../../Base/Where/Where';
import ImgContent from '../../Base/ImgContent/ImgContent';

const Content = styled.div`
  margin-bottom: 30px;
`;

const EducationItem = ({ education }) => {
  const { name, location, when } = education;
  return (
    <Content className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
      {/* <DivImg className="icon d-flex align-items-center justify-content-center">
        <Img src={icon} />
      </DivImg> */}
      <ImgContent icon={icon} />
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
