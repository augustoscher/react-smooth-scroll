import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import './App.css';
import styled from 'styled-components';
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section/Section";
import SECTION_TYPES from "./Constants/SectionType";

const BodyContent = styled.div`
  padding-top: 100px;
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
    </div>
  );
}

export default App;
