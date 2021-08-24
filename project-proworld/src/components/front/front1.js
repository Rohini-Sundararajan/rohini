import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import backg from "../../../src/assets/ini.jpg";
import mainlogo from "./../../assets/mainlogoroh.jpg";
import { useEffect } from "react";
import ReactDom from "react-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Cookies from "universal-cookie";
export default function Front1() {
  const cookies = new Cookies();
  var cookie = cookies.get("login");
  var cookiecourse = cookie === "true" ? "/course" : "/login";
  var cookieabt = cookie === "true" ? "/about" : "/login";
  var cookiemyc = cookie === "true" ? "/mycourse" : "/login";
  var cookiecon = cookie === "true" ? "/contact" : "/login";
  useEffect(() => {
    window.scroll = (0, 0);
  }, []);
  const [fb1, setfb1] = useState(false);
  var facebk = () => {
    setfb1(true);
    if (fb1) {
      window.open("https://www.facebook.com", "_blank");
    }
  };
  const [twt1, settwt1] = useState(false);
  var twitter = () => {
    settwt1(true);
    if (twt1) {
      window.open("https://www.twitter.com", "_blank");
    }
  };
  const [goo, setgoo] = useState(false);
  var google = () => {
    setgoo(true);
    if (goo) {
      window.open("https://www.google.com", "_blank");
    }
  };
  const [linked, setlinked] = useState(false);
  var linkedin = () => {
    setlinked(true);
    if (linked) {
      window.open("https://www.linkedin.com", "_blank");
    }
  };
  const [ins, setins] = useState(false);
  var insta = () => {
    setins(true);
    if (ins) {
      window.open("https://www.instagram.com", "_blank");
    }
  };
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

  return (
    <div className="mainpage">
      <Link
        rel="shortcut icon"
        href="./../../assets/mainlogoroh.jpg"
        type="image/jpg"
      />
      <div className="back">
        <img src={backg} />
      </div>
      <h3 className="main-head1">PRO WORLD</h3>
      <div className="container">
        <Link className="main-btn1" to={cookiecourse}>
          Look It!
        </Link>
      </div>
      <p className="main-p1">
        You are browsing for the best resource for
        <b className="main-b"> Online Education</b>
      </p>
      <img className="logo" src={mainlogo} alt="main " />
      <div className="menu">
        <ul className="menu-ul">
          <div className="menu-li">
            <li>
              <Link className="menu-a" to={cookiecourse}>
                Courses
              </Link>
            </li>
            <li>
              <Link className="menu-a" to={cookiecon}>
                Contact us
              </Link>
            </li>
            <li>
              <Link className="menu-a" to={cookieabt}>
                About
              </Link>
            </li>
            <li>
              <Link className="menu-a" to={cookiemyc}>
                My Enrollments
              </Link>
            </li>
          </div>
        </ul>
      </div>
      <div className="social_media">
        <ul className="main-soc">
          <li className="msoc-li">
            <Link className="msoc-a" onClick={facebk}>
              <span>
                <FontAwesomeIcon icon={faFacebook} />
              </span>
            </Link>
          </li>
          <li className="msoc-li">
            <Link className="msoc-a" onClick={twitter}>
              <span>
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </Link>
          </li>
          <li class="msoc-li">
            <Link class="msoc-a" onClick={google}>
              <span>
                <FontAwesomeIcon icon={faGooglePlus} />
              </span>
            </Link>
          </li>
          <li className="msoc-li">
            <Link className="msoc-a" onClick={linkedin}>
              <span>
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
            </Link>
          </li>
          <li className="msoc-li">
            <Link className="msoc-a" onClick={insta}>
              <span>
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="search_box">
        <input
          className="search-txt "
          type="text"
          name=""
          id=""
          placeholder="Type to search"
        />
        <Link className="search_btn" to="#">
          <span>
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </Link>
      </div>
      {logout}
    </div>
  );
}
