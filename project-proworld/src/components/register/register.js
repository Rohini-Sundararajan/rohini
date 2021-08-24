import React from "react";
import { useEffect, useState } from "react";
import "./register.css";
import axios from "axios";
export default function Register() {
  useEffect(() => {
    window.scroll = (0, 0);
  }, []);
  var arrw3 = async () => {
    const arrayform3 = {
      Name: name2,
      Mail: email1,
      Password: pass2,
      Confirmpass: pass1,
    };
    console.log(arrayform3);
    if (pass1 === pass2) {
      let reg = await axios.post(
        "http://localhost:2000/proworld/register",
        arrayform3
      );
    }
  };
  const [name2, setname2] = useState("");
  const [email1, setemail1] = useState("");
  const [pass2, setpass2] = useState("");
  const [pass1, setpass1] = useState("");

  return (
    <div>
      <form id="register" className="input-group">
        <input
          type="text"
          className="input-field"
          placeholder="User Id"
          onChange={(e) => setname2(e.target.value)}
          required
        />
        <input
          type="email"
          className="input-field"
          placeholder="Email Id"
          onChange={(e) => setemail1(e.target.value)}
          required
        />
        <input
          type="password"
          className="input-field"
          placeholder="Password"
          onChange={(e) => setpass2(e.target.value)}
          required
        />
        <input
          type="password"
          className="input-field"
          placeholder="Confirm password"
          onChange={(e) => setpass1(e.target.value)}
          required
        />
        <button type="submit" onClick={arrw3} className="submit-btns">
          Register
        </button>
      </form>
    </div>
  );
}
