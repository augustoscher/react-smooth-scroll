import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section/Section";
import SECTION_TYPES from "./Constants/SectionType";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section colored={false} id={SECTION_TYPES.HELLO} />
      <Section colored={false} id={SECTION_TYPES.ABOUT} />
      <Section colored={true} id={SECTION_TYPES.CURRICULUM} />
      <Section colored={false} id={SECTION_TYPES.CONTACT} />
    </div>
  );
}

export default App;
