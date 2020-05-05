import React from 'react'

const Hello = () => {
  return (
    <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-center">
      <div className="text text-center">
        <span className="subheading" role="img" aria-label="Hello" >👋 Eu sou</span>
        <h1>Augusto Scher</h1>
        <h2
          className="txt-rotate"
          data-period="2000"
          data-rotate='[ "Software Engineer na Resultados Digitais" ]'
        ></h2>
      </div>
    </div>
  );
};

export default Hello;
