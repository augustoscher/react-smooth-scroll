import React from "react";
import styled from 'styled-components';


// "img d-flex align-self-stretch align-items-center";
const ImgThumnail = styled.img`
  width: 25%;
  height: 25%;  
`;

const About = () => {
  return (
    <div class="container">
      <div class="row d-flex no-gutters">
        <div class="col-md-6 col-lg-6 d-flex">
          <div class="img-about img d-flex align-items-stretch">
            <div class="overlay"></div>
            <ImgThumnail src="https://avatars3.githubusercontent.com/u/9935397?s=460&v=4" alt="Augusto Scher" className="img-thumbnail" />
          </div>
        </div>
        <div class="col-md-6 col-lg-6 pl-md-5 py-5">
          <div class="row justify-content-start pb-3">
            <div class="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
              <h1 class="big">Sobre</h1>
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
              <p>Lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
