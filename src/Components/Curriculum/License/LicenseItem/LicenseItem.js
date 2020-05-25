import React from 'react';
import styled from "styled-components";
import icon from "../../../../Assets/Icons/icon-certificate.svg";
import Name from '../../Base/Name/Name';
import When from '../../Base/When/When';
import Where from '../../Base/Where/Where';
import ImgContent from '../../Base/ImgContent/ImgContent';

const Content = styled.div`
  margin-bottom: 30px;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  margin-top: 10px;
`;

const A = styled.a`
  color: #000AFF;
`;

const LicenseItem = ({ license }) => {
  const { name, location, when, link, labelLink } = license;
  return (
    <Content className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
      <ImgContent icon={icon} />
      <div className="text pl-3">
        <When date={when} />
        <Name text={name} />
        <Where location={location} />
        <Text>
          <A href={link} target="_blank" without rel="noopener noreferrer">
            {labelLink}
          </A>
        </Text>
      </div>
    </Content>
  );
}

export default LicenseItem;
