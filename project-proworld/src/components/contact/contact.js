import React from "react";
import { useEffect, useState } from "react";
import "../contact/contactr.css";
import axios from "axios";
import conph from "../../assets/contact.png";
import mlogo from "../../assets/mainlogoroh.jpg";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
export default function Contact() {
  const cookies = new Cookies();
  var cookie = cookies.get("login");
  var logouts = () => {
    cookies.set("login", "false");
    cookies.set("user", "User");
  };
  var logout =
    cookie == "false" ? (
      <div className="button1">
        <Link to="/login">
          <button className="mbtn1">Login</button>
        </Link>
      </div>
    ) : (
      <div className="button1">
        <Link to="/">
          <button className="mbtn1" onClick={logouts}>
            Logout
          </button>
        </Link>
      </div>
    );
  useEffect(() => {
    window.scroll = (0, 0);
  }, []);
  const [name, setname] = useState("");
  const [emails, setemails] = useState("");
  const [con, setcon] = useState("");
  const [msg, setmsg] = useState("");
  var arrow1 = async () => {
    const arrayform2 = await {
      Name: name,
      Mail: emails,
      Message: msg,
      Phoneno: con,
    };
    console.log(arrayform2);
    await axios.post("http://localhost:2000/proworld/contact1/", arrayform2);
  };
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
        {logout}
      </div>
      <div className="con-container">
        <img className="con-img1" src={conph} alt="logo" />
        <div className="ctext">Contact Us</div>
        <form className="con-form" action="#">
          <div className="form-row">
            <div className="input-data">
              <input
                className="cin"
                type="text"
                required
                onChange={(e) => setname(e.target.value)}
              />
              <div className="underline"></div>
              <label className="clabel"> Name</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input
                className="cin"
                type="email"
                required
                onChange={(e) => setemails(e.target.value)}
              />
              <div className="underline"></div>
              <label className="clabel">Email-Address</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input
                className="cin"
                type="text"
                required
                onChange={(e) => setcon(e.target.value)}
              />
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
                onChange={(e) => setmsg(e.target.value)}
              ></textarea>
              <div className="underline"></div>
              <label className="clabel">Message</label>
            </div>
          </div>

          <div className="form-row csubmit-btn">
            <div className="input-data">
              <div className="inner"></div>
              <input
                className="csum"
                type="submit"
                value="submit"
                onClick={arrow1}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
