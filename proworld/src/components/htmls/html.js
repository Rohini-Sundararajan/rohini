import React from "react";
import htmllogo from "./../../assets/mainlogoroh.jpg";
import "./htmlr.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function Html() {
  return (
    <div className="htmlpg">
      <h3 className="htlogo1">PRO WORLD</h3>
      <img className="htlogo" src={htmllogo} alt="main " />
      <div className="htmenu">
        <ul className="ht-ul">
          <li className="ht-li">
            <Link className="ht-a" to="/">
              Home
            </Link>
          </li>
          <li className="ht-li">
            <Link className="ht-a" to="/course">
              Courses
            </Link>
          </li>
          <li className="ht-li">
            <Link className="ht-a" to="/contact">
              Contact us
            </Link>
          </li>
          <li className="ht-li">
            <Link className="ht-a" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="ht-container">
        <h3 className="htcon-h3">HTML Tutorial</h3>
        <div className="htcon-content">
          <Link className="htcon-a" to="/html">
            <p className="htcon-p a1">HTML Introduction</p>
          </Link>
          <Link className="htcon-a" to="/tag">
            <p className="htcon-p">HTML Tags</p>
          </Link>
          <Link className="htcon-a" to="/element">
            <p className="htcon-p">HTML Elements</p>
          </Link>
          <Link className="htcon-a" to="/attribute">
            <p className="htcon-p">HTML Attributes</p>
          </Link>
          <Link className="htcon-a" to="/head">
            <p className="htcon-p">HTML Headings</p>
          </Link>
          <Link className="htcon-a" to="/para">
            <p className="htcon-p">HTML Paragraphs</p>
          </Link>
          <Link
            className="htcon-a"
            to="https://forms.gle/p4M4YjYaYyFYtWDz9"
            target="_blank"
          >
            <p className="htcon-p">HTML Quiz</p>
          </Link>
        </div>
      </div>
      <div className="htmain-part">
        <h1 className="htm-h1">HTML Introduction</h1>

        <p className="htmp1-p">
          HTML is the standard markup language for creating Web pages.
        </p>

        <h2 className="htmp-h2">What is HTML?</h2>
        <ul className="htmp-ul">
          <li className="htmp-li">
            HTML stands for Hyper Text Markup Language
          </li>
          <li className="htmp-li">
            HTML is the standard markup language for creating Web pages
          </li>
          <li className="htmp-li">
            HTML describes the structure of a Web page
          </li>
          <li className="htmp-li">HTML consists of a series of elements</li>
          <li className="htmp-li">
            HTML elements tell the browser how to display the content
          </li>
          <li className="htmp-li">
            HTML elements label pieces of content such as "this is a heading",
            "this is a paragraph", "this is a link", etc.
          </li>
        </ul>

        <div className="htm-part2">
          <h1 className="htm-h1">A Simple HTML Document Contains</h1>

          <ul className="htp2-ul">
            <li className="htp2-li">
              <xmp className="htp2-x1">
                DOCTYPE html--declaration defines that this document is an HTML5
                document.
              </xmp>
            </li>
            <li className="htp2-li">
              <xmp className="htp2-x2">
                html-- The element is the root element of an HTML page
              </xmp>
            </li>

            <li className="htp2-li">
              <xmp className="htp2-x3">
                head--The element contains meta information about the HTML page.
              </xmp>
            </li>
            <li className="htp2-li">
              <xmp className="htp2-x4">
                title-- The element specifies a title for the HTML page.
              </xmp>
            </li>

            <li className="htp2-li">
              <xmp className="htp2-x5">
                body--The element defines the document's body, and is a
                container for all the visible contents.
              </xmp>
            </li>
            <li className="htp2-li">
              <xmp className="htp2-x6">
                h1-- The element defines a large heading.
              </xmp>
            </li>
            <li className="htp2-li">
              <xmp className="htp2-x7">p--The element defines a paragraph.</xmp>
            </li>
          </ul>
        </div>
      </div>
      <div className="htbtn">
        <Link className="htbtna" to="/tag">
          Next
        </Link>
      </div>

      <div class="ht-footer">
        <div className="htmain-content">
          <div className="htleft-box">
            <h2 className="htlt-h2">Quick Links</h2>
            <ul className="htlt-ul">
              <li className="htlt-li">
                <Link className="htlt-a" to="/ ">
                  Home
                </Link>
              </li>
              <li className="htlt-li">
                <Link className="htlt-a" to="/mycourse ">
                  My Enrollments
                </Link>
              </li>
              <li className="htlt-li">
                <Link className="htlt-a" to="/contact">
                  Help
                </Link>
              </li>
              <li class="htlt-li">
                <Link className="htlt-a" to="/course">
                  Courses
                </Link>
              </li>
            </ul>
          </div>
          <div className="htcenter-box">
            <h2 className="htce-h2">Address</h2>
            <div className="ht-location">
              <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <i className="ht-text">Coimbatore,Tamilnadu</i>
            </div>
            <div className="ht-mail">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <i className="ht-text">talktorohini21@gmail.com</i>
            </div>
            <div className="ht-phone">
              <span>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              <i className="ht-text">+91 7339481237</i>
            </div>

            <Link
              className="htce-button"
              to="https://www.google.co.in/maps/place/PSG+College+of+Arts+%26+Science/@11.0332141,77.0316629,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba858526b5c0591:0x6c452206816788d4!8m2!3d11.0332088!4d77.0338516?hl=en&authuser=0 "
            >
              Locate Us
            </Link>
          </div>
          <div class="htright-box">
            <h2 className="htrt-h2">Connect with us</h2>
            <div className="htsocial_media">
              <ul className="htrt-ul">
                <li className="htrt-li">
                  <Link className="htrt-a" to="# ">
                    <span>
                      <FontAwesomeIcon icon={faFacebook} />
                    </span>
                  </Link>
                </li>
                <li className="htrt-li">
                  <Link className="htrt-a" to="# ">
                    <span>
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                  </Link>
                </li>
                <li className="htrt-li">
                  <Link className="htrt-a" to="# ">
                    <span>
                      <FontAwesomeIcon icon={faGooglePlus} />
                    </span>
                  </Link>
                </li>
                <li className="htrt-li">
                  <Link className="htrt-a" to="# ">
                    <span>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </span>
                  </Link>
                </li>
                <li class="htrt-li">
                  <Link className="htrt-a" to="# ">
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
