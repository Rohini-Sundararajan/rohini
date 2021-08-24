import React from "react";
import { useEffect } from "react";
import "./elementr.css";
import melogo from "./../../assets/mainlogoroh.jpg";
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
export default function Element() {
  useEffect(() => {
    window.scroll = (0, 0);
  }, []);
  return (
    <div className="elementpage">
      <h3 className="ele-logo1">PRO WORLD</h3>
      <img className="ele-logo" src={melogo} alt="main " />
      <div className="ele-menu">
        <ul className="ele-ul">
          <li className="ele-li">
            <Link className="ele-a" to="/">
              Home
            </Link>
          </li>
          <li className="ele-li">
            <Link className="ele-a" to="/course">
              Courses
            </Link>
          </li>
          <li className="ele-li">
            <Link className="ele-a" to="/contact">
              Contact us
            </Link>
          </li>
          <li className="ele-li">
            <Link className="ele-a" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>

      <div className="ele-container">
        <h3 className="ele-h3">HTML Tutorial</h3>
        <div className="ele-content">
          <Link className="elec-a" to="/html">
            <p className="ele-p">HTML Introduction</p>
          </Link>
          <Link className="elec-a" to="/tag">
            <p className="ele-p">HTML Tags</p>
          </Link>
          <Link className="elec-a" to="/element">
            <p className="ele-p a3">HTML Elements</p>
          </Link>
          <Link className="elec-a" to="/attribute">
            <p className="ele-p">HTML Attributes</p>
          </Link>
          <Link className="elec-a" to="/head">
            <p className="ele-p">HTML Headings</p>
          </Link>
          <Link className="elec-a" to="/para">
            <p className="ele-p">HTML Paragraphs</p>
          </Link>
          <Link className="elec-a" to="https://forms.gle/p4M4YjYaYyFYtWDz9">
            <p className="ele-p">HTML Quiz</p>
          </Link>
        </div>
      </div>
      <div className="element-tag">
        <h3 className="ele-head1">HTML Elements</h3>
        <p className="ele-p1">
          An HTML element is defined by a start tag, some content, and an end
          tag.
        </p>

        <p className="ele-p2">
          The HTML element is everything from the start tag to the end tag.
        </p>

        <xmp className="ele-x1">tagname Content goes here... /tagname</xmp>
        <p className="ele-p3">Examples of some HTML elements:</p>

        <p className="ele-x2">h1 My First Heading /h1</p>
        <xmp className="ele-x3">p My first paragraph. /p</xmp>
      </div>
      <div className="element2">
        <table className="eletabl1">
          <tr>
            <th className="elehd1">Start Tag</th>
            <th className="elehd1">Element content</th>
            <th className="elehd1">End Tag</th>
          </tr>
          <tr>
            <td className="eleda1">h1</td>
            <td className="eleda1">My First Heading</td>
            <td className="eleda1">/h1</td>
          </tr>
          <tr>
            <td className="eleda1">p</td>
            <td className="eleda1">My First Paragraph</td>
            <td className="eleda1">/p</td>
          </tr>
          <tr>
            <td className="eleda1">br</td>
            <td className="eleda1">none</td>
            <td className="eleda1">-</td>
          </tr>
        </table>
      </div>
      <div className="element3">
        <h3 className="ele-head2">Nested HTML Elements</h3>
        <p className="ele-p4">
          HTML elements can be nested (this means that elements can contain
          other elements).
          <br /> All HTML documents consist of nested HTML elements.
        </p>
        <h3 className="ele-head4"> Empty HTML Elements</h3>

        <p className="ele-p5">
          HTML elements with no content are called empty elements.
        </p>
        <xmp className="ele-x4">
          The br tag defines a line break, and is an empty element without a
          closing tag:
        </xmp>
        <p className="ele-p6">Example:</p>

        <xmp className="ele-x5">
          <p>
            This is a <br /> paragraph with a line break.
          </p>
        </xmp>
      </div>

      <div className="ele-btn">
        <Link to="/attribute" className="ele-next">
          Next
        </Link>
        <Link to="/tag" className="ele-previous">
          Previous
        </Link>
      </div>

      <div className="ele-footer">
        <div className="ele-main-content">
          <div className="ele-left-box ">
            <h2 className="ele-quick">Quick Links</h2>
            <ul className="ele-leftul">
              <li className="ele-leftli">
                <Link className="ele-lefta" to="/course">
                  Home
                </Link>
              </li>
              <li className="ele-leftli">
                <Link className="ele-lefta" to="/mycourse">
                  My Enrollments
                </Link>
              </li>
              <li className="ele-leftli">
                <Link className="ele-lefta" to="/contact">
                  Help
                </Link>
              </li>
              <li className="ele-leftli">
                <Link className="ele-lefta" to="/course">
                  Courses
                </Link>
              </li>
            </ul>
          </div>
          <div className="ele-center-box ">
            <h2 className="ele-add">Address</h2>
            <div className="ele-location ">
              <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <i className="ele-text ">Coimbatore,Tamilnadu</i>
            </div>
            <div className="ele-mail ">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <i className="tele-ext ">talktorohini21@gmail.com</i>
            </div>
            <div className="ele-phone ">
              <span>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              <i className="ele-text ">+91 7339481237</i>
            </div>

            <Link
              className="ele-button "
              to="https://www.google.co.in/maps/place/PSG+College+of+Arts+%26+Science/@11.0332141,77.0316629,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba858526b5c0591:0x6c452206816788d4!8m2!3d11.0332088!4d77.0338516?hl=en&authuser=0 "
            >
              Locate Us
            </Link>
          </div>
          <div className="ele-right-box ">
            <h2 className="ele-contact">Connect with us</h2>
            <div className="ele-social_media ">
              <ul className="ele-socul">
                <li className="ele-socli">
                  <Link className="ele-soca" to="# ">
                    <span>
                      <FontAwesomeIcon icon={faFacebook} />
                    </span>
                  </Link>
                </li>
                <li className="ele-socli">
                  <Link className="ele-soca" to="# ">
                    <span>
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                  </Link>
                </li>
                <li className="ele-socli ele-goo">
                  <Link className="ele-soca" to="# ">
                    <span>
                      <FontAwesomeIcon icon={faGooglePlus} />
                    </span>
                  </Link>
                </li>
                <li className="ele-socli ele-in ">
                  <Link className="ele-soca" to="# ">
                    <span>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </span>
                  </Link>
                </li>
                <li className="ele-socli ele-insta">
                  <Link className="ele-soca" to="# ">
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
