import React from "react";
// import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import Icon from "../../Assets/Icons/icon-github.svg";

import Title from './Title/Title';


// const ImgDiv = styled.div`
//   width: 60px;
//   height: 60px;
//   background: #000aff;
//   background-image: initial;
//   background-position-x: initial;
//   background-position-y: initial;
//   background-size: initial;
//   background-repeat-x: initial;
//   background-repeat-y: initial;
//   background-attachment: initial;
//   background-origin: initial;
//   background-clip: initial;
//   background-color: rgb(0, 10, 255);
//   margin: 0 auto;
//   margin-bottom: 10px;
//   border-radius: 50%;
//   align-items: center!important;
//   justify-content: center!important;
//   display: flex!important;
//   text-align: center!important;
// `;

const Contact = () => {
  const { t } = useTranslation(['contact']);

  return (
    <>
      <Title title={t('contact:title')} />
      <div className="row d-flex contact-info mb-5">
        <div className="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated">
          <div className="align-self-stretch box text-center p-4 shadow">
            <div className="icon d-flex align-items-center justify-content-center">
              <a
                href="https://github.com/augustoscher"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={Icon} alt="github" />
              </a>
            </div>
            <div>
              <h3 className="mb-0">
                <a
                  href="https://github.com/augustoscher"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  @augustoscher
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
