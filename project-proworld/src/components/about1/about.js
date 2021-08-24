import React from "react";
import { useEffect } from "react";

import logo1 from "./../../assets/logo1.jpg";
import mlogo from "../../assets/mainlogoroh.jpg";
import abte from "./../../assets/aboute.gif";
import abtc from "../../assets/aboutc.gif";
import abtd from "./../../assets/aboutd.gif";
import "./aboutr.css";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function About() {
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
  return (
    <div className="aboutpage">
      <img className="abo-logo" src={mlogo} alt="main " />
      <div className="abo-menu">
        <ul className="abtm-ul">
          <li className="abtm-li">
            <Link className="abth abtm-a " to="/">
              Home
            </Link>
          </li>
          <li className="abtm-li">
            <Link className="abtm-a abtc" to="/course">
              Courses
            </Link>
          </li>
          <li className="abtm-li">
            <Link className="abtm-a abtcc" to="/contact">
              Contact us
            </Link>
          </li>
          <li className="abtm-li">
            <Link className="abtm-a abta" to="/about">
              About
            </Link>
          </li>
          {logout}
        </ul>
      </div>
      <div className="about">
        <div className="abt-container">
          <div className="abt-box">
            <div className="abt-imgBx">
              <img className="abt-img" src={logo1} alt="logo" />
            </div>
            <div className="abt-content">
              <h2 className="abt-con-h2">PRO WORLD</h2>
              <p className="abt-con-p">
                "Being The Pro in Programming can be easy,especially if you
                start with us"
              </p>
              <Link className="abt-con-a" to="/courser">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <p className="about1">About Us</p>
        <p className="about2">
          {" "}
          <b>Pro World</b> originated from the idea that there exists a class of
          readers <br /> who respond better to online content and prefer to
          learn new skills at <br /> their own pace from the comforts of their
          drawing rooms. <br /> <br /> <br /> Our content and resources are
          freely available and <br /> we prefer to keep it that way to encourage
          our <br /> readers acquire as many skills as they would like to.We
          don’t <br /> force our readers to sign up with us or submit their
          details either. <br /> No preconditions and no impediments. <br />{" "}
          <b>Simply Easy Learning!</b>
        </p>
      </div>
      <div className="abt-container1">
        <img className="abt-img1" src={abte} alt="mission" />
        <p className="abt-cont1-p1">Our Mission</p>
        <h2 className="abt-cont1-head">
          We believe that coding can be easy <br /> if taught the right way.
        </h2>
        <p className="abt-cont1-p2">
          Get verified <b>e-certificate</b> at completion of each course. <br />
          You can share the certificate on your resume and <br /> popular
          platforms such as <b>LinkedIn.</b>
        </p>
      </div>
      <div className="abt-container2">
        <img className="abt-cont2-img2" src={abtc} alt="logo" />
        <img className="abt-cont2-img3" src={abtd} alt="logo" />
        <h3 className="abt-cont2-head2">The Right Way to Learn Programming</h3>
        <h3 className="abt-cont2-head3">Make Programming Fun</h3>
        <p className="abt-cont2-p3">
          With research backed learning technique and help of industry experts,{" "}
          <br /> we have after the perfect learning path for you <br /> to learn
          programming.
        </p>
        <p className="abt-cont2-p4">
          Learning to code has never been so much fun before! We have made{" "}
          <br /> the learning experience fun and interactive. You will enjoy it
          like <br /> a game while learning and upgrading your skills.
        </p>
      </div>
      <div className="abt-footer">
        <div className="abt-main-content">
          <div className="abt-left-box">
            <h2 className="abtfoo-h2">Quick Links</h2>
            <ul className="abtfoo-ul">
              <li className="abtfoo-li">
                <Link className="abtfoo-a" to="/">
                  Home
                </Link>
              </li>
              <li className="abtfoo-li">
                <Link className="abtfoo-a" to="/course">
                  Course
                </Link>
              </li>
              <li className="abtfoo-li">
                <Link className="abtfoo-a" to="/enroll">
                  My Enrollments
                </Link>
              </li>
              <li className="abtfoo-li">
                <Link className="abtfoo-a" href="/contact">
                  Help
                </Link>
              </li>
            </ul>
          </div>
          <div className="abt-center-box">
            <h2 className="abtcen-h2">Address</h2>
            <div className="abtcen-location">
              <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <i className="text">Coimbatore,Tamilnadu</i>
            </div>
            <div className="abtcen-mail">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <i className="text">talktorohini21@gmail.com</i>
            </div>
            <div className="abtcen-phone">
              <span>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              <i className="text">+91 7339481237</i>
            </div>

            <Link
              className="abtcen-button"
              to="https://www.google.co.in/maps/place/PSG+College+of+Arts+%26+Science/@11.0332141,77.0316629,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba858526b5c0591:0x6c452206816788d4!8m2!3d11.0332088!4d77.0338516?hl=en&authuser=0"
            >
              Locate Us
            </Link>
          </div>
          <div className="abt-right-box">
            <h2 className="abtrt-h2">Connect with us</h2>
            <div className="asocial_media">
              <ul className="abtrt-ul">
                <li className="abtrt-li">
                  <Link className="abtrt-a" to="#">
                    <span>
                      <FontAwesomeIcon icon={faFacebook} />
                    </span>
                  </Link>
                </li>
                <li className="abtrt-li">
                  <Link className="abtrt-a" to="#">
                    <span>
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                  </Link>
                </li>
                <li className="abtrt-li">
                  <Link className="abtrt-a" to="#">
                    <span>
                      <FontAwesomeIcon icon={faGooglePlus} />
                    </span>
                  </Link>
                </li>
                <li className="abtrt-li">
                  <Link className="abtrt-a" to="#">
                    <span>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </span>
                  </Link>
                </li>
                <li className="abtrt-li">
                  <Link className="abtrt-a" to="#">
                    <span>
                      <FontAwesomeIcon icon={faInstagram} />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
