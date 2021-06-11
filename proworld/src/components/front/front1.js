import React from "react";
import { Link } from "react-router-dom";
import backg from "../../../src/assets/ini.jpg";
import mainlogo from "./../../assets/mainlogoroh.jpg";
import { useEffect } from "react";
import ReactDom from "react-dom";
import "./style.css";

export default function Front1() {
  useEffect(() => {
    window.scroll = (0, 0);
  }, []);
  return (
    <div className="mainpage">
      <div className="back">
        <img src={backg} />
      </div>
      <h3 className="main-head1">PRO WORLD</h3>
      <div className="container">
        <Link className="main-btn1" to="/about">
          Look It!
        </Link>
      </div>
      <p className="main-p1">
        You are browsing for the best resource for
        <b className="main-b"> Online Education</b>
      </p>
      <img className="logo" src={mainlogo} alt="main " />
      <div className="menu">
        <ul className="menu-ul">
          <div className="menu-li">
            <li>
              <Link className="menu-a" to="/course">
                Courses
              </Link>
            </li>
            <li>
              <Link className="menu-a" to="/contact">
                Contact us
              </Link>
            </li>
            <li>
              <Link className="menu-a" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="menu-a" to="/mycourse">
                My Enrollments
              </Link>
            </li>
          </div>
        </ul>
      </div>
      <div className="social_media">
        <ul className="main-soc">
          <li className="msoc-li">
            <Link className="msoc-a" to="#">
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </Link>
          </li>
          <li className="msoc-li">
            <Link className="msoc-a" to="#">
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </Link>
          </li>
          <li class="msoc-li">
            <Link class="msoc-a" to="#">
              <i class="fab fa-google-plus-g" aria-hidden="true"></i>
            </Link>
          </li>
          <li className="msoc-li">
            <Link className="msoc-a" to="#">
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </Link>
          </li>
          <li className="msoc-li">
            <Link className="msoc-a" to="#">
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </Link>
          </li>
        </ul>
      </div>

      <div className="search_box">
        <input
          className="search-txt "
          type="text"
          name=""
          id=""
          placeholder="Type to search"
        />
        <Link className="search_btn" to="#">
          <i className="fas fa-search"></i>
        </Link>
      </div>
      <div className="button1">
        <Link to="/login">
          <button className="mbtn1">Login</button>
        </Link>
      </div>
    </div>
  );
}
