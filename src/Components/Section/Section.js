import React from 'react'
import './Section.css'
import Hello from '../Hello/Hello'

const Section = ({ title, subtitle, colored, id }) => {
  return (
    <div className={"section" + (colored ? " section-colored" : "")}>
      <div className="section-content" id={id}>
        {/* <h1>{title}</h1>
        <p>{subtitle}</p> */}
        <Hello />
      </div>
    </div>
  );
};

export default Section;
