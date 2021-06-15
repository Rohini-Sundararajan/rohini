import React from "react";
import "./headr.css";
import headlogo from "./../../assets/mainlogoroh.jpg";
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
export default function Head() {
  return (
    <div className="headpg">
      <h3 className="hlogo1">PRO WORLD</h3>
      <img className="hlogo" src={headlogo} alt="main " />
      <div className="hmenu">
        <ul className="headul">
          <li className="headli">
            <Link className="heada" to="/">
              Home
            </Link>
          </li>
          <li className="headli">
            <Link className="heada" to="/course">
              Courses
            </Link>
          </li>
          <li className="headli">
            <Link className="heada" to="/contact">
              Contact us
            </Link>
          </li>
          <li className="headli">
            <Link className="heada" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>

      <div className="headcontainer">
        <h3 className="headh3">HTML Tutorial</h3>
        <div className="hcontent">
          <Link className="hcona" to="/html">
            <p className="headp">HTML Introduction</p>
          </Link>
          <Link className="hcona" to="/tag">
            <p className="headp">HTML Tags</p>
          </Link>
          <Link className="hcona" to="/Element">
            <p className="headp">HTML Elements</p>
          </Link>
          <Link className="hcona" to="/attribute">
            <p className="headp">HTML Attributes</p>
          </Link>
          <Link className="hcona" to="/head">
            <p className="headp a5">HTML Headings</p>
          </Link>
          <Link className="hcona" to="/para">
            <p className="headp">HTML Paragraphs</p>
          </Link>
          <Link
            className="hcona"
            to="https://forms.gle/p4M4YjYaYyFYtWDz9"
            target="_blank"
          >
            <p className="headp">HTML Quiz</p>
          </Link>
        </div>
      </div>
      <div className="heading1">
        <h3 className="hhead1">HTML Headings</h3>
        <p className="headp1">
          HTML headings are titles or subtitles that you want to display on a
          webpage.
          <br /> Example:
        </p>
      </div>
      <div className="heading2">
        <h1>heading 1</h1>
        <h2>heading 2</h2>
        <h3>heading 3</h3>
        <h4>heading 4</h4>
        <h5>heading 5</h5>
        <h6>heading 6</h6>
      </div>
      <div className="heading3">
        <xmp className="hx1">
          HTML headings are defined with the h1 to h6 tags.
        </xmp>

        <xmp className="hx2">h1 defines the most important heading.</xmp>
        <xmp className="hx3">h6 defines the least important heading.</xmp>

        <p className="head-p2">Example:</p>
        <xmp className="hx4">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
        </xmp>
        <h3 className="hhead2"> Headings Are Important</h3>
        <p className="head-p3">
          Search engines use the headings to index the structure and content of
          your web pages. <br /> Users often skim a page by its headings. It is
          important to use headings to show the document structure. <br />
        </p>
        <h3 className="hhead3">Bigger Headings</h3>
        <p className="hp4">
          Each HTML heading has a default size. However, you can specify the
          size for any <br /> heading with the style attribute, using the CSS
          font-size property:
        </p>
      </div>
      <div className="headbtn">
        <Link to="/para" className="headnext">
          Next
        </Link>
        <Link to="/attribute" className="headprevious">
          Previous
        </Link>
      </div>

      <div className="head-footer">
        <div className="hmain-content ">
          <div className="hleft-box ">
            <h2 className="hmainh2">Quick Links</h2>
            <ul className="hmain-ul">
              <li className="hmain-li">
                <Link className="hmain-a" to="/">
                  Home
                </Link>
              </li>
              <li className="hmain-li">
                <Link className="hmain-a" to="/mycourse ">
                  My Enrollments
                </Link>
              </li>
              <li className="hmain-li">
                <Link className="hmain-a" to="/contact">
                  Help
                </Link>
              </li>
              <li className="hmain-li">
                <Link className="hmain-a" to="./course">
                  Courses
                </Link>
              </li>
            </ul>
          </div>
          <div className="hcenter-box ">
            <h2 className="hce-h2">Address</h2>
            <div className="hce-location ">
              <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <i className="hce-text ">Coimbatore,Tamilnadu</i>
            </div>
            <div className="hce-mail ">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <i className="hce-text ">talktorohini21@gmail.com</i>
            </div>
            <div className="hce-phone ">
              <span>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              <i className="hce-text ">+91 7339481237</i>
            </div>

            <Link
              className="headbutton "
              to="https://www.google.co.in/maps/place/PSG+College+of+Arts+%26+Science/@11.0332141,77.0316629,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba858526b5c0591:0x6c452206816788d4!8m2!3d11.0332088!4d77.0338516?hl=en&authuser=0 "
            >
              Locate Us
            </Link>
          </div>
          <div className="hright-box ">
            <h2 className="hrt-h2">Connect with us</h2>
            <div className="hsocial_media ">
              <ul className="hrt-ul">
                <li className="hrt-li">
                  <Link className="hrt-a" to="# ">
                    <span>
                      <FontAwesomeIcon icon={faFacebook} />
                    </span>
                  </Link>
                </li>
                <li className="hrt-li">
                  <Link className="hrt-a" to="# ">
                    <span>
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                  </Link>
                </li>
                <li className="hrt-li">
                  <Link className="hrt-a" to="# ">
                    <span>
                      <FontAwesomeIcon icon={faGooglePlus} />
                    </span>
                  </Link>
                </li>
                <li className="hrt-li">
                  <Link className="hrt-a" to="# ">
                    <span>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </span>
                  </Link>
                </li>
                <li className="hrt-li">
                  <Link className="hrt-a" to="# ">
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
