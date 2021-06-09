import React from "react";
import "./parar.css";
import paralogo from "./../../assets/mainlogoroh.jpg";
export default function Para() {
  return (
    <div className="parapg">
      <h3 className="paralogo1">PRO WORLD</h3>
      <img className="paralogo" src={paralogo} alt="main " />
      <div className="paramenu">
        <ul className="paramenuul">
          <li className="paramenuli">
            <a className="paramenua" href="./main.html">
              Home
            </a>
          </li>
          <li className="paramenuli">
            <a className="paramenua" href="./course.html">
              Courses
            </a>
          </li>
          <li className="paramenuli">
            <a className="paramenua" href="./contact.html">
              Contact us
            </a>
          </li>
          <li className="paramenuli">
            <a className="paramenua" href="./about.html">
              About
            </a>
          </li>
        </ul>
      </div>

      <div className="paracontainer">
        <h3 className="parah3">HTML Tutorial</h3>
        <div className="paracontent">
          <a className="paraconta" href="#">
            <p className="paracontp">HTML Introduction</p>
          </a>
          <a className="paraconta" href="#">
            <p className="paracontp">HTML Tags</p>
          </a>
          <a className="paraconta" href="#">
            <p className="paracontp">HTML Elements</p>
          </a>
          <a className="paraconta" href="#">
            <p className="paracontp">HTML Attributes</p>
          </a>
          <a className="paraconta" href="#">
            <p className="paracontp">HTML Headings</p>
          </a>
          <a className="paraconta" href="#">
            <p className="paracontp">HTML Paragraphs</p>
          </a>
          <a
            className="paraconta"
            href="https://forms.gle/p4M4YjYaYyFYtWDz9"
            target="_blank"
          >
            <p className="paracontp">HTML Quiz</p>
          </a>
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
        <a href="./paragraph.html" className="paranext">
          Next
        </a>
        <a href="./attributes.html" className="paraprevious">
          {" "}
          Previous
        </a>
      </div>

      <div className="parafooter">
        <div className="paramain-content">
          <div className="paraleft-box">
            <h2 className="paraquick">Quick Links</h2>
            <ul className="paraleftul">
              <li className="paraleftli">
                <a className="paralefta" href="./course.html">
                  Courses
                </a>
              </li>
              <li className="paraleftli">
                <a className="paralefta" href="# ">
                  Certificates
                </a>
              </li>
              <li className="paraleftli">
                <a className="paralefta" href="./contact.html">
                  Help
                </a>
              </li>
              <li className="paraleftli">
                <a className="paralefta" href="./main.html">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div className="paracenter-box">
            <h2 className="paraaddress">Address</h2>
            <div className="paralocation">
              <i className="fas fa-map-marker-alt"></i>
              <i className="paratext">Coimbatore,Tamilnadu</i>
            </div>
            <div className="paramail">
              <i className="fas fa-envelope"></i>
              <i className="text">talktorohini21@gmail.com</i>
            </div>
            <div className="paraphone">
              <i className="fas fa-phone-alt"></i>
              <i className="paratext">+91 7339481237</i>
            </div>

            <a
              className="parabutton"
              href="https://www.google.co.in/maps/place/PSG+College+of+Arts+%26+Science/@11.0332141,77.0316629,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba858526b5c0591:0x6c452206816788d4!8m2!3d11.0332088!4d77.0338516?hl=en&authuser=0 "
            >
              Locate Us
            </a>
          </div>
          <div className="pararight-box">
            <h2 className="paraquick">Connect with us</h2>
            <div className="parasocial_media">
              <ul className="parasocul">
                <li className="parasocli">
                  <a href="# " className="parasoca">
                    <i
                      className=" parasoci fab fa-facebook"
                      aria-hidden="true "
                    ></i>
                  </a>
                </li>
                <li className="parasocli">
                  <a href="# " class="parasoca">
                    <i
                      className=" parasoci fab fa-twitter"
                      aria-hidden="true "
                    ></i>
                  </a>
                </li>
                <li className="parasocli">
                  <a href="# " className="parasoca">
                    <i
                      className=" parasoci fab fa-google-plus-g"
                      aria-hidden="true "
                    ></i>
                  </a>
                </li>
                <li className="parasocli">
                  <a href="# " className="parasoca">
                    <i
                      className=" parasoci fab fa-linkedin"
                      aria-hidden="true "
                    ></i>
                  </a>
                </li>
                <li className="parasocli">
                  <a href="# " className="parasoca">
                    <i
                      className=" parasoci fab fa-instagram"
                      aria-hidden="true "
                    ></i>
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
