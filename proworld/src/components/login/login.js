import React from "react";
import "./loginr.css";
export default function Login() {
  return (
    <div className="loginpg">
      <div className="hero">
        <div className="form-box">
          <div className="button-box">
            <div id="btn"></div>
            <button type="button" className="toggle-btn" onClick="login()">
              Log in
            </button>
            <button type="button" className="toggle-btn" onClick="register()">
              Register
            </button>
          </div>
          <form id="login" className="input-group">
            <input
              type="text"
              className="input-field"
              placeholder="User Id"
              required
            />
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              required
            />
            <input type="checkbox" class="check-box" />
            <span className="logspan">Remember Password</span>
            <button type="submit" className="submit-btn">
              Log in
            </button>
          </form>
          <form id="register" className="input-group">
            <input
              type="text"
              className="input-field"
              placeholder="User Id"
              required
            />
            <input
              type="email"
              className="input-field"
              placeholder="Email Id"
              required
            />
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              required
            />
            <input
              type="password"
              className="input-field"
              placeholder="Confirm password"
              required
            />
            <button type="submit" className="submit-btns">
              Register
            </button>
          </form>
        </div>
      </div>
      {/* <script>
        var x = document.getElementById("login");
        var y = document.getElementById("register");
        var z = document.getElementById("btn");

        function register() {
            x.style.left = "-400px";
            y.style.left = "50px";
            z.style.left = "110px";
        }

        function login() {
            x.style.left = "50px";
            y.style.left = "450px";
            z.style.left = "0";
        }
    </script>   */}
    </div>
  );
}
