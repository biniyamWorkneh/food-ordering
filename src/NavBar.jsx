// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import im from "../public/images/logo2.jpg";
import UserProfile from "./UserContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("bini", isLoggedIn);

  useEffect(() => {
    // Check if user is logged in by checking local storage
    const userData = localStorage.getItem("userData");
    setIsLoggedIn(!!userData);
  }, []);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav>
      <div className="logo">
        <img
          src={im}
          style={{ width: "5rem", height: "4rem", borderRadius: "2rem" }}
          alt="logo"
        />
      </div>
      <div
        style={{ marginRight: "28rem", fontWeight: "bold", fontSize: "2rem" }}
      >
        welcome
      </div>
      <ul className={showMenu ? "menu-active" : "menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/details">detail</Link>
        </li>
        <li>
          <Link to="/orderus">Order</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/payment">Pay</Link>
        </li>
      </ul>
      <div className="menu-icon" onClick={handleClick}>
        <AiOutlineMenu />
      </div>
      {isLoggedIn && <UserProfile />}
    </nav>
  );
};

export default Navbar;
