import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = async () => {
    const LoginData = { username, password };
    if (!username) {
      alert("please fill you username");
      return;
    }
    if (!password) {
      alert("please fill your password");
      return;
    }
    try {
      const respond = await axios.post(
        "http://127.0.0.1:4500/login",
        LoginData
      );
      console.log(LoginData);
      console.log(respond.data);
    } catch (error) {
      console.log("something wrong");
    }
  };
  return (
    <div className="ok">
      <div className="login-container">
        <h2>Login Page</h2>
        <div className="input-container">
          <h4>username</h4>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <button className="login-button" onClick={userLogin}>
            Login
          </button>
        </div>
        <p>
          {" "}
          to register
          <Link to="/register" style={{ color: "green", marginLeft: "10px" }}>
            click here
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
