import React from "react";
import "./cscolor.css";
import Css from "./../csscontent/css";
import Csfooter from "./../csscontent/csfooter";
export default function Cscolor() {
  return (
    <div className="cscolrpg">
      <Css />
      <Csfooter />
      <h3 className="clrh3">CSS Colors</h3>
      <div className="colorpg">
        <p className="clrp1">Tomato</p>
        <p className="clrp12">Orange</p>
        <p className="clrp13">Dodger Blue</p>
        <p className="clrp14">green</p>
        <p className="clrp15">Gray</p>
        <p className="clrp16">Violet</p>
      </div>
      <div className="colorpg1">
        <h3 className="clr1">CSS Background Color</h3>
        <p className="clrp2">
          You can set the background color for HTML elements:
        </p>
        <h2 className="clr2">Hello World</h2>
        <p className="clrp3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quas alias
          vitae dolorum! Soluta quod ab tenetur suscipit ut libero?
        </p>
        <h3 className="clr3">CSS Text Color</h3>
        <p className="clrp31">You can set the color of text:</p>

        <h4 className="clr4">Hello World</h4>
        <p className="clrp4">
          Lorem ipsum dolor sit amet,
          <br /> consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>

        <p className="clrp5">
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>

        <h3 className="clr8">Border Colors</h3>
        <h3 className="clr5">Hello World</h3>
        <h3 className="clr6">Hello World</h3>
        <h3 className="clr7">Hello World</h3>
      </div>
    </div>
  );
}
