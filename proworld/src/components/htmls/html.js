import React from "react";
import htmllogo from "./../../assets/mainlogoroh.jpg";
import "./htmlr.css";
export default function Html() {
  return (
    <div className="htmlpg">
      <h3 class="htlogo1">PRO WORLD</h3>
      <img class="htlogo" src={htmllogo} alt="main " />
      <div class="htmenu">
        <ul class="ht-ul">
          <li class="ht-li">
            <a class="ht-a" href="./main.html">
              Home
            </a>
          </li>
          <li class="ht-li">
            <a class="ht-a" href="./course.html">
              Courses
            </a>
          </li>
          <li class="ht-li">
            <a class="ht-a" href="./contact.html">
              Contact us
            </a>
          </li>
          <li class="ht-li">
            <a class="ht-a" href="./about.html">
              About
            </a>
          </li>
        </ul>
      </div>
      <div class="ht-container">
        <h3 class="htcon-h3">HTML Tutorial</h3>
        <div class="htcon-content">
          <a class="htcon-a" href="./html1.html">
            <p class="htcon-p">HTML Introduction</p>
          </a>
          <a class="htcon-a" href="./tag.html">
            <p class="htcon-p">HTML Tags</p>
          </a>
          <a class="htcon-a" href="./element.html">
            <p class="htcon-p">HTML Elements</p>
          </a>
          <a class="htcon-a" href="./attributes.html">
            <p class="htcon-p">HTML Attributes</p>
          </a>
          <a class="htcon-a" href="./heading.html">
            <p class="htcon-p">HTML Headings</p>
          </a>
          <a class="htcon-a" href="./paragraph.html">
            <p class="htcon-p">HTML Paragraphs</p>
          </a>
          <a
            class="htcon-a"
            href="https://forms.gle/p4M4YjYaYyFYtWDz9"
            target="_blank"
          >
            <p class="htcon-p">HTML Quiz</p>
          </a>
        </div>
      </div>
      <div class="htmain-part">
        <h1 class="htm-h1">HTML Introduction</h1>

        <p class="htmp1-p">
          HTML is the standard markup language for creating Web pages.
        </p>

        <h2 class="htmp-h2">What is HTML?</h2>
        <ul class="htmp-ul">
          <li class="htmp-li">HTML stands for Hyper Text Markup Language</li>
          <li class="htmp-li">
            HTML is the standard markup language for creating Web pages
          </li>
          <li class="htmp-li">HTML describes the structure of a Web page</li>
          <li class="htmp-li">HTML consists of a series of elements</li>
          <li class="htmp-li">
            HTML elements tell the browser how to display the content
          </li>
          <li class="htmp-li">
            HTML elements label pieces of content such as "this is a heading",
            "this is a paragraph", "this is a link", etc.
          </li>
        </ul>

        <div class="htm-part2">
          <h1 class="htm-h1">A Simple HTML Document Contains</h1>

          <ul class="htp2-ul">
            <li class="htp2-li">
              <xmp class="htp2-x1">
                DOCTYPE html--declaration defines that this document is an HTML5
                document.
              </xmp>
            </li>
            <li class="htp2-li">
              <xmp class="htp2-x2">
                html-- The element is the root element of an HTML page
              </xmp>
            </li>

            <li class="htp2-li">
              <xmp class="htp2-x3">
                head--The element contains meta information about the HTML page.
              </xmp>
            </li>
            <li class="htp2-li">
              <xmp class="htp2-x4">
                title-- The element specifies a title for the HTML page.
              </xmp>
            </li>

            <li class="htp2-li">
              <xmp class="htp2-x5">
                body--The element defines the document's body, and is a
                container for all the visible contents.
              </xmp>
            </li>
            <li class="htp2-li">
              <xmp class="htp2-x6">
                h1-- The element defines a large heading.
              </xmp>
            </li>
            <li class="htp2-li">
              <xmp class="htp2-x7">p--The element defines a paragraph.</xmp>
            </li>
          </ul>
        </div>
      </div>
      <div class="htbtn">
        <a class="htbtna" href="./tag.html">
          Next
        </a>
      </div>

      <div class="ht-footer">
        <div class="htmain-content">
          <div class="htleft-box">
            <h2 class="htlt-h2">Quick Links</h2>
            <ul class="htlt-ul">
              <li class="htlt-li">
                <a class="htlt-a" href="./main.html ">
                  Courses
                </a>
              </li>
              <li class="htlt-li">
                <a class="htlt-a" href="# ">
                  Certificates
                </a>
              </li>
              <li class="htlt-li">
                <a class="htlt-a" href="./contact.html">
                  Help
                </a>
              </li>
              <li class="htlt-li">
                <a class="htlt-a" href="./main.html ">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div class="htcenter-box">
            <h2 class="htce-h2">Address</h2>
            <div class="ht-location">
              <i class="fas fa-map-marker-alt"></i>
              <i class="ht-text">Coimbatore,Tamilnadu</i>
            </div>
            <div class="ht-mail">
              <i class="fas fa-envelope"></i>
              <i class="ht-text">talktorohini21@gmail.com</i>
            </div>
            <div class="ht-phone">
              <i class="fas fa-phone-alt"></i>
              <i class="ht-text">+91 7339481237</i>
            </div>

            <a
              class="htce-button"
              href="https://www.google.co.in/maps/place/PSG+College+of+Arts+%26+Science/@11.0332141,77.0316629,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba858526b5c0591:0x6c452206816788d4!8m2!3d11.0332088!4d77.0338516?hl=en&authuser=0 "
            >
              Locate Us
            </a>
          </div>
          <div class="htright-box">
            <h2 class="htrt-h2">Connect with us</h2>
            <div class="htsocial_media">
              <ul class="htrt-ul">
                <li class="htrt-li">
                  <a class="htrt-a" href="# ">
                    <i class="fab fa-facebook" aria-hidden="true "></i>
                  </a>
                </li>
                <li class="htrt-li">
                  <a class="htrt-a" href="# ">
                    <i class="fab fa-twitter" aria-hidden="true "></i>
                  </a>
                </li>
                <li class="htrt-li">
                  <a class="htrt-a" href="# ">
                    <i class="fab fa-google-plus-g" aria-hidden="true "></i>
                  </a>
                </li>
                <li class="htrt-li">
                  <a class="htrt-a" href="# ">
                    <i class="fab fa-linkedin" aria-hidden="true "></i>
                  </a>
                </li>
                <li class="htrt-li">
                  <a class="htrt-a" href="# ">
                    <i class="fab fa-instagram" aria-hidden="true "></i>
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
