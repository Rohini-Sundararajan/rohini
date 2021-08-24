import React from "react";
import { useEffect } from "react";
import "./enrollr.css";
import { Link } from "react-router-dom";
import enmainl from "./../../assets/mainlogoroh.jpg";
import htmlcard from "./../../assets/html1.png";
import css from "./../../assets/css1.png";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Cookies from "universal-cookie";
export default function Enroll(props) {
  useEffect(() => {
    window.scroll = (0, 0);
  }, []);
  const cookies = new Cookies();
  var usr = cookies.get("user");
  var nameid = props.match.params.name;
  var id = nameid.slice(1);
  console.log(id);
  var enrlitem = [
    {
      imag: htmlcard,
      name: "The Web Tool - HTML",
      l01: "Write HTML code.",
      l02: "To set up HTML document.",
      l03: " Create your own Awesome webpage.",
      l04: "Format HTML elements",
      l05: "Anyone who wants to learn to create websites, be it a beginner or intermediate programmer.",
      l06: "If you want to start your carrier as a frontend web developer, HTML is a must along with other technologies.",
      l07: "HTML is fun to write and easy to get started with, no need to set up compiler or the environment.",
      l08: "Nowadays every business, be it small or large needs a website, so there is a lot of opportunity for a web developer.",
      l09: "40,000 USD per year",
      l10: " You won't need to know anything before taking this course",
    },
    {
      imag: css,
      name: "The Style Tool - CSS",
      l01: "Understand how HTML and CSS work together.",
      l02: "Apply CSS styling to HTML elements.",
      l03: "Build beautiful websites which don't just contain great content but also look good.",
      l04: "Understand the concepts and theory behind CSS and certain CSS features.",
      l05: " CSS is designed to save you time and we show you how to use it effectively to achieve results.",
      l06: "Being able to learn CSS will give you a strong background to learn other web design and app design languages.",
      l07: "Web development is required in each an every sector, having CSS in your skill set is a good advantage.",
      l08: "40,000 USD per year",
      l09: "Should have basic knowledge of HTML and its tags.",
      l10: "Having creativity and good taste of color combination is a plus point.",
    },
  ];
  var enrl1 = enrlitem.filter((r) => r.name === id);
  var enroll = async () => {
    const enrollcart = {
      Name: enrl1[0].name,
      Image: enrl1[0].imag,
      usr: usr,
    };
    console.log(enrollcart);
    await axios.post("http://localhost:2000/proworld/course1", enrollcart);
  };
  return (
    <div className="enrollpg">
      <img class="enlogo" src={enmainl} alt="main " />
      <h3 className="enlogo1">PRO WORLD</h3>
      <div className="en-menu">
        <ul className="en-ul">
          <li className="en-li">
            <Link className="en-a" to="/">
              Home
            </Link>
          </li>
          <li className="en-li">
            <Link className="en-a" to="/course">
              Courses
            </Link>
          </li>
          <li className="en-li">
            <Link className="en-a" to="/contact">
              Contact us
            </Link>
          </li>
          <li className="en-li">
            <Link className="en-a" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>

      <div className="en-container">
        <h2 className="enco-h1">{enrl1[0].name}</h2>
        <img className="enco-img1" src={enrl1[0].imag} alt="html" />
        <Link className="enco-a" to="/mycourse">
          <button className="enco-btn" onClick={enroll}>
            Enroll Now!
          </button>
        </Link>
      </div>

      <div className="en-container1">
        <div className="en-right1">
          <h3 className="enrt-h3">What Will I Learn?</h3>
          <ul className="enrt-ul">
            <div className="enrt-li">
              <li>{enrl1[0].l01}</li>
              <li>{enrl1[0].l02}</li>
              <li>{enrl1[0].l03}</li>
              <li>{enrl1[0].l04}</li>
            </div>
          </ul>
        </div>
        <div className="en-right2">
          <h3 className="enrt2-h3">Who is the target audience?</h3>
          <ul className="enrt2-ul">
            <li className="enrt2-li">{enrl1[0].l05}</li>
            <li className="enrt2-li">{enrl1[0].l06}</li>
          </ul>
        </div>
        <div className="en-right3">
          <h3 className="enrt3-h3">Benefits</h3>
          <ul className="enrt3-ul">
            <li className="enrt3-li">{enrl1[0].l07}</li>
            <li className="enrt3-li">{enrl1[0].l08}</li>
          </ul>
        </div>
        <div className="en-right4">
          <h3 className="enrt4-h3">Salary</h3>
          <ul className="enrt4-ul">
            <li className="enrt4-li"> {enrl1[0].l09}</li>
          </ul>
        </div>
        <div className="en-right5">
          <h3 className="enrt5-h3">Requirements</h3>
          <ul className="enrt5-ul">
            <li className="enrt5-li">{enrl1[0].l10}</li>
          </ul>
        </div>
      </div>

      <div className="en-footer">
        <div className="en-main-content">
          <div className="en-left-box">
            <h2 className="enlt-h2">Quick Links</h2>
            <ul className="enlt-ul">
              <li className="enlt-li">
                <Link className="enlt-a" to="/">
                  Home
                </Link>
              </li>
              <li className="enlt-li">
                <Link className="enlt-a" to="/mycourse">
                  My Enrollments
                </Link>
              </li>
              <li className="enlt-li">
                <Link className="enlt-a" to="/contact">
                  Help
                </Link>
              </li>
              <li className="enlt-li">
                <Link className="enlt-a" to="/course">
                  Courses
                </Link>
              </li>
            </ul>
          </div>
          <div className="en-center-box">
            <h2 className="ence-h2">Address</h2>
            <div className="ence-location">
              <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <i className="ence-text">Coimbatore,Tamilnadu</i>
            </div>
            <div className="ence-mail">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <i className="ence-text">talktorohini21@gmail.com</i>
            </div>
            <div className="ence-phone">
              <span>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              <i className="ence-text">+91 7339481237</i>
            </div>

            <Link
              className="ence-button"
              to="https://www.google.co.in/maps/place/PSG+College+of+Arts+%26+Science/@11.0332141,77.0316629,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba858526b5c0591:0x6c452206816788d4!8m2!3d11.0332088!4d77.0338516?hl=en&authuser=0"
            >
              Locate Us
            </Link>
          </div>
          <div className="en-right-box">
            <h2 className="enrtf-h2">Connect with us</h2>
            <div className="enrtf-social_media">
              <ul className="enrtf-ul">
                <li className="enrtf-li">
                  <Link className="enrtf-a" to="#">
                    <span>
                      <FontAwesomeIcon icon={faFacebook} />
                    </span>
                  </Link>
                </li>
                <li className="enrtf-li">
                  <Link className="enrtf-a" to="#">
                    <span>
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                  </Link>
                </li>
                <li className="enrtf-li">
                  <Link className="enrtf-a" to="#">
                    <span>
                      <FontAwesomeIcon icon={faGooglePlus} />
                    </span>
                  </Link>
                </li>
                <li className="enrtf-li">
                  <Link className="enrtf-a" to="#">
                    <span>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </span>
                  </Link>
                </li>
                <li className="enrtf-li">
                  <Link className="enrtf-a" href="# ">
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
