import React from "react";
import "./enrollr.css";
import enlogo from "./../../assets/html1.png";
import { Link } from "react-router-dom";

export default function Enroll() {
  return (
    <div className="enrollpg">
      {/* <img class="logo" src="./mainlogoroh.jpg" alt="main "/> */}
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
        <h2 className="enco-h1">HTML</h2>
        <img className="enco-img1" src={enlogo} alt="html" />
        <Link className="enco-a" to="/mycourse">
          <button className="enco-btn">Enroll Now!</button>
        </Link>
      </div>
      <div className="en-container1">
        <div className="en-right1">
          <h3 className="enrt-h3">What Will I Learn?</h3>
          <ul className="enrt-ul">
            <div className="enrt-li">
              <li>Write HTML code.</li>
              <li>To set up HTML document.</li>
              <li>Create your own Awesome webpage.</li>
              <li>Format HTML elements</li>
            </div>
          </ul>
        </div>
        <div className="en-right2">
          <h3 className="enrt2-h3">Who is the target audience?</h3>
          <ul className="enrt2-ul">
            <li className="enrt2-li">
              Anyone who wants to learn to create websites, be it a beginner or
              intermediate programmer.
            </li>
            <li className="enrt2-li">
              If you want to start your carrier as a frontend web developer,
              HTML is a must along with other technologies.
            </li>
          </ul>
        </div>
        <div className="en-right3">
          <h3 className="enrt3-h3">Benefits</h3>
          <ul className="enrt3-ul">
            <li className="enrt3-li">
              HTML is fun to write and easy to get started with, no need to set
              up compiler or the environment.
            </li>
            <li className="enrt3-li">
              Nowadays every business, be it small or large needs a website, so
              there is a lot of opportunity for a web developer.
            </li>
          </ul>
        </div>
        <div className="en-right4">
          <h3 className="enrt4-h3">Salary</h3>
          <ul className="enrt4-ul">
            <li className="enrt4-li">40,000 USD per year</li>
          </ul>
        </div>
        <div className="en-right5">
          <h3 className="enrt5-h3">Requirements</h3>
          <ul className="enrt5-ul">
            <li className="enrt5-li">
              You won't need to know anything before taking this course
            </li>
            <li className="enrt5-li">
              Eagerness to learn, and make awesome websites.
            </li>
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
              <i className="fas fa-map-marker-alt"></i>
              <i className="ence-text">Coimbatore,Tamilnadu</i>
            </div>
            <div className="ence-mail">
              <i className="fas fa-envelope"></i>
              <i className="ence-text">talktorohini21@gmail.com</i>
            </div>
            <div className="ence-phone">
              <i className="fas fa-phone-alt"></i>
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
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                  </Link>
                </li>
                <li className="enrtf-li">
                  <Link className="enrtf-a" to="#">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </Link>
                </li>
                <li className="enrtf-li">
                  <Link className="enrtf-a" to="#">
                    <i className="fab fa-google-plus-g" aria-hidden="true"></i>
                  </Link>
                </li>
                <li className="enrtf-li">
                  <Link className="enrtf-a" to="#">
                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                  </Link>
                </li>
                <li className="enrtf-li">
                  <Link className="enrtf-a" to="#  ">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
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
