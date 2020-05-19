import React from "react";
import { Element } from "react-scroll";

const ElementItem = ({ name, children }) => (
  <Element name={name} style={{ marginTop: 40 }}>
    {children}
  </Element>
);

export default ElementItem;
