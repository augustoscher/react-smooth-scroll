import React from "react";
import { Link } from "react-scroll";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <Link
          className="navbar-brand"
          activeClass="active"
          to="section1"
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
              to="section1"
              spy={true}
              smooth="easeInOutBack"
              offset={-70}
              duration={500}
            >
              <span>Section 1</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth="easeInOutBack"
              offset={-70}
              duration={500}
            >
              <span>Section 2</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>Section 3</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>Section 4</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>Section 5</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
