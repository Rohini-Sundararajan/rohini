import React from "react";
import "../contact/contactr.css";
import conph from "../../assets/contact.png";
import mlogo from "../../assets/mainlogoroh.jpg";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="contactpage">
      <h3 className="conlogo1">PRO WORLD</h3>
      <img className="con-logo" src={mlogo} alt="main" />
      <div className="con-menu">
        <ul className="con-ul">
          <li className="con-li">
            <Link className="con-a" to="/">
              Home
            </Link>
          </li>
          <li className="con-li">
            <Link className="con-a " to="/course">
              Courses
            </Link>
          </li>
          <li className="con-li">
            <Link className="con-a con3" to="/contact">
              Contact us
            </Link>
          </li>
          <li className="con-li">
            <Link className="con-a" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="con-container">
        <img className="con-img1" src={conph} alt="logo" />
        <div className="ctext">Contact Us</div>
        <form className="con-form" action="#">
          <div className="form-row">
            <div className="input-data">
              <input className="cin" type="text" required />
              <div className="underline"></div>
              <label className="clabel"> Name</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input className="cin" type="email" required />
              <div className="underline"></div>
              <label className="clabel">Email-Address</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input className="cin" type="text" required />
              <div className="underline"></div>
              <label className="clabel">Phone No</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data textarea">
              <textarea
                className="ctextarea"
                cols="30"
                rows="10"
                required
              ></textarea>
              <div className="underline"></div>
              <label className="clabel">Message</label>
            </div>
          </div>

          <div className="form-row csubmit-btn">
            <div className="input-data">
              <div className="inner"></div>
              <input className="csum" type="submit" value="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
