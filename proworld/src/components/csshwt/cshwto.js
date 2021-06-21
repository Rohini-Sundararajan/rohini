import React from "react";
import "./cshwto.css";
import Css from "./../csscontent/css";
import Csfooter from "./../csscontent/csfooter";
export default function Csshwto() {
  return (
    <div className="hwtpg">
      <Css />
      <Csfooter />
      <div className="hwt">
        <h3 className="hwth1">How To Add Css</h3>
        <p className="hwtp1">
          When a browser reads a style sheet, it will format the HTML document
          according to the information in the style sheet.
        </p>
        <h3 className="hwth2">Three Ways to Insert CSS</h3>
        <p className="hwtp2">
          There are three ways of inserting a style sheet:
          <br />
          <ul>
            <li>External CSS</li>
            <li>Internal CSS</li>
            <li>Inline CSS</li>
          </ul>
        </p>
        <h3 className="hwth21">External CSS</h3>
        <p className="hwtp3">
          With an external style sheet, you can change the look of an entire
          website by changing just one file!
          <br />
          Each HTML page must include a reference to the external style sheet
          file inside the link element, inside the head section.
          <br />
          External styles are defined within the link element, inside the head
          section of an HTML page
          <br />
          An external style sheet can be written in any text editor, and must be
          saved with a .css extension.
          <br />
          The external .css file should not contain any HTML tags.
        </p>
        <h3 className="hwth3">Internal CSS</h3>
        <p className="hwtp4">
          An internal style sheet may be used if one single HTML page has a
          unique style.
          <br />
          The internal style is defined inside the style element, inside the
          head section.
          <br />
        </p>
        <h3 className="hwth4">Inline CSS</h3>
        <p className="hwtp5">
          An inline style may be used to apply a unique style for a single
          element.
          <br />
          To use inline styles, add the style attribute to the relevant element.
          The style attribute can contain any CSS property.
          <br />
        </p>
        <h3 className="hwth5">Multiple Style Sheets</h3>
        <p className="hwtp6">
          If some properties have been defined for the same selector (element)
          in different style sheets, <br />
          the value from the last read style sheet will be used.
        </p>
        <h3 className="hwth6">Cascading Order</h3>
        <p className="hwtp7">
          What style will be used when there is more than one style specified
          for an HTML element?
          <br />
          All the styles in a page will "cascade" into a new "virtual" style
          sheet by the following rules, where number one has the highest
          priority:
          <br />
          <ol>
            <li>Inline style (inside an HTML element)</li>
            <li>External and internal style sheets (in the head section)</li>
            <li>Browser default</li>
          </ol>
          So, an inline style has the highest priority, and will override
          external and internal styles and browser defaults.
        </p>
      </div>
    </div>
  );
}
