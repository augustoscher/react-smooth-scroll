import React from "react";
import styled from "styled-components";
import img from '../../Assets/Images/bg_1.jpg';

const Content = styled.div`
  height: 400px;
  color: white;
  margin: 10px;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const Overlay = styled.div`
  background: #9194af;
  opacity: 0.7;
  height: 100%
`;

const CvDownload = () => (
  <Content className="ftco-hireme img">
    <Overlay>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 ftco-animate text-center fadeInUp ftco-animated">
            <h2 style={{ color: 'white', opacity: 'none', marginTop: 20 }}>Download CV</h2>
            <p>Quer ter mais informações?</p>
            {/* <p className="mb-0">
              <a href="#" className="btn btn-primary btn-outline-primary py-3 px-5">
                Baixar
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </Overlay>
  </Content>
);

export default CvDownload;
