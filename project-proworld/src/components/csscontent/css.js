import React from "react";
import cslogo from "./../../assets/mainlogoroh.jpg";
import "./cssr.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Css() {
  return (
    <div className="csspg">
      <div className="csmenu">
        {/* <h3 >PRO WORLD</h3> */}

        <img
          className="cslogo1"
          src="https://images.cooltext.com/5537411.png"
          width="203"
          height="47"
          alt="PRO WORLD"
        />

        <img className="cslogo" src={cslogo} alt="main " />
        <ul className="csul">
          <li className="csli">
            <Link className="cssa csh" to="/">
              Home
            </Link>
          </li>
          <li className="csli">
            <Link className="cssa csc" to="/course">
              Courses
            </Link>
          </li>
          <li className="csli">
            <Link className="cssa cscc" to="/contact">
              Contact us
            </Link>
          </li>
          <li className="csli">
            <Link className="cssa csa" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="cscontainer">
        <h3 className="csh3">CSS Tutorial</h3>
        <ul className="cscontent">
          <li className="cs-p">
            <NavLink className="cscona" to="/cssintro" activeClassName="active">
              CSS Introduction
            </NavLink>
          </li>
          <li className="cs-p">
            <NavLink className="cscona" to="/cssyntax" activeClassName="active">
              CSS Syntax
            </NavLink>
          </li>
          <li className="cs-p">
            <NavLink
              className="cscona"
              to="/csselector"
              activeClassName="active"
            >
              CSS Selectors
            </NavLink>
          </li>
          <li className="cs-p">
            {" "}
            <NavLink className="cscona" to="/csshowto" activeClassName="active">
              CSS How To
            </NavLink>
          </li>
          <li className="cs-p">
            <NavLink className="cscona" to="/csscolor" activeClassName="active">
              CSS Colors
            </NavLink>
          </li>
          <li className="cs-p">
            <NavLink
              className="cscona"
              to="/cssborder"
              activeClassName="active"
            >
              CSS Borders
            </NavLink>
          </li>
          <li className="cs-p">
            <a
              className="cscona"
              href="https://forms.gle/p4M4YjYaYyFYtWDz9"
              target="_blank"
            >
              HTML Quiz
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
