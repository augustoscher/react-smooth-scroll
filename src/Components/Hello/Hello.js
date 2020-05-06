import React from 'react';
import './Hello.css';
import ReactRotatingText from 'react-rotating-text';

const Hello = () => {
  return (
    <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-center">
      <div className="text-center">
        <span className="subheading" role="img" aria-label="Hello">
          👋 Eu sou
        </span>
        <h1 className="name">Augusto Scher</h1>
        <div className="rotating-text">
          <ReactRotatingText
            typingInterval={80}
            color="#FF3465"
            items={["Software Engineer at Resultados Digitais"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Hello;
