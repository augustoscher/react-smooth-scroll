import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import "./App.css";
import './i18n';
import styled from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section/Section";
import SectionCurriculum from './Components/Section/SectionCurriculum/SectionCurriculum';
import CvDownload from './Components/CvDownload/CvDownload';
import SECTION_TYPES from "./Constants/SectionType";

const BodyContent = styled.div`
  padding-top: 100px;
`;

const Footer = styled.footer`
  font-size: 16px;
  background: #00010f;
  padding-top: 20px;
  min-height: 70px;
  z-index: 0;
  text-align: center; 
`;

function App() {
  return (
    <div className="App">
      <Navbar />
      <BodyContent>
        <Section colored={false} id={SECTION_TYPES.HELLO} />
        <Section colored={false} id={SECTION_TYPES.ABOUT} />
        <SectionCurriculum colored={false} id={SECTION_TYPES.CURRICULUM}/>
        <CvDownload />
        <Section colored={false} id={SECTION_TYPES.CONTACT} />
      </BodyContent>
      <Footer>
        <p>Copyright © 2020 by Augusto Scher</p>
      </Footer>
    </div>
  );
}

export default App;
