import React from "react";
import { Link } from "react-router-dom";
export default function Card(props) {
  var { name } = props.arrcd;
  return (
    <div className="coursecrd1">
      <div className="co-container1">
        <div className="co-box">
          <div className="co-imgBx">
            <img className="co-img2" src={props.arrcd.img} alt="html" />
            <h3 className="co-head1">{name}</h3>
          </div>
          <div className="co-button">
            <Link className="co-enrol" to={`/enroll/:${name}`}>
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
