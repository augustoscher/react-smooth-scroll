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
          {/* <div className="overlay"></div> */}
          <ImgThumnail
            alt="Augusto Scher"
          />
        {/* </div> */}
      </div>
      <div className="col-md-6 col-lg-6 pl-md-5 py-5">
        <div className="row justify-content-start pb-3">
          <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
            <h1 className="big">{t('about:title')}</h1>
            <p>Sou Augusto Sulzbacher Scher,</p>
            <p>
              Atualmente trabalho remotamente como Software Engineer na
              Resultados Digitais.
            </p>
            <p>
              Gosto de quase tudo relacionado a tecnologia, desenvolvimento e
              arquitetura de software.
            </p>
            <p>
              Também me chama atenção trabalhar com processamento de grandes
              quantidade de dados e com soluções que impactam grande número de
              pessoas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
