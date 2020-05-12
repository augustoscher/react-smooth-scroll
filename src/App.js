import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import "./App.css";
import './i18n';
import styled from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section/Section";
import SECTION_TYPES from "./Constants/SectionType";

const BodyContent = styled.div`
  padding-top: 100px;
`;

const Footer = styled.footer`
  font-size: 12px;
  background: #00010f;
  padding: 2em 0 1em;
  padding: 15px 10px;
  min-height: 70px;
  z-index: 0;
`;

function App() {
  return (
    <div className="App">
      <Navbar />
      <BodyContent>
        <Section colored={false} id={SECTION_TYPES.HELLO} />
        <Section colored={false} id={SECTION_TYPES.ABOUT} />
        <Section colored={true} id={SECTION_TYPES.CURRICULUM} />
        <Section colored={false} id={SECTION_TYPES.CONTACT} />
      </BodyContent>
      <Footer>
        Augusto Scher
      </Footer>
    </div>
  );
}

export default App;
