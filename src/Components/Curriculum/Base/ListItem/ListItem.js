import React from 'react';
import { Link } from "react-scroll";
import styled from "styled-components";

const Li = styled.li`
  list-style: none;
  color: var(--black);
  font-weight: 800;
  font-size: 18px;
  opacity: 1 !important;
  margin-bottom: 5px;

  &:hover {
    color: var(--primary);
  }

  .active {
    color: var(--primary);
  }
`;

const ListItem = ({ tittle, to }) => (
  <Li>
    <Link
      activeClass="active"
      containerId="containerElement"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {tittle}
    </Link>
  </Li>
);

export default ListItem;
