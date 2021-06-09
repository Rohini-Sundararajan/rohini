import React from "react";
import "./headr.css";
import headlogo from "./../../assets/mainlogoroh.jpg";
export default function Head() {
  return (
    <div className="headpg">
      <h3 className="hlogo1">PRO WORLD</h3>
      <img className="hlogo" src={headlogo} alt="main " />
      <div className="hmenu">
        <ul className="headul">
          <li className="headli">
            <a className="heada" href="./main.html">
              Home
            </a>
          </li>
          <li className="headli">
            <a className="heada" href="./course.html">
              Courses
            </a>
          </li>
          <li className="headli">
            <a className="heada" href="./contact.html">
              Contact us
            </a>
          </li>
          <li className="headli">
            <a className="heada" href="./about.html">
              About
            </a>
          </li>
        </ul>
      </div>

      <div className="headcontainer">
        <h3 className="headh3">HTML Tutorial</h3>
        <div className="hcontent">
          <a className="hcona" href="#">
            <p className="headp">HTML Introduction</p>
          </a>
          <a className="hcona" href="#">
            <p className="headp">HTML Tags</p>
          </a>
          <a className="hcona" href="#">
            <p className="headp">HTML Elements</p>
          </a>
          <a className="hcona" href="#">
            <p className="headp">HTML Attributes</p>
          </a>
          <a className="hcona" href="#">
            <p className="headp">HTML Headings</p>
          </a>
          <a className="hcona" href="#">
            <p className="headp">HTML Paragraphs</p>
          </a>
          <a
            className="hcona"
            href="https://forms.gle/p4M4YjYaYyFYtWDz9"
            target="_blank"
          >
            <p className="headp">HTML Quiz</p>
          </a>
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
        <h1>heading 1</h1> <br />
        <h2>heading 2</h2>
        <br />
        <h3>heading 3</h3>
        <br />
        <h4>heading 4</h4>
        <br />
        <h5>heading 5</h5>
        <br />
        <h6>heading 6</h6>
        <br />
      </div>
      <div className="heading3">
        <xmp className="hx1">
          HTML headings are defined with the h1 to h6 tags.
        </xmp>

        <xmp className="hx2">
          <h1 /> defines the most important heading.
        </xmp>
        <xmp className="hx3">
          <h6 /> defines the least important heading.
        </xmp>

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
        <a href="./paragraph.html" classv="headnext">
          Next
        </a>
        <a href="./attributes.html" className="headprevious">
          Previous
        </a>
      </div>

      <div className="head-footer">
        <div className="hmain-content ">
          <div className="hleft-box ">
            <h2 className="hmainh2">Quick Links</h2>
            <ul className="hmain-ul">
              <li className="hmain-li">
                <a className="hmain-a" href="./course.html">
                  Courses
                </a>
              </li>
              <li className="hmain-li">
                <a className="hmain-a" href="# ">
                  Certificates
                </a>
              </li>
              <li classv="hmain-li">
                <a className="hmain-a" href="./contact.html">
                  Help
                </a>
              </li>
              <li className="hmain-li">
                <a className="hmain-a" href="./main.html">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div className="hcenter-box ">
            <h2 className="hce-h2">Address</h2>
            <div className="hce-location ">
              <i className="fas fa-map-marker-alt "></i>
              <i className="hce-text ">Coimbatore,Tamilnadu</i>
            </div>
            <div className="hce-mail ">
              <i className="fas fa-envelope "></i>
              <i className="hce-text ">talktorohini21@gmail.com</i>
            </div>
            <div className="hce-phone ">
              <i className="fas fa-phone-alt "></i>
              <i className="hce-text ">+91 7339481237</i>
            </div>

            <a
              className="headbutton "
              href="https://www.google.co.in/maps/place/PSG+College+of+Arts+%26+Science/@11.0332141,77.0316629,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba858526b5c0591:0x6c452206816788d4!8m2!3d11.0332088!4d77.0338516?hl=en&authuser=0 "
            >
              Locate Us
            </a>
          </div>
          <div className="hright-box ">
            <h2 className="hrt-h2">Connect with us</h2>
            <div className="hsocial_media ">
              <ul className="hrt-ul">
                <li className="hrt-li">
                  <a className="hrt-a" href="# ">
                    <i className="fab fa-facebook " aria-hidden="true "></i>
                  </a>
                </li>
                <li className="hrt-li">
                  <a className="hrt-a" href="# ">
                    <i className="fab fa-twitter " aria-hidden="true "></i>
                  </a>
                </li>
                <li className="hrt-li">
                  <a className="hrt-a" href="# ">
                    <i
                      className="fab fa-google-plus-g "
                      aria-hidden="true "
                    ></i>
                  </a>
                </li>
                <li className="hrt-li">
                  <a className="hrt-a" href="# ">
                    <i className="fab fa-linkedin " aria-hidden="true "></i>
                  </a>
                </li>
                <li className="hrt-li">
                  <a className="hrt-a" href="# ">
                    <i className="fab fa-instagram " aria-hidden="true "></i>
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
