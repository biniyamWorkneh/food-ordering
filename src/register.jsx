import React, { useState, useEffect } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const DataRegister = async () => {
    if (!username) {
      alert("please fill your name");
      return;
    }

    if (!email) {
      alert("please fill your email");
      return;
    }

    if (!password) {
      alert("please fill your password");
      return;
    }
    const userData = { username, email, password };
    try {
      const response = await axios.post(
        "http://127.0.0.1:4500/registers",
        userData
      );
      if (response.data.success) {
        navigate("/home");
      }
    } catch (error) {
      // console.log("internal server error", error);
      alert("please try again unexpected error occurs");
    }
  };

  useEffect(() => {
    if (success) {
      navigate("/home");
    }
  }, [success,navigate]);

  return (
    <div className="ok">
      <div className="login-container">
        <h2>Register</h2>
        <div className="input-container">
          <h4>user name</h4>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <h4>email</h4>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h4>password</h4>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button className="login-button" onClick={DataRegister}>
            register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
