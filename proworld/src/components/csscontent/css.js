import React from "react";
import cslogo from "./../../assets/mainlogoroh.jpg";
import "./cssr.css";
import { Link } from "react-router-dom";

export default function Css() {
  return (
    <div className="csspg">
      <h3 className="cslogo1">PRO WORLD</h3>
      <img className="cslogo" src={cslogo} alt="main " />
      <div className="csmenu">
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
        <div className="cscontent">
          <Link className="cscona" to="/cssintro">
            <p className="cs-p">CSS Introduction</p>
          </Link>
          <Link className="cscona" to="/cssyntax">
            <p className="cs-p">CSS Syntax</p>
          </Link>
          <Link className="cscona" to="/csselector">
            <p className="cs-p">CSS Selectors</p>
          </Link>
          <Link className="cscona" to="/csshowto">
            <p class="cs-p">CSS How To</p>
          </Link>
          <Link className="cscona" to="/csscolor">
            <p className="cs-p">CSS Colors</p>
          </Link>
          <Link className="cscona" to="/cssborder">
            <p className="cs-p">CSS Borders</p>
          </Link>
          <a
            className="cscona"
            href="https://forms.gle/p4M4YjYaYyFYtWDz9"
            target="_blank"
          >
            <p className="cs-p">HTML Quiz</p>
          </a>
        </div>
      </div>
    </div>
  );
}
