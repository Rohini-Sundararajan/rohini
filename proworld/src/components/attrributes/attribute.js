import React from "react";
import "./attributer.css";
import malogo from "../../assets/mainlogoroh.jpg";
import { Link } from "react-router-dom";
export default function Attribute() {
  return (
    <div className="attributepg">
      <h3 className="attlogo1">PRO WORLD</h3>
      <img className="attlogo" src={malogo} alt="main " />
      <div className="attmenu">
        <ul className="attul">
          <li className="attli">
            <Link className="atta ath" to="/">
              Home
            </Link>
          </li>
          <li className="attli">
            <Link className="atta atc" to="/course">
              Courses
            </Link>
          </li>
          <li className="attli">
            <Link className="atta atcc" to="/contact">
              Contact us
            </Link>
          </li>
          <li className="attli">
            <Link className="atta ata" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>

      <div className="attcontainer">
        <h3 className="atth3">HTML Tutorial</h3>
        <div className="attcontent">
          <Link className="attcona" to="/html">
            <p className="att-p">HTML Introduction</p>
          </Link>
          <Link className="attcona" to="/tag">
            <p className="att-p">HTML Tags</p>
          </Link>
          <Link className="attcona" to="/element">
            <p className="att-p">HTML Elements</p>
          </Link>
          <Link className="attcona" to="/attribute">
            <p class="att-p">HTML Attributes</p>
          </Link>
          <Link className="attcona" to="/head">
            <p className="att-p">HTML Headings</p>
          </Link>
          <Link className="attcona" to="/para">
            <p className="att-p">HTML Paragraphs</p>
          </Link>
          <Link className="attcona" to="https://forms.gle/p4M4YjYaYyFYtWDz9">
            <p className="att-p">HTML Quiz</p>
          </Link>
        </div>
      </div>
      <div className="attribute1">
        <h3 className="att-head1">HTML Attributes</h3>
        <ul className="at-ul">
          <li className="at-li">
            HTML attributes provide additional information about HTML elements.
          </li>
          <li className="at-li">All HTML elements can have attributes</li>
          <li className="at-li">
            Attributes provide additional information about elements
          </li>
          <li className="at-li">
            Attributes are always specified in the start tag
          </li>
          <li className="at-li">
            Attributes usually come in name/value pairs like: name="value"
          </li>
        </ul>
        <p className="att-p1">The href Attribute:</p>
        <xmp className="att-x1">
          The <a></a> tag defines a hyperlink.
        </xmp>
        <p className="att-p2">
          The href attribute specifies the URL of the page the link goes to
          <br />
          Example :
        </p>
        <xmp className="att-x2">href="https://www.google.com" Visit google</xmp>
        <p className="att-p3">The src Attribute:</p>
        <xmp className="att-x3">
          The img tag is used to embed an image in an HTML page.
        </xmp>
        <p className="att-p4">
          The src attribute specifies the path to the image to be displayed.
          <br />
          Example :
        </p>
        <xmp className="att-x4">img src="img_girl.jpg"</xmp>
        <p className="att-p5">
          There are two ways to specify the URL in the src attribute:
        </p>
        <p className="att-p6">
          <b>1. Absolute URL</b> - Links to an external image that is hosted on
          another website Example:
          src="https://www.w3schools.com/images/img_girl.jpg". <br />
          <b>Notes:</b> External images might be under copyright. If you do not
          get permission to use it, you may be in violation of copyright laws.
          <br /> In addition, you cannot control external images; it can
          suddenly be removed or changed.
          <br /> <b>2. Relative URL</b> - Links to an image that is hosted
          within the website. Here, the URL does not include the domain name. If
          the URL begins without a slash, it will be relative to the current
          page. Example: src="img_girl.jpg". If the URL begins with a slash, it
          will be relative to the domain. Example: src="/images/img_girl.jpg".
          <br />
          <b>Tip:</b> It is almost always best to use relative URLs. They will
          not break if you change domain.
        </p>
        <p className="att-p7">
          The width and height Attributes:
          <br /> Example
        </p>
        <xmp className="att-x5">
          The img tag should also contain the width and height attributes
        </xmp>
        <p className="att-p8">
          which specifies the width and height of the image (in pixels).
        </p>

        <xmp className="att-x6">
          img src="girl.jpg" width="500" height="600"
        </xmp>
        <p className="att-p9"> The alt Attribute:</p>
        <xmp className="att-x7">
          The required alt attribute for the <img></img> tag specifies an
          alternate text for an image.
        </xmp>
        <p className="att-p10">
          if the image for some reason cannot be displayed. This can be due to
          slow connection, <br /> or an error in the src attribute, or if the
          user uses a screen reader.
          <br /> Example:
        </p>
        <xmp className="att-x8">
          img src="img_girl.jpg" alt="Girl with a jacket.
        </xmp>
        <p className="att-p11">The style Attribute: </p>
        <p className="att-p12">
          The style attribute is used to add styles to an element, such as
          color, font, size, and more.
          <br /> Example:
        </p>
        <xmp className="att-x9">This is a red paragraph.</xmp>

        <p className="att-p13">The Title Attribute:</p>
        <p className="att-p14">
          The title attribute defines some extra information about an element.
          <br /> The value of the title attribute will be displayed as a tooltip
          when you mouse over the element:
          <br /> Example:
        </p>
        <xmp className="att-x10">
          <p title="I'm a tooltip">This is a paragraph.</p>{" "}
        </xmp>
      </div>
      <div className="att-btn">
        <Link to="/attribute" className="att-next">
          Next
        </Link>
        <Link to="/tag" className="att-previous">
          Previous
        </Link>
      </div>

      <div className="att-footer">
        <div className="attmain-content">
          <div className="attleft-box">
            <h2 className="atlt-h2">Quick Links</h2>
            <ul className="atlt-ul">
              <li className="atlt-li">
                <Link className="atlt-a" to="/">
                  Home
                </Link>
              </li>
              <li className="atlt-li">
                <Link className="atlt-a" to="/mycourse">
                  My Enrollments
                </Link>
              </li>
              <li className="atlt-li">
                <Link className="atlt-a" to="/contact">
                  Help
                </Link>
              </li>
              <li className="atlt-li">
                <Link className="atlt-a" to="/course">
                  Courses
                </Link>
              </li>
            </ul>
          </div>
          <div className="attcenter-box ">
            <h2 className="atce-h2">Address</h2>
            <div className="atce-location ">
              <i className="fas fa-map-marker-alt "></i>
              <i className="atce-text ">Coimbatore,Tamilnadu</i>
            </div>
            <div className="atce-mail ">
              <i className="fas fa-envelope "></i>
              <i className="atce-text ">talktorohini21@gmail.com</i>
            </div>
            <div className="atce-phone ">
              <i className="fas fa-phone-alt "></i>
              <i className="atce-text ">+91 7339481237</i>
            </div>

            <Link
              className="atce-button "
              to="https://www.google.co.in/maps/place/PSG+College+of+Arts+%26+Science/@11.0332141,77.0316629,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba858526b5c0591:0x6c452206816788d4!8m2!3d11.0332088!4d77.0338516?hl=en&authuser=0 "
            >
              Locate Us
            </Link>
          </div>
          <div className="attright-box ">
            <h2 className="atrt-h2">Connect with us</h2>
            <div className="atrtsocial_media ">
              <ul className="atrt-ul">
                <li className="atrt-li">
                  <Link className="atrt-a" to="# ">
                    <i className="fab fa-facebook " aria-hidden="true "></i>
                  </Link>
                </li>
                <li className="atrt-li">
                  <Link className="atrt-a" to="# ">
                    <i className="fab fa-twitter " aria-hidden="true "></i>
                  </Link>
                </li>
                <li className="atrt-li">
                  <Link className="atrt-a" to="# ">
                    <i
                      className="fab fa-google-plus-g "
                      aria-hidden="true "
                    ></i>
                  </Link>
                </li>
                <li className="atrt-li">
                  <Link className="atrt-a" to="# ">
                    <i className="fab fa-linkedin " aria-hidden="true "></i>
                  </Link>
                </li>
                <li className="atrt-li">
                  <Link className="atrt-a" to="#">
                    <i className="fab fa-instagram " aria-hidden="true "></i>
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
