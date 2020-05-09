import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';

import { Link } from "react-scroll";
import SECTION_TYPES from "../../Constants/SectionType";
import "./Navbar.css";

const NavItem = styled.div`
  padding: 8px;
`;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation(['translation', 'navbar']);

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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                activeClass="active"
                to={SECTION_TYPES.HELLO}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <NavItem>{t('navbar:welcome')}</NavItem>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to={SECTION_TYPES.ABOUT}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <NavItem>{t('navbar:about')}</NavItem>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to={SECTION_TYPES.CURRICULUM}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <NavItem>{t('navbar:curriculum')}</NavItem>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to={SECTION_TYPES.CONTACT}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <NavItem>{t('navbar:contact')}</NavItem>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default (Navbar);
