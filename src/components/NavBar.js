import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <ul className="grid-container">
          <li>
            <i className="bi bi-house-heart-fill iconSize" />
            &nbsp;
            <Link to="/" className="classLink">
              Home
            </Link>
          </li>

          <li>
            <i className="bi bi-person-circle iconSize" />
            &nbsp;
            <Link to="/about" className="classLink">
              About
            </Link>
          </li>

          <li>
            <i className="bi bi-book iconSize" />
            &nbsp;
            <Link to="/education" className="classLink">
              Education
            </Link>
          </li>

          <li>
            <i className="bi bi-gear-fill iconSize" />
            &nbsp;
            <Link to="/skills" className="classLink">
              Skills
            </Link>
          </li>

          <li>
            <i className="bi bi-telephone-fill iconSize" />
            &nbsp;
            <Link to="/contact" className="classLink">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
