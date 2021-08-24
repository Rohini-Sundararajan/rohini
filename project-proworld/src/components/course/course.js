import React from "react";
import { useEffect } from "react";
import "./courser.css";
import mclogo from "./../../assets/mainlogoroh.jpg";
import htmlph from "./../../assets/html.jpg";
import cssph from "./../../assets/css.jpeg";
import javaph from "./../../assets/javascript.png";
import htmlcard from "./../../assets/html1.png";
import css from "./../../assets/css1.png";
import cplus from "../../assets/c++.png";
import javas from "./../../assets/js.png";
import python from "../../assets/python.jpg";
import Card from "./card.js";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function Course() {
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
  var courseitem = [
    {
      img: htmlcard,
      name: "The Web Tool - HTML",
    },
    {
      img: css,
      name: "The Style Tool - CSS",
    },
  ];
  var coursearr = [];
  var n = courseitem.length;
  for (let i = 0; i < n; i++) {
    var array1 = courseitem.slice(i * 2, (i + 1) * 2);
    coursearr.push(
      <div>
        {array1.map((arr) => (
          <div className="cocrd2">
            <Card arrcd={arr} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="coursepage">
      <img className="cologo" src={mclogo} alt="main " />
      <h3 className="cologo1">PRO WORLD</h3>
      <div className="comenu">
        <ul className="co-ul">
          <li className="co-li">
            <Link className="co-a" to="/">
              Home
            </Link>
          </li>
          <li className="co-li">
            <Link className="co-a co2" to="/course">
              Courses
            </Link>
          </li>
          <li className="co-li">
            <Link className="co-a" to="/contact">
              Contact us
            </Link>
          </li>
          <li className="co-li">
            <Link className="co-a" to="/about">
              About
            </Link>
          </li>
        </ul>
        {logout}
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
      <div>{coursearr}</div>
      {/* <div className="co-container1">
        <div className="co-box">
          <div className="co-imgBx">
            <img className="co-img2" src={htmlcard} alt="html" />
            <h3 className="co-head1">The Web Tool - HTML5</h3>
          </div>
          <div className="co-button">
            <Link className="co-enrol" to="/enroll">
              Enroll Now
            </Link>
          </div>
        </div>
      </div> */}
      <h2 className="uptlte">Upcoming Events</h2>
      <div className="upcmng">
        <marquee behavior=" " directon="">
          <div className="upcard1">
            <img className="upimg1" src={javas} alt="javascript" />
            <h3 className="upcrd"> The language for programming web pages</h3>
            <p className="upp">Upcoming!!</p>
          </div>
          <div className="upcard2">
            <img className="upimg2" src={python} alt="javascript" />
            <h3 className="upcrd1"> A popular programming language</h3>
            <p className="upp1">Upcoming!!</p>
          </div>
          <div className="upcard3">
            <img className="upimg3" src={cplus} alt="javascript" />
            <h3 className="upcrd2"> A programming language</h3>
            <p className="upp2">Upcoming!!</p>
          </div>
        </marquee>
      </div>

      <div className="co-footer">
        <div className="co-main-content">
          <div className="co-left-box">
            <h2 className="com-h1">Quick Links</h2>
            <ul className="com-ul">
              <li className="com-li">
                <Link className="com-a" to="/">
                  Home
                </Link>
              </li>
              <li className="com-li">
                <Link className="com-a" to="/mycourse">
                  My Enrollments
                </Link>
              </li>
              <li className="com-li">
                <Link className="com-a" to="/contact">
                  Help
                </Link>
              </li>
              <li className="com-li">
                <Link className="com-a" to="/course">
                  Courses
                </Link>
              </li>
            </ul>
          </div>
          <div className="co-center-box">
            <h2 className="coce-h1">Address</h2>
            <div className="co-location">
              <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <i className="co-text">Coimbatore,Tamilnadu</i>
            </div>
            <div className="co-mail">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <i className="co-text">talktorohini21@gmail.com</i>
            </div>
            <div className="co-phone">
              <span>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              <i className="co-text">+91 7339481237</i>
            </div>

            <Link
              className="co-button1"
              to="https://www.google.co.in/maps/place/PSG+College+of+Arts+%26+Science/@11.0332141,77.0316629,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba858526b5c0591:0x6c452206816788d4!8m2!3d11.0332088!4d77.0338516?hl=en&authuser=0"
            >
              Locate Us
            </Link>
          </div>
          <div className="co-right-box">
            <h2 className="cort-h1">Connect with us</h2>
            <div className="co-social_media">
              <ul className="cort-ul">
                <li className="cort-li">
                  <Link className="cort-a" to="#">
                    <span>
                      <FontAwesomeIcon className="cofb" icon={faFacebook} />
                    </span>
                  </Link>
                </li>
                <li className="cort-li">
                  <Link className="cort-a" to="#">
                    <span>
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                  </Link>
                </li>
                <li className="cort-li">
                  <Link className="cort-a" to="#">
                    <span>
                      <FontAwesomeIcon icon={faGooglePlus} />
                    </span>
                  </Link>
                </li>
                <li className="cort-li">
                  <Link className="cort-a" to="#">
                    <span>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </span>
                  </Link>
                </li>
                <li className="cort-li">
                  <Link className="cort-a" to="#">
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
