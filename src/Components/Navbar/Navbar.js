import React from "react";
import { Link } from "react-scroll";
import SECTION_TYPES from '../../Constants/SectionType'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <Link
          className="navbar-brand"
          activeClass="active"
          to={SECTION_TYPES.HELLO}
          spy={true}
          smooth="easeInOutBack"
          offset={-70}
          duration={500}
        >
          <span className="navbar-brand-span">Augusto</span> Scher
        </Link>
        <ul className="nav-items">
          <li className="nav-item">
            <Link
              activeClass="active"
              to={SECTION_TYPES.HELLO}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>Olá</span>
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
              <span>Sobre</span>
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
              <span>Curriculo</span>
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
              <span>Contato</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
