import React from "react";
import Css from "./../csscontent/css";
import Csfooter from "./../csscontent/csfooter";
import "./csborder.css";
export default function Csborder() {
  return (
    <div className="brder">
      <Css />
      <Csfooter />
      <div className="border">
        <h3 className="borh1">CSS Borders</h3>
        <p className="borp1">
          The CSS border properties allow you to specify the style, width, and
          color of an element's border.
        </p>
        <p className="bp1">I have borders on all sides</p>
        <p className="bp2">I have rounded borders</p>

        <p className="bp3">I have a red bottom borders</p>
        <h3 className="borh2">CSS Border style</h3>
        <p className="borp2">
          The border-style property specifies what kind of border to display.
          <br />
          The following values are allowed:
          <br />
          <ul>
            <li>dotted - Defines a dotted border</li>
            <li>dashed - Defines a dashed border</li>
            <li>solid - Defines a solid border</li>
            <li>double - Defines a double border</li>
            <li>
              groove - Defines a 3D grooved border. The effect depends on the
              border-color value
            </li>
            <li>
              ridge - Defines a 3D ridged border. The effect depends on the
              border-color value
            </li>
            <li>
              inset - Defines a 3D inset border. The effect depends on the
              border-color value
            </li>
            <li>
              outset - Defines a 3D outset border. The effect depends on the
              border-color value
            </li>
            <li>none - Defines no border.</li>
            <li>hidden - Defines a hidden border</li>
          </ul>
          The border-style property can have from one to four values
          <br /> (for the top border, right border, bottom border, and the left
          border).
        </p>

        <p className="bp4">A dotted border</p>
        <p className="bp5">A dashed border</p>
        <p className="bp6">A solid border</p>
        <p className="bp7">A double border</p>
        <p className="bp8">
          A groove border.The effect depends upon the border color value
        </p>
        <p className="bp9">
          A ridge border.The effect depends upon the border color value
        </p>
        <p className="bp10">
          A inset border.The effect depends upon the border color value
        </p>
        <p className="bp11">
          A outset border.The effect depends upon the border color value
        </p>
        <p className="bp12">No border</p>
        <p className="bp13">A hidden border</p>
        <p className="bp14">A mixed border</p>
      </div>
    </div>
  );
}
