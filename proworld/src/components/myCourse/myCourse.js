import React from "react";
import "./myCourser.css";
import myclogo from "./../../assets/mainlogoroh.jpg";
import mychtml from "./../../assets/html1.png";

export default function Mcourse() {
  return (
    <div className="mycpg">
      <img className="myclogo" src={myclogo} alt="main " />
      <div className="mycmenu">
        <ul className="myc-ul">
          <li className="myc-ul">
            <a className="myc-a" href="./main.html">
              Home
            </a>
          </li>
          <li className="myc-ul">
            <a className="myc-a" href="./course.html">
              Courses
            </a>
          </li>
          <li className="myc-ul">
            <a className="myc-a" href="./contact.html">
              Contact us
            </a>
          </li>
          <li className="myc-ul">
            <a className="myc-a" href="./about.html">
              About
            </a>
          </li>
        </ul>
      </div>
      <h2 className="myc-h2">My Enrollments</h2>
      <div className="myc-container1">
        <div className="myc-box">
          <div className="myc-imgBx">
            <progress className="mycprg" value="30" max="100">
              30%
            </progress>
            <img className="myc-img1" src={mychtml} alt="html" />
            <h3 className="myc-head1">The Web Tool - HTML5</h3>
          </div>
          <div className="myc-button">
            <a className="mycbtna" href="#">
              Go To Course
            </a>
          </div>
        </div>
      </div>
      <div className="myc-footer">
        <div className="myc-main-content">
          <div className="myc-left-box">
            <h2 className="myc-h2">Quick Links</h2>
            <ul className="myclt-ul">
              <li className="myclt-li">
                <a className="myclt-a" href="./course.html">
                  Courses
                </a>
              </li>
              <li className="myclt-li">
                <a className="myclt-a" href="#">
                  Certificates
                </a>
              </li>
              <li className="myclt-li">
                <a className="myclt-a" href="./contact.html">
                  Help
                </a>
              </li>
              <li className="myclt-li">
                <a className="myclt-a" href="./main.html">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div className="myc-center-box">
            <h2 className="myce-h2">Address</h2>
            <div className="myce-location">
              <i className="fas fa-map-marker-alt"></i>
              <i className="myce-text">Coimbatore,Tamilnadu</i>
            </div>
            <div className="myce-mail">
              <i className="fas fa-envelope"></i>
              <i className="myce-text">talktorohini21@gmail.com</i>
            </div>
            <div className="myce-phone">
              <i className="fas fa-phone-alt"></i>
              <i className="myce-text">+91 7339481237</i>
            </div>

            <a
              className="myce-button"
              href="https://www.google.co.in/maps/place/PSG+College+of+Arts+%26+Science/@11.0332141,77.0316629,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba858526b5c0591:0x6c452206816788d4!8m2!3d11.0332088!4d77.0338516?hl=en&authuser=0"
            >
              Locate Us
            </a>
          </div>
          <div className="myc-right-box">
            <h2 className="mycrt-h2">Connect with us</h2>
            <div className="mycrt-social_media">
              <ul className="mycrt-ul">
                <li className="mycrt-li">
                  <a className="mycrt-a" href="#">
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="mycrt-li">
                  <a className="mycrt-a" href="#">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="mycrt-li">
                  <a className="mycrt-a" href="#">
                    <i className="fab fa-google-plus-g" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="mycrt-li">
                  <a className="mycrt-a" href="#">
                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="mycrt-li">
                  <a className="mycrt-a" href="#">
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
