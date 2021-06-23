import React from "react";
import Css from "./../csscontent/css";
import Csfooter from "./../csscontent/csfooter";
import synimg from "./../../assets/cssyntax.gif";
import { Link } from "react-router-dom";
import "./cssyntax.css";

import "./cssyntax.css";
export default function Cssyntax() {
  return (
    <div className="csynpg">
      <Css />
      <div className="csyntax">
        <h2 className="csynh1">CSS Syntax</h2>
        <h3 className="csynh2">
          A CSS rule consists of a selector and a declaration block.
        </h3>
        <img className="synimg" src={synimg} alt="syntaximg" />
        <p className="csynp1">
          {" "}
          The selector points to the HTML element you want to style.
          <br />
          The declaration block contains one or more declarations separated by
          semicolons.
          <br />
          Each declaration includes a CSS property name and a value, separated
          by a colon.
          <br />
          Multiple CSS declarations are separated with semicolons, and
          declaration blocks are surrounded by curly braces.
        </p>
        <p className="csynp2">
          Example :
          <br />
          In this example all p elements will be center-aligned, with a red text
          color:
        </p>
        <p className="csynp3">
          p <br />
          color: red;
          <br />
          text-align: center;
          <br />
        </p>
        <p className="csynp3">
          Example Explained :
          <br />
          <ul className="csynul">
            <li className="csynli">
              p is a selector in CSS (it points to the HTML element you want to
              style: p).
            </li>
            <li className="csynli">
              color is a property, and red is the property value
            </li>
            <li className="csynli">
              text-align is a property, and center is the property value
            </li>
          </ul>
        </p>
      </div>
      <div className="csyn-btn">
        <Link to="/csselector" className="csyn-next">
          Next
        </Link>
        <Link to="/cssintro" className="csyn-previous">
          Previous
        </Link>
      </div>
      <Csfooter className="csfooter" />
    </div>
  );
}
