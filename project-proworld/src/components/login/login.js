import React from "react";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import "./loginr.css";
import axios from "axios";
export default function Login() {
  useEffect(() => {
    window.scroll = (0, 0);
  }, []);
  const cookies = new Cookies();
  const [usr, setusr] = useState("");
  const [pass, setpass] = useState("");
  const [Login, setLogin] = useState(false);
  cookies.set("login", "false");
  cookies.set("user", "User");
  var arw2 = async (e) => {
    e.preventDefault();
    const arrayform2 = {
      Name: usr,
      Password: pass,
    };
    console.log(arrayform2);
    let Data = await axios.post(
      "http://localhost:2000/proworld/login",
      arrayform2
    );
    if (Data.data.err == "Username Not Exists") {
      console.log("Username not exists");
    }
    if (Data.data.err == "Password Incorrect") {
      console.log("Password Incorrect");
      console.log(Data.data.err);
    }
    if (Data.data.err == null) {
      console.log("FARMHAAT, Welcomes you!!!");
      console.log(Data.data.err);
    }
    console.log(Data.data.err);
    console.log(Data);
    if (Data.status == 204) {
      setLogin(true);
      cookies.set("user", usr);
      cookies.set("login", "true");
      window.open("http://localhost:3000/proworld/", "_self");
    }
  };
  return (
    <div className="loginpg">
      <div className="hero">
        <div className="form-box">
          <div className="button-box">
            <div id="btn"></div>
            <button type="button" className="toggle-btn" onClick="login()">
              Log in
            </button>
          </div>
          <form id="login" className="input-group">
            <input
              type="text"
              className="input-field"
              placeholder="User Id"
              required
              onChange={(e) => setusr(e.target.value)}
            />
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              required
              onChange={(e) => setpass(e.target.value)}
            />
            <input type="checkbox" class="check-box" />
            <span className="logspan">Remember Password</span>
            <button type="submit" className="submit-btn" onClick={arw2}>
              Log in
            </button>
            <Link to="/register">
              <button type="button" className="lgin">
                New User? Register
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
