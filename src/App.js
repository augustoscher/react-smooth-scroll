import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Section from './Components/Section/Section';
import dummyText from './Components/DummyText';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section
          title="Olá"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <Section
          title="Sobre"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Curriculo"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="Contato"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
    </div>
  );
}

export default App;
