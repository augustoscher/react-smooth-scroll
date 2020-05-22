import React from "react";
// import styled from "styled-components";
import TitleItem from "../TitleItem/TitleItem";

const License = ({ title, licenses }) => {
  return (
    <>
      <TitleItem title={title} />
      {licenses.map((grad, id) => (
        <p key={id}>{grad.name}</p>
      ))}
    </>
  );
};

export default License;
