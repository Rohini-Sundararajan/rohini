import React from "react";
import Css from "./../csscontent/css";
import "./csintro.css";
import Csfooter from "./../csscontent/csfooter";
import { Link } from "react-router-dom";
export default function Csintro() {
  return (
    <div className="csintropg">
      <Css />
      <div className="intro1">
        <h2 className="in1h1">CSS Introduction</h2>
        <h2 className="in1h2">
          CSS is the language we use to style a Web page.
        </h2>
        <h2 className="in1h3">What is CSS?</h2>
        <ul className="in1ul">
          <li className="in1li">CSS stands for Cascading Style Sheets</li>
          <li className="in1li">
            CSS describes how HTML elements are to be displayed on screen,
            paper, or in other media
          </li>
          <li className="in1li">
            CSS saves a lot of work. It can control the layout of multiple web
            pages all at once
          </li>
          <li className="in1li">
            External stylesheets are stored in CSS files
          </li>
        </ul>
        <h2 className="in1h4">Why Use CSS?</h2>
        <p className="in1p1">
          CSS is used to define styles for your web pages, including the design,{" "}
          <br />
          layout and variations in display for different devices and screen
          sizes.
        </p>
        <h3 className="in1h5">CSS Solved a Big Problem</h3>
        <p className="in1p2">
          HTML was NEVER intended to contain tags for formatting a web page!
        </p>
        <p className="in1p3">
          HTML was created to describe the content of a web page, like:
        </p>
        <code className="in1cd1">
          <h1>This is a heading</h1>
        </code>
        <code className="in1cd2">
          <p>This is a paragraph.</p>
        </code>
        <p className="in1p4">
          When tags like <font /> , and color attributes were added to the HTML
          3.2 specification, it started a nightmare for web developers.
          Development of large websites, where fonts and color information were
          added to every single page, became a long and expensive process.
        </p>
        <p className="in1p5">
          To solve this problem, the World Wide Web Consortium (W3C) created
          CSS.
        </p>
        <p className="in1p6">
          CSS removed the style formatting from the HTML page!
        </p>
        <h3 className="in1h6">CSS Saves a Lot of Work!</h3>
        <p className="in1p7">
          The style definitions are normally saved in external .css files. With
          an external stylesheet file, you can change the look of an entire
          website by changing just one file!
        </p>
      </div>
      <div className="csintro-btn">
        <Link to="/cssyntax" className="csintro-next">
          Next
        </Link>
      </div>
      <Csfooter />
    </div>
  );
}
