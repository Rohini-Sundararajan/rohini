import React from "react";
import "./courser.css";
import mclogo from "./../../assets/mainlogoroh.jpg";
import htmlph from "./../../assets/html.jpg";
import cssph from "./../../assets/css.jpeg";
import javaph from "./../../assets/javascript.png";
import htmlcard from "./../../assets/html1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
export default function Course() {
  return (
    <div className="coursepage">
      <img className="cologo" src={mclogo} alt="main " />
      <div className="comenu">
        <ul className="co-ul">
          <li className="co-li">
            <a className="co-a" href="./main.html">
              Home
            </a>
          </li>
          <li className="co-li">
            <a className="co-a" href="#">
              Courses
            </a>
          </li>
          <li className="co-li">
            <a className="co-a" href="./contact.html">
              Contact us
            </a>
          </li>
          <li className="co-li">
            <a className="co-a" href="./about.html">
              About
            </a>
          </li>
        </ul>
      </div>
      <div className="co-container">
        <div className="co-card">
          <img className="co-img1" src={htmlph} alt="html" />
          <div className="co-info">
            <h3 className="co-h">HTML-HyperText Markup Language</h3>
            <p className="co-p">
              IT is used to structure <br /> a web page and its content. For
              example, <br /> content could be structured within a set <br /> of
              paragraphs, a list of bulleted points, <br /> or using images and
              data tables
            </p>
          </div>
        </div>
        <div className="co-card">
          <img className="co-img1" src={cssph} alt="css" />
          <div className="co-info">
            <h3 className="co-h">CSS-Cascading Style Sheets</h3>
            <p className="co-p">
              CSS is a style sheet language used for describing the presentation
              of a document written in a markup language such as HTML
            </p>
          </div>
        </div>
        <div className="co-card">
          <img className="co-img1" src={javaph} alt="javascript" />
          <div className="co-info">
            <h3 className="co-h">JS-JavaScript</h3>
            <p className="co-p">
              JavaScript is a text-based programming language used both on the
              client-side and server-side that allows you to make web pages
              interactive.JavaScript gives web pages interactive elements that
              engage a user.
            </p>
          </div>
        </div>
      </div>
      <div className="co-container1">
        <div className="co-box">
          <div className="co-imgBx">
            <img className="co-img2" src={htmlcard} alt="html" />
            <h3 className="co-head1">The Web Tool - HTML5</h3>
          </div>
          <div className="co-button">
            <a className="co-enrol" href="./enroll.html">
              Enroll Now
            </a>
          </div>
        </div>
      </div>
      <div className="co-footer">
        <div className="co-main-content">
          <div className="co-left-box">
            <h2 className="com-h1">Quick Links</h2>
            <ul className="com-ul">
              <li className="com-li">
                <a className="com-a" href="./main.html">
                  Courses
                </a>
              </li>
              <li className="com-li">
                <a className="com-a" href="#">
                  Certificates
                </a>
              </li>
              <li className="com-li">
                <a className="com-a" href="#">
                  Help
                </a>
              </li>
              <li className="com-li">
                <a className="com-a" href="./main.html">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div className="co-center-box">
            <h2 className="coce-h1">Address</h2>
            <div className="co-location">
              <i className="fas fa-map-marker-alt"></i>
              <i className="co-text">Coimbatore,Tamilnadu</i>
            </div>
            <div className="co-mail">
              <i className="fas fa-envelope"></i>
              <i className="co-text">talktorohini21@gmail.com</i>
            </div>
            <div className="co-phone">
              <i className="fas fa-phone-alt"></i>
              <i className="co-text">+91 7339481237</i>
            </div>

            <a
              className="co-button1"
              href="https://www.google.co.in/maps/place/PSG+College+of+Arts+%26+Science/@11.0332141,77.0316629,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba858526b5c0591:0x6c452206816788d4!8m2!3d11.0332088!4d77.0338516?hl=en&authuser=0"
            >
              Locate Us
            </a>
          </div>
          <div className="co-right-box">
            <h2 className="cort-h1">Connect with us</h2>
            <div className="co-social_media">
              <ul className="cort-ul">
                <li className="cort-li">
                  <a className="cort-a" href="#">
                    <span>
                      <FontAwesomeIcon icon={faFacebook} />
                    </span>
                  </a>
                </li>
                <li className="cort-li">
                  <a className="cort-a" href="#">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="cort-li">
                  <a className="cort-a" href="#">
                    <i className="fab fa-google-plus-g" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="cort-li">
                  <a className="cort-a" href="#">
                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="cort-li">
                  <a className="cort-a" href="#">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
