import React from "react";
import "./csfooter.css";
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
export default function Csfooter() {
  return (
    <div className="csfoopg">
      <div className="css-footer">
        <div className="csmain-content">
          <div className="csleft-box">
            <h2 className="cs-h2">Quick Links</h2>
            <ul className="cs-ul">
              <li className="cs-li">
                <Link className="css-a" to="/">
                  Home
                </Link>
              </li>
              <li className="cs-li">
                <Link className="css-a" to="/mycourse">
                  My Enrollments
                </Link>
              </li>
              <li className="cs-li">
                <Link className="css-a" to="/contact">
                  Help
                </Link>
              </li>
              <li className="cs-li">
                <Link className="css-a" to="/course">
                  Courses
                </Link>
              </li>
            </ul>
          </div>
          <div className="csscenter-box ">
            <h2 className="csce-h2">Address</h2>
            <div className="csce-location ">
              <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <i className="csce-text ">Coimbatore,Tamilnadu</i>
            </div>
            <div className="csce-mail ">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <i className="csce-text ">talktorohini21@gmail.com</i>
            </div>
            <div className="csce-phone ">
              <span>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              <i className="csce-text ">+91 7339481237</i>
            </div>

            <a
              className="csce-button "
              href="https://www.google.co.in/maps/place/PSG+College+of+Arts+%26+Science/@11.0332141,77.0316629,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba858526b5c0591:0x6c452206816788d4!8m2!3d11.0332088!4d77.0338516?hl=en&authuser=0 "
              target="_blank"
            >
              Locate Us
            </a>
          </div>
          <div className="cssright-box ">
            <h2 className="csrt-h2">Connect with us</h2>
            <div className="csrtsocial_media ">
              <ul className="csrt-ul">
                <li className="csrt-li">
                  <a
                    className="csrt-a"
                    href="https://www.facebook.com"
                    target="_blank"
                  >
                    <span>
                      <FontAwesomeIcon icon={faFacebook} />
                    </span>
                  </a>
                </li>
                <li className="csrt-li">
                  <Link className="csrt-a">
                    <span>
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                  </Link>
                </li>
                <li className="csrt-li">
                  <Link className="csrt-a">
                    <span>
                      <FontAwesomeIcon icon={faGooglePlus} />
                    </span>
                  </Link>
                </li>
                <li className="csrt-li">
                  <Link className="csrt-a">
                    <span>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </span>
                  </Link>
                </li>
                <li className="csrt-li">
                  <Link className="csrt-a">
                    <span>
                      <FontAwesomeIcon className="csinsta" icon={faInstagram} />
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
