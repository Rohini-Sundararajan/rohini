import React from "react";
import "./tagr.css";
import taglogo from "./../../assets/mainlogoroh.jpg";
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
export default function Tag() {
  return (
    <div className="tagpg">
      <h3 className="tag-logo1">PRO WORLD</h3>
      <img className="tag-logo" src={taglogo} alt="main " />
      <div className="tag-menu">
        <ul className="tag-ul">
          <li className="tag-li">
            <Link className="tag-a" to="/">
              Home
            </Link>
          </li>
          <li className="tag-li">
            <Link className="tag-a" to="/course">
              Courses
            </Link>
          </li>
          <li className="tag-li">
            <Link className="tag-a" to="/contact">
              Contact us
            </Link>
          </li>
          <li className="tag-li">
            <Link className="tag-a" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="tag-container">
        <h3 className="tag-h3">HTML Tutorial</h3>
        <div className="tag-content">
          <Link className="tagcon-a" to="/html">
            <p className="tagcon-p">HTML Introduction</p>
          </Link>
          <Link className="tagcon-a" to="/tag">
            <p className="tagcon-p a2">HTML Tags</p>
          </Link>
          <Link className="tagcon-a" to="/element">
            <p className="tagcon-p">HTML Elements</p>
          </Link>
          <Link className="tagcon-a" to="/attribute">
            <p className="tagcon-p">HTML Attributes</p>
          </Link>
          <Link className="tagcon-a" to="/head">
            <p className="tagcon-p">HTML Headings</p>
          </Link>
          <Link className="tagcon-a" to="/para">
            <p className="tagcon-p">HTML Paragraphs</p>
          </Link>
          <Link
            className="tagcon-a"
            to="https://forms.gle/p4M4YjYaYyFYtWDz9"
            target="_blank"
          >
            <p className="tagcon-p">HTML Quiz</p>
          </Link>
        </div>
      </div>
      <div className="tag-content">
        <h3 className="tcon-h3">HTML Tags</h3>
        <div className="tcon-part1">
          <ul className="tcon-ul">
            <li className="tcon-li">
              <xmp className="tcon-x1">
                DOCTYPE html -- All HTML documents must start with a document
                type declaration.
              </xmp>
            </li>

            <li className="tcon-li">
              <xmp className="tcon-x2">
                html --The HTML document begins with this tag
              </xmp>
            </li>

            <li className="tcon-li">
              <xmp className="tcon-x3">
                body --The visible part of the HTML document begins with this
                tag
              </xmp>
            </li>
          </ul>
        </div>
        <h3 className="tcon-head1">
          <xmp className="tcon-xmp">DOCTYPE Declaration</xmp>
        </h3>
        <ul className=" tcon-part2">
          <li className="tp2-li">
            <xmp className="tcon-x4">
              The DOCTYPE declaration represents the document type, and helps
              <br /> browsers to display web pages correctly.{" "}
            </xmp>
          </li>
          <li className="tcon-x5">
            It must only appear once, at the top of the page (before any HTML
            tags).{" "}
          </li>
          <li>
            <xmp className="tcon-x6">
              The DOCTYPE declaration is not case sensitive.
            </xmp>
          </li>
        </ul>
        <ul className="tcon-part3">
          <h3 class=" tcon-h3">HTML Headings</h3>
          <li>
            <xmp className="tcon-x7">
              HTML headings are defined with the h1 to h6 tags.
            </xmp>
          </li>
          <li>
            <xmp className="tcon-x8">
              h1 defines the most important heading.
            </xmp>
          </li>
          <li>
            <xmp className="tcon-x9">
              h6 defines the least important heading
            </xmp>
          </li>
          <h3 className="tcon-head3">HTML Paragraphs</h3>
          <li>
            <xmp className="tcon-x10">
              HTML paragraphs are defined with the p tag
            </xmp>
          </li>
          <h3 className="tcon-head4">HTML Links</h3>
          <li>
            <xmp className="tcon-x11">
              HTML links are defined with the a tag
            </xmp>
          </li>
          <p className="tcon-p2">
            The link's destination is specified in the href attribute.
            <br />
            Attributes are used to provide additional information about HTML
            elements.
          </p>
          <h3 className="tcon-head5">HTML Images</h3>
          <li>
            <xmp className="tcon-x12">
              HTML images are defined with the img tag.
            </xmp>
          </li>

          <p className="tcon-p3">
            The source file (src), alternative text (alt), width, and height are
            provided as attributes
          </p>
        </ul>
      </div>
      <div className="tcon-btn">
        <Link className="tcon-btna1" to="/element">
          Next
        </Link>
        <Link className="tcon-btna2" to="/html">
          Previous
        </Link>
      </div>

      <div className="tag-foo">
        <div className="tmain-content">
          <div className="tleft-box">
            <h2 className="tleft-h2">Quick Links</h2>
            <ul className="tleft-ul">
              <li className="tleft-li">
                <Link className="tleft-a" to="/">
                  Home
                </Link>
              </li>
              <li className="tleft-li">
                <Link className="tleft-a" to="/mycourse">
                  My Enrollments
                </Link>
              </li>
              <li className="tleft-li">
                <Link className="tleft-a" to="/contact">
                  Help
                </Link>
              </li>
              <li className="tleft-li">
                <Link className="tleft-a" to="/course">
                  Courses
                </Link>
              </li>
            </ul>
          </div>
          <div className="tcenter-box">
            <h2 className="tce-h2">Address</h2>
            <div className="tce-location">
              <span>
                <FontAwesomeIcon icon={faFacebook} />
              </span>
              <i className="tce-text">Coimbatore,Tamilnadu</i>
            </div>
            <div className="tce-mail">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <i className="tce-text">talktorohini21@gmail.com</i>
            </div>
            <div className="tce-phone">
              <span>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              <i className="tce-text">+91 7339481237</i>
            </div>

            <Link
              className="tce-button"
              href="https://www.google.co.in/maps/place/PSG+College+of+Arts+%26+Science/@11.0332141,77.0316629,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba858526b5c0591:0x6c452206816788d4!8m2!3d11.0332088!4d77.0338516?hl=en&authuser=0 "
            >
              Locate Us
            </Link>
          </div>
          <div className="tright-box">
            <h2 className="trt-h2">Connect with us</h2>
            <div className="tsocial_media">
              <ul className="trt-ul">
                <li className="trt-li">
                  <Link className="trt-a" to="# ">
                    <span>
                      <FontAwesomeIcon icon={faFacebook} />
                    </span>
                  </Link>
                </li>
                <li className="trt-li">
                  <Link className="trt-a" to="# ">
                    <span>
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                  </Link>
                </li>
                <li className="trt-li">
                  <Link className="trt-a" to="# ">
                    <span>
                      <FontAwesomeIcon icon={faGooglePlus} />
                    </span>
                  </Link>
                </li>
                <li className="trt-li">
                  <Link className="trt-a" to="# ">
                    <span>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </span>
                  </Link>
                </li>
                <li className="trt-li">
                  <Link className="trt-a" to="# ">
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
