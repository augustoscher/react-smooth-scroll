import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import "./App.css";
import './i18n';
import styled from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section/Section";
import SectionCurriculum from './Components/Section/SectionCurriculum/SectionCurriculum';
import SECTION_TYPES from "./Constants/SectionType";



const BodyContent = styled.div`
  padding-top: 100px;
`;

const Footer = styled.footer`
  font-size: 16px;
  background: #00010f;
  padding: 2em 0 1em;
  padding: 15px 10px;
  min-height: 70px;
  z-index: 0;
`;

const Download = styled.div`
  height: 200px;
  background: #9194AF;
  margin: 10px;
`;

function App() {
  return (
    <div className="App">
      <Navbar />
      <BodyContent>
        <Section colored={false} id={SECTION_TYPES.HELLO} />
        <Section colored={false} id={SECTION_TYPES.ABOUT} />
        <SectionCurriculum colored={false} id={SECTION_TYPES.CURRICULUM}/>
        <Download>
          Download
        </Download>
        <Section colored={false} id={SECTION_TYPES.CONTACT} />
      </BodyContent>
      <Footer>
        Augusto Scher
      </Footer>
    </div>
  );
}

export default App;
