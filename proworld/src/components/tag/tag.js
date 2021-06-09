import React from "react";
import "./tagr.css";
import taglogo from "./../../assets/mainlogoroh.jpg";

export default function Tag() {
  return (
    <div className="tagpg">
      <h3 className="tag-logo1">PRO WORLD</h3>
      <img className="tag-logo" src={taglogo} alt="main " />
      <div className="tag-menu">
        <ul className="tag-ul">
          <li className="tag-li">
            <a className="tag-a" href="./main.html">
              Home
            </a>
          </li>
          <li className="tag-li">
            <a className="tag-a" href="./course.html">
              Courses
            </a>
          </li>
          <li className="tag-li">
            <a className="tag-a" href="./contact.html">
              Contact us
            </a>
          </li>
          <li className="tag-li">
            <a className="tag-a" href="./about.html">
              About
            </a>
          </li>
        </ul>
      </div>
      <div className="tag-container">
        <h3 className="tag-h3">HTML Tutorial</h3>
        <div className="tag-content">
          <a className="tagcon-a" href="./html1.html">
            <p className="tagcon-p">HTML Introduction</p>
          </a>
          <a className="tagcon-a" href="./tag.html">
            <p className="tagcon-p">HTML Tags</p>
          </a>
          <a className="tagcon-a" href="./element.html">
            <p className="tagcon-p">HTML Elements</p>
          </a>
          <a className="tagcon-a" href="./attributes.html">
            <p className="tagcon-p">HTML Attributes</p>
          </a>
          <a className="tagcon-a" href="./heading.html">
            <p className="tagcon-p">HTML Headings</p>
          </a>
          <a className="tagcon-a" href="./paragraph.html">
            <p className="tagcon-p">HTML Paragraphs</p>
          </a>
          <a
            className="tagcon-a"
            href="https://forms.gle/p4M4YjYaYyFYtWDz9"
            target="_blank"
          >
            <p className="tagcon-p">HTML Quiz</p>
          </a>
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
              browsers to display web pages correctly.{" "}
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
        <a className="tcon-btna1" href="./element.html">
          Next
        </a>
        <a className="tcon-btna2" href="./html.html">
          Previous
        </a>
      </div>

      <div className="tag-foo">
        <div className="tmain-content">
          <div className="tleft-box">
            <h2 className="tleft-h2">Quick Links</h2>
            <ul className="tleft-ul">
              <li className="tleft-li">
                <a className="tleft-a" href="./course.html">
                  Courses
                </a>
              </li>
              <li className="tleft-li">
                <a className="tleft-a" href="# ">
                  Certificates
                </a>
              </li>
              <li className="tleft-li">
                <a className="tleft-a" href="./contact.html">
                  Help
                </a>
              </li>
              <li className="tleft-li">
                <a className="tleft-a" href="./main.html">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div className="tcenter-box">
            <h2 className="tce-h2">Address</h2>
            <div className="tce-location">
              <i className="fas fa-map-marker-alt"></i>
              <i className="tce-text">Coimbatore,Tamilnadu</i>
            </div>
            <div className="tce-mail">
              <i className="fas fa-envelope"></i>
              <i className="tce-text">talktorohini21@gmail.com</i>
            </div>
            <div className="tce-phone">
              <i className="fas fa-phone-alt"></i>
              <i className="tce-text">+91 7339481237</i>
            </div>

            <a
              className="tce-button"
              href="https://www.google.co.in/maps/place/PSG+College+of+Arts+%26+Science/@11.0332141,77.0316629,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba858526b5c0591:0x6c452206816788d4!8m2!3d11.0332088!4d77.0338516?hl=en&authuser=0 "
            >
              Locate Us
            </a>
          </div>
          <div className="tright-box">
            <h2 className="trt-h2">Connect with us</h2>
            <div className="tsocial_media">
              <ul className="trt-ul">
                <li className="trt-li">
                  <a className="trt-a" href="# ">
                    <i className="fab fa-facebook" aria-hidden="true "></i>
                  </a>
                </li>
                <li className="trt-li">
                  <a className="trt-a" href="# ">
                    <i className="fab fa-twitter" aria-hidden="true "></i>
                  </a>
                </li>
                <li className="trt-li">
                  <a className="trt-a" href="# ">
                    <i className="fab fa-google-plus-g" aria-hidden="true "></i>
                  </a>
                </li>
                <li className="trt-li">
                  <a className="trt-a" href="# ">
                    <i className="fab fa-linkedin" aria-hidden="true "></i>
                  </a>
                </li>
                <li className="trt-li">
                  <a className="trt-a" href="# ">
                    <i className="fab fa-instagram" aria-hidden="true "></i>
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
