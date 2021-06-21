import React from "react";
import "./cselector.css";
import Css from "./../csscontent/css";
import Csfooter from "./../csscontent/csfooter";
export default function Cseletor() {
  return (
    <div className="selectorpg">
      <Css />
      <Csfooter />
      <div className="selec1">
        <h3 className="selh1">CSS Selector</h3>
        <h3 className="selh2">
          A CSS selector selects the HTML element(s) you want to style.
        </h3>
        <p className="selp1">
          CSS selectors are used to "find" (or select) the HTML elements you
          want to style.
          <br />
          We can divide CSS selectors into five categories:
          <br />
          <ul className="selu1">
            <li className="sell1">
              Simple selectors (select elements based on name, id, class)
            </li>
            <li className="sell1">
              Combinator selectors (select elements based on a specific
              relationship between them)
            </li>
            <li className="sell1">
              Pseudo-class selectors (select elements based on a certain state)
            </li>
            <li className="sell1">
              Pseudo-elements selectors (select and style a part of an element)
            </li>
            <li className="sell1">
              Attribute selectors (select elements based on an attribute or
              attribute value)
            </li>
          </ul>
          This page will explain the most basic CSS selectors.
        </p>
        <h3 className="selh3">The CSS element Selector</h3>
        <p className="selp2">
          The element selector selects HTML elements based on the element name.
        </p>
        <h3 className="selh4">The CSS id Selector</h3>
        <p className="selp3">
          The id selector uses the id attribute of an HTML element to select a
          specific element.
          <br />
          The id of an element is unique within a page, so the id selector is
          used to select one unique element!
          <br />
          To select an element with a specific id, write a hash (#) character,
          followed by the id of the element.
        </p>
        <h3 className="selh5"> The CSS class Selector</h3>
        <p className="selp4">
          The class selector selects HTML elements with a specific class
          attribute.
          <br />
          To select elements with a specific class, write a period (.)
          character, followed by the class name.
          <br />
          You can also specify that only specific HTML elements should be
          affected by a class.
          <br />
          HTML elements can also refer to more than one class.
        </p>
        <h3 className="selh5"> The CSS Universal Selector</h3>
        <p className="selp5">
          The universal selector (*) selects all HTML elements on the page.
        </p>
        <h3 className="selh6"> The CSS Grouping Selector</h3>
        <p className="selp6">
          The grouping selector selects all the HTML elements with the same
          style definitions.
          <br />
          It will be better to group the selectors, to minimize the code.
          <br />
          To group selectors, separate each selector with a comma.
          <br />
        </p>
      </div>
    </div>
  );
}
