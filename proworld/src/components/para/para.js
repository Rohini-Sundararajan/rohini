import React from "react";
import "./parar.css";
import { Link } from "react-router-dom";
import paralogo from "./../../assets/mainlogoroh.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function Para() {
  return (
    <div className="parapg">
      <h3 className="paralogo1">PRO WORLD</h3>
      <img className="paralogo" src={paralogo} alt="main " />
      <div className="paramenu">
        <ul className="paramenuul">
          <li className="paramenuli">
            <Link className="paramenua" to="/">
              Home
            </Link>
          </li>
          <li className="paramenuli">
            <Link className="paramenua" to="/course">
              Courses
            </Link>
          </li>
          <li className="paramenuli">
            <Link className="paramenua" to="/contact">
              Contact us
            </Link>
          </li>
          <li className="paramenuli">
            <Link className="paramenua" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>

      <div className="paracontainer">
        <h3 className="parah3">HTML Tutorial</h3>
        <div className="paracontent">
          <Link className="paraconta" to="/html">
            <p className="paracontp">HTML Introduction</p>
          </Link>
          <Link className="paraconta" to="/tag">
            <p className="paracontp">HTML Tags</p>
          </Link>
          <Link className="paraconta" to="/element">
            <p className="paracontp">HTML Elements</p>
          </Link>
          <Link className="paraconta" to="/attribute">
            <p className="paracontp">HTML Attributes</p>
          </Link>
          <Link className="paraconta" to="/head">
            <p className="paracontp">HTML Headings</p>
          </Link>
          <Link className="paraconta" to="/para">
            <p className="paracontp a6">HTML Paragraphs</p>
          </Link>
          <Link
            className="paraconta"
            to="https://forms.gle/p4M4YjYaYyFYtWDz9"
            target="_blank"
          >
            <p className="paracontp">HTML Quiz</p>
          </Link>
        </div>
      </div>
      <div className="parapara1">
        <h3 className="parahead1">HTML Paragraphs</h3>
        <p className="parap1">
          A paragraph always starts on a new line, and is usually a block of
          text.
        </p>
        <xmp className="parax1">The HTML p element defines a paragraph.</xmp>
        <p className="parap2">
          {" "}
          A paragraph always starts on a new line, and browsers automatically{" "}
          <br /> add some white space (a margin) before and after a paragraph.{" "}
          <br /> Example:{" "}
        </p>
        <xmp className="parax2">
          <p>This is a paragraph.</p>
          <p>This is another paragraph.</p>
        </xmp>
        <h3 className="parahead2"> HTML Display</h3>
        <p className="parap3">
          You cannot be sure how HTML will be displayed. <br /> Large or small
          screens, and resized windows will create different results. <br />{" "}
          With HTML, you cannot change the display by adding extra spaces or
          extra lines in your HTML code. <br /> The browser will automatically
          remove any extra spaces and lines when the page is displayed
        </p>

        <h3 className="parahead3">HTML Horizontal Rules</h3>
        <xmp className="parax3">
          The hr tag defines a thematic break in an HTML page, and is most often
          displayed as a horizontal rule.
          <br /> The hr element is used to separate content (or define a change)
          in an HTML page
        </xmp>

        <xmp className="parax4">
          Example :<h1>This is heading 1</h1>
          <p>This is some text.</p>
          <hr />
          <h2>This is heading 2</h2>
          <p>This is some other text.</p>
          <hr />
        </xmp>
        <h3 className="parahead4">HTML Line Breaks</h3>
        <xmp className="parax5">The HTML br element defines a line break. </xmp>
        <xmp className="parax6">
          Use br tag if you want a line break (a new line) without starting a
          new paragraph.
        </xmp>
        <xmp className="parax7">
          Example :
          <p>
            This is
            <br />a paragraph
            <br />
            with line breaks.
          </p>
        </xmp>
      </div>
      <div className="parabtn">
        <Link to="/para" className="paranext">
          Next
        </Link>
        <Link to="/attribute" className="paraprevious">
          Previous
        </Link>
      </div>

      <div className="parafooter">
        <div className="paramain-content">
          <div className="paraleft-box">
            <h2 className="paraquick">Quick Links</h2>
            <ul className="paraleftul">
              <li className="paraleftli">
                <Link className="paralefta" to="/">
                  Home
                </Link>
              </li>
              <li className="paraleftli">
                <Link className="paralefta" to="/enroll ">
                  My Enrollments
                </Link>
              </li>
              <li className="paraleftli">
                <Link className="paralefta" to="/contact">
                  Help
                </Link>
              </li>
              <li className="paraleftli">
                <Link className="paralefta" to="/course">
                  Course
                </Link>
              </li>
            </ul>
          </div>
          <div className="paracenter-box">
            <h2 className="paraaddress">Address</h2>
            <div className="paralocation">
              <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <i className="paratext">Coimbatore,Tamilnadu</i>
            </div>
            <div className="paramail">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <i className="text">talktorohini21@gmail.com</i>
            </div>
            <div className="paraphone">
              <span>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              <i className="paratext">+91 7339481237</i>
            </div>

            <Link
              className="parabutton"
              to="https://www.google.co.in/maps/place/PSG+College+of+Arts+%26+Science/@11.0332141,77.0316629,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba858526b5c0591:0x6c452206816788d4!8m2!3d11.0332088!4d77.0338516?hl=en&authuser=0 "
            >
              Locate Us
            </Link>
          </div>
          <div className="pararight-box">
            <h2 className="paraquick">Connect with us</h2>
            <div className="parasocial_media">
              <ul className="parasocul">
                <li className="parasocli">
                  <Link to="# " className="parasoca">
                    <span>
                      <FontAwesomeIcon icon={faFacebook} />
                    </span>
                  </Link>
                </li>
                <li className="parasocli">
                  <Link to="# " class="parasoca">
                    <span>
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                  </Link>
                </li>
                <li className="parasocli">
                  <Link to="# " className="parasoca">
                    <span>
                      <FontAwesomeIcon icon={faGooglePlus} />
                    </span>
                  </Link>
                </li>
                <li className="parasocli">
                  <Link to="# " className="parasoca">
                    <span>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </span>
                  </Link>
                </li>
                <li className="parasocli">
                  <Link to="# " className="parasoca">
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
