import React from "react";
import "./myCourser.css";
import myclogo from "./../../assets/mainlogoroh.jpg";
import mychtml from "./../../assets/html1.png";
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
export default function Mcourse() {
  return (
    <div className="mycpg">
      <img className="myclogo" src={myclogo} alt="main " />
      <h3 className="myclogo1">PRO WORLD</h3>
      <div className="mycmenu">
        <ul className="myc-ul">
          <li className="myc-li">
            <Link className="myc-a" to="/">
              Home
            </Link>
          </li>
          <li className="myc-li">
            <Link className="myc-a" to="/course">
              Courses
            </Link>
          </li>
          <li className="myc-li">
            <Link className="myc-a" to="/contact">
              Contact us
            </Link>
          </li>
          <li className="myc-li">
            <Link className="myc-a" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
      <h2 className="myc-h2">My Enrollments</h2>
      <div className="myc-container1">
        <div className="myc-box">
          <div className="myc-imgBx">
            <progress className="mycprg" value="30" max="100">
              30%
            </progress>
            <img className="myc-img1" src={mychtml} alt="html" />
            <h3 className="myc-head1">The Web Tool - HTML5</h3>
          </div>
          <div className="myc-button">
            <Link className="mycbtna" to="/html">
              Go To Course
            </Link>
          </div>
        </div>
      </div>
      <div className="myc-footer">
        <div className="myc-main-content">
          <div className="myc-left-box">
            <h2 className="myc-h2">Quick Links</h2>
            <ul className="myclt-ul">
              <li className="myclt-li">
                <Link className="myclt-a" to="/">
                  Home
                </Link>
              </li>
              <li className="myclt-li">
                <Link className="myclt-a" to="/mycourse">
                  My Enrollments
                </Link>
              </li>
              <li className="myclt-li">
                <Link className="myclt-a" to="/contact">
                  Help
                </Link>
              </li>
              <li className="myclt-li">
                <Link className="myclt-a" to="/course">
                  Courses
                </Link>
              </li>
            </ul>
          </div>
          <div className="myc-center-box">
            <h2 className="myce-h2">Address</h2>
            <div className="myce-location">
              <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <i className="myce-text">Coimbatore,Tamilnadu</i>
            </div>
            <div className="myce-mail">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <i className="myce-text">talktorohini21@gmail.com</i>
            </div>
            <div className="myce-phone">
              <span>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              <i className="myce-text">+91 7339481237</i>
            </div>

            <Link
              className="myce-button"
              to="https://www.google.co.in/maps/place/PSG+College+of+Arts+%26+Science/@11.0332141,77.0316629,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba858526b5c0591:0x6c452206816788d4!8m2!3d11.0332088!4d77.0338516?hl=en&authuser=0"
            >
              Locate Us
            </Link>
          </div>
          <div className="myc-right-box">
            <h2 className="mycrt-h2">Connect with us</h2>
            <div className="mycrt-social_media">
              <ul className="mycrt-ul">
                <li className="mycrt-li">
                  <Link className="mycrt-a" to="#">
                    <span>
                      <FontAwesomeIcon icon={faFacebook} />
                    </span>
                  </Link>
                </li>
                <li className="mycrt-li">
                  <Link className="mycrt-a" to="#">
                    <span>
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                  </Link>
                </li>
                <li className="mycrt-li">
                  <Link className="mycrt-a" to="#">
                    <span>
                      <FontAwesomeIcon icon={faGooglePlus} />
                    </span>
                  </Link>
                </li>
                <li className="mycrt-li">
                  <Link className="mycrt-a" to="#">
                    <span>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </span>
                  </Link>
                </li>
                <li className="mycrt-li">
                  <Link className="mycrt-a" to="#">
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
