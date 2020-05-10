import React from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';

// "img d-flex align-self-stretch align-items-center";
const ImgThumnail = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://avatars3.githubusercontent.com/u/9935397?s=460&v=4");
  background-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const About = () => {
  const { t } = useTranslation(['about']);

  return (
    <div className="row d-flex no-gutters">
      <div className="col-md-6 col-lg-6 d-flex">
        {/* <div className="img-about img d-flex align-items-stretch"> */}
          <div className="overlay"></div>
          <ImgThumnail
            alt="Augusto Scher"
          />
        {/* </div> */}
      </div>
      <div className="col-md-6 col-lg-6 pl-md-5 py-5">
        <div className="row justify-content-start pb-3">
          <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
            <h1 className="big">{t('about:title')}</h1>
            <p>{t('about:iam')} Augusto Sulzbacher Scher,</p>
            <p>
              {t('about:job_description')}
            </p>
            <p>
              {t('about:like_description')}
            </p>
            <p>
              {t('about:interest_description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
