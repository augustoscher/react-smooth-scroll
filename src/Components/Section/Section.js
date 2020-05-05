import React from 'react'
import './Section.css'

const Section = ({ title, subtitle, colored, id }) => {
  return (
    <div className={"section" + (colored ? " section-colored" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Section;
