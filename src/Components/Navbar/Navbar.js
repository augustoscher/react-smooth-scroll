import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { Link } from "react-scroll";
import SECTION_TYPES from "../../Constants/SectionType";
import "./Navbar.css";

const NavItem = styled.div`
  padding: 8px;
`;

const items = [
  { sectionId: SECTION_TYPES.HELLO, translationKey: "navbar:welcome" },
  { sectionId: SECTION_TYPES.ABOUT, translationKey: "navbar:about" },
  { sectionId: SECTION_TYPES.CURRICULUM, translationKey: "navbar:curriculum" },
  { sectionId: SECTION_TYPES.CONTACT, translationKey: "navbar:contact" },
];

const renderNav = (t) => {
  return items.map((value, idx) => {
    const text = t(value.translationKey);

    return (
      <li key={idx} className="nav-item">
        <Link
          activeClass="active"
          to={value.sectionId}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <NavItem>{text}</NavItem>
        </Link>
      </li>
    );
  });
};

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation(["translation", "navbar"]);

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light" id="navbar">
      <div className="container-fluid">
        <Link
          className="brand"
          activeClass="active"
          to={SECTION_TYPES.HELLO}
          spy={true}
          smooth="easeInOutBack"
          offset={-70}
          duration={500}
        >
          <span className="brand-span">Augusto</span> Scher
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setCollapsed(!collapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${
            collapsed ? "collapse navbar-collapse" : "navbar-collapse"
          }`}
        >
          <ul className="navbar-nav">{renderNav(t)}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
