import React from "react";
import { Element } from "react-scroll";

const ElementItem = ({ name, children }) => (
  <Element name={name} style={{ marginBottom: 40 }}>
    {children}
  </Element>
);

export default ElementItem;
